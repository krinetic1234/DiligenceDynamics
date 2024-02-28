import requests
import praw
from nltk.sentiment import SentimentIntensityAnalyzer
import matplotlib.pyplot as plt
from test_ft import ai_output
import praw
import nltk
nltk.download('vader_lexicon')
# reddit credentials
reddit = praw.Reddit(
    client_id='r2CWL-NH4e0nEe9sf6Czbw',
    client_secret='WRLw9zcl8dkRjtnCQ9AZYLty4GMDSQ',
    user_agent='python:DiligenceDynamics:v1.0 (by /u/Kmaniar_1234)'
)

# news api credentials
newsapi_key = 'eab52d8b241d40eaba0b3fc166139863'
company_name = 'NVIDIA'

# together AI models 
krish_model_ft = "Krish/Mixtral-8x7B-v0.1-dildyn-ft-2024-02-25-02-09-30"
mistral_model_inf = "mistralai/Mixtral-8x7B-Instruct-v0.1"

# fetch subreddit sentiment
def fetch_reddit_sentiment(reddit, company_name):
    subreddit = reddit.subreddit(company_name)
    top_posts = subreddit.top(time_filter='week', limit=20)
    sia = SentimentIntensityAnalyzer()

    sentiment_scores = []  
    ai_content = ""

    for post in top_posts:
        title = post.title
        content = post.selftext
        ai_content += content
        sentiment = sia.polarity_scores(content)['compound']
        adjusted_score = sentiment * 5  
        sentiment_scores.append(adjusted_score)  
    
    ai_content = ai_output(mistral_model_inf, ai_content)
    ai_sentiment = sia.polarity_scores(ai_content)['compound'] * 5

    return sentiment_scores, ai_sentiment

# fetch news articles sentiment
def fetch_news_sentiment(api_key, company_name):
    url = f'https://newsapi.org/v2/everything?q={company_name}&apiKey={api_key}'
    response = requests.get(url)
    articles = response.json().get('articles', [])
    
    # sentiment analyzer (replace with an LLM or something better)
    sia = SentimentIntensityAnalyzer()
    sentiment_scores = []
    ai_description = ""

    for article in articles:
        description = article.get('content', '') # consider using 'description'
        ai_description += description
        if description:
            sentiment_score = sia.polarity_scores(description)['compound']
            adjusted_score = sentiment_score * 5
            sentiment_scores.append(adjusted_score)
        else:
            sentiment_scores.append(None)  # no score

    
    ai_description = ai_output(mistral_model_inf, ai_description)
    ai_sentiment = sia.polarity_scores(ai_description)['compound'] * 5
    
    return sentiment_scores, ai_sentiment


news_scores, news_ai_sentiment = fetch_news_sentiment(newsapi_key, company_name)
reddit_scores, reddit_ai_sentiment = fetch_reddit_sentiment(reddit, company_name)

# filtering both news and reddit
news_scores_filtered = list(filter(lambda x: x is not None, news_scores))
reddit_scores_filtered = list(filter(lambda x: x is not None, reddit_scores))

# plotting function
def plot_sentiment_scores(scores, title, file_name):
    plt.figure(figsize=(10, 6))
    plt.hist(scores, bins=20, color='skyblue')
    plt.title(f'Distribution of Sentiment Scores for {title}')
    plt.xlabel('Sentiment Score (-5 to 5)')
    plt.ylabel('Number of Posts/Articles')
    plt.grid(axis='y', alpha=0.75)
    plt.savefig(f"sentiment/viz/{file_name}")
    plt.close()  

# individual histograms
plot_sentiment_scores(news_scores_filtered, 'NVIDIA News Articles', 'NVDA_news_sentiment_distribution.png')
plot_sentiment_scores(reddit_scores_filtered, 'NVIDIA Reddit Posts', 'NVDA_reddit_sentiment_distribution.png')

# combined histogram
combined_scores = news_scores_filtered + reddit_scores_filtered
plot_sentiment_scores(combined_scores, 'NVIDIA News and Reddit Combined', 'NVDA_combined_sentiment_distribution.png')