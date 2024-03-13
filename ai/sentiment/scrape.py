import requests
import praw
from nltk.sentiment import SentimentIntensityAnalyzer
import matplotlib.pyplot as plt
from test_ft import ai_output
import nltk
from transformers import AutoModelForCausalLM, AutoTokenizer
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

# set up mxstral model
device = "cuda" 
model = AutoModelForCausalLM.from_pretrained("mistralai/Mixtral-8x7B-v0.1")
tokenizer = AutoTokenizer.from_pretrained("mistralai/Mixtral-8x7B-v0.1")

# AI models 
# krish_model_ft = "Krish/Mixtral-8x7B-v0.1-dildyn-ft-2024-02-25-02-09-30"
# mistral_model_inf = "mistralai/Mixtral-8x7B-Instruct-v0.1"

# fetch subreddit sentiment
def fetch_reddit_sentiment(company_name, reddit=reddit):
    subreddit = reddit.subreddit(company_name)
    top_posts = subreddit.top(time_filter='week', limit=20)
    sia = SentimentIntensityAnalyzer()

    titles = []
    sentiment_scores = []  

    for post in top_posts:
        title = post.title
        content = post.selftext
        sentiment = sia.polarity_scores(content)['compound']
        adjusted_score = sentiment * 5  
        titles.append(title)
        sentiment_scores.append(adjusted_score)  

    return titles, sentiment_scores

# fetch news articles sentiment
def fetch_news_sentiment(company_name, api_key=newsapi_key):
    url = f'https://newsapi.org/v2/everything?q={company_name}&apiKey={api_key}'
    response = requests.get(url)
    articles = response.json().get('articles', [])
    
    # sentiment analyzer (replace with an LLM or something better)
    sia = SentimentIntensityAnalyzer()
    titles = []
    sentiment_scores = []

    for article in articles:
        title = article.get('title', '')
        description = article.get('content', '') # consider using 'description'
        if description:
            sentiment_score = sia.polarity_scores(description)['compound']
            adjusted_score = sentiment_score * 5
            sentiment_scores.append(adjusted_score)
        else:
            sentiment_scores.append(None)  # no score
        titles.append(title)
    
    return titles, sentiment_score

def fetch_ai_response(titles, scores):
    prompt = "You are a financial analyst that needs to describe the general distribution of sentiment of a specific company based on its individual articles. Here are the latest titles and their sentiment scores:\n"
    for title, score in zip(titles, scores):
        prompt += f"Title: {title}, Sentiment Score: {score}\n"

    model_inputs = tokenizer([prompt], return_tensors="pt").to(device)
    model.to(device)
    generated_ids = model.generate(**model_inputs, max_new_tokens=100, do_sample=True)
    return tokenizer.batch_decode(generated_ids)[0]

# getting scores and filtering them
news_tt, news_scores = fetch_news_sentiment(newsapi_key, company_name)
news_scores_filtered = list(filter(lambda x: x is not None, news_scores))

reddit_tt, reddit_scores = fetch_reddit_sentiment(reddit, company_name)
reddit_scores_filtered = list(filter(lambda x: x is not None, reddit_scores))

# plotting function
def plot_sentiment_scores(scores, file_name):
    plt.figure(figsize=(10, 6))
    path = f"/Users/krish/Desktop/CS/Projects/DiligenceDynamics/app/static/{file_name}"
    plt.hist(scores, bins=20, color='skyblue')
    plt.title(f'Distribution of Sentiment Scores for {company_name}')
    plt.xlabel('Sentiment Score (-5 to 5)')
    plt.ylabel('Number of Posts/Articles')
    plt.grid(axis='y', alpha=0.75)
    plt.savefig(path)
    return path

# api function calls
def news_results(company_name):
    file_name = f"{company_name} news"
    path = plot_sentiment_scores(news_scores_filtered, file_name)
    news_ai = fetch_ai_response(news_tt, news_scores_filtered)
    return path, news_ai

def reddit_results(company_name):
    file_name = f"{company_name} reddit"
    path = plot_sentiment_scores(reddit_scores_filtered, file_name)
    reddit_ai = fetch_ai_response(reddit_tt, reddit_scores_filtered)
    return path, reddit_ai

# # individual histograms
# plot_sentiment_scores(news_scores_filtered, 'Apple News Articles', 'Apple_news_sentiment_distribution.png')
# plot_sentiment_scores(reddit_scores_filtered, 'Apple Reddit Posts', 'NVDA_reddit_sentiment_distribution.png')

# # combined histogram
# combined_scores = news_scores_filtered + reddit_scores_filtered
# plot_sentiment_scores(combined_scores, 'NVIDIA News and Reddit Combined', 'NVDA_combined_sentiment_distribution.png')
