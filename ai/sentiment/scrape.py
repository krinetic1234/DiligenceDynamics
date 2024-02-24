import requests
from nltk.sentiment import SentimentIntensityAnalyzer
import matplotlib.pyplot as plt

def fetch_news_articles_and_analyze_sentiment(api_key, company_name):
    url = f'https://newsapi.org/v2/everything?q={company_name}&apiKey={api_key}'
    response = requests.get(url)
    articles = response.json().get('articles', [])
    
    # sentiment analyzer (replace with an LLM or something better)
    sia = SentimentIntensityAnalyzer()
    sentiment_scores = []
    
    for article in articles:
        description = article.get('content', '') # consider using 'description'
        if description:
            sentiment_score = sia.polarity_scores(description)['compound']
            adjusted_score = sentiment_score * 5
            sentiment_scores.append(adjusted_score)
        else:
            sentiment_scores.append(None)  # no score
    
    # print 
    for score, article in zip(sentiment_scores, articles):
        if score is not None:
            print(f"Title: {article['title'][0:20]}, Sentiment Score: {score:.2f}")
    
    return sentiment_scores

newsapi_key = 'eab52d8b241d40eaba0b3fc166139863'
company_name = 'Apple'
sentiment_scores = fetch_news_articles_and_analyze_sentiment(newsapi_key, company_name)

# filtered 
filtered_scores = list(filter(lambda x: x is not None, sentiment_scores))

# histogram
plt.figure(figsize=(10, 6))
plt.hist(filtered_scores, bins=20, color='skyblue')
plt.title('Distribution of Sentiment Scores for Apple News Articles')
plt.xlabel('Sentiment Score (-5 to 5)')
plt.ylabel('Number of Articles')
plt.grid(axis='y', alpha=0.75)
plt.savefig('ai/sentiment/viz/sentiment_distribution.png') 

plt.figure(figsize=(8, 6))
plt.boxplot(filtered_scores, vert=False, patch_artist=True)
plt.title('Boxplot of Sentiment Scores for Apple News Articles')
plt.xlabel('Sentiment Score (-5 to 5)')
plt.grid(axis='x', alpha=0.75)
plt.savefig('ai/sentiment/viz/sentiment_boxplot.png', dpi=300)  

# sentiment score
mean_score = sum(filtered_scores) / len(filtered_scores)
print(f"Mean sentiment score for Apple articles: {mean_score:.2f}")