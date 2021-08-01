import json
import requests
from vaderSentiment.vaderSentiment import SentimentIntensityAnalyzer

BEARER_TOKEN = "lol u thought u were gonna steal my token"

headers = {"Authorization": "Bearer {}".format(BEARER_TOKEN)}

expansions = ['author_id']

def getSentiment(text):
    analyzer = SentimentIntensityAnalyzer()
    results = analyzer.polarity_scores(text)
    compound = results['compound'] # compound is the score after weights are used (used by researchers as opposed than the other scores)
    return {'result':determineSentiment(compound), 'compound':compound}
    
def determineSentiment(compound):
    if compound <= 0.05 and compound >= -0.05:
        return "Neutral"
    elif compound < -0.05:
        return "Negative"
    else:
        return "Positive" 

def searchRequest(query):
    url = "https://api.twitter.com/2/tweets/search/recent"

    params = "query={} -is:retweet lang:en&expansions=author_id&max_results=100".format(query)

    return requests.request("GET", url, params=params, headers=headers).json()

def getTweetData(result):
    data = []
    for index, item in enumerate(result['data']):
        tweet = result['data'][index]
        
        text = tweet['text']
        tweet_id = tweet['id']

        sentiment_result = getSentiment(tweet['text'])
        sentiment = sentiment_result['result']
        compound = sentiment_result['compound']

        for person in result['includes']['users']:
            if person['id'] == tweet['author_id']:
                user = person

        author = person['name']
        username = person['username']

        entry = {
            "text": text,
            "id": tweet_id,
            "author": author,
            "username": username,
            "sentiment": sentiment,
            "compound": compound
        }

        data.append(entry)

    return data

keywords = ['China', 'Chinese', 'Asian American', 'AAPI', 'Wuhan', 'Virus', 'Chinese virus', 'wuhan virus', 'Stop AAPI Hate', 'Asian Hate', 'ChinaLiedPeopleDied', 'Racism is a virus', 'Stop Asian Hate']

dfd = {}

for word in keywords:
    print("On : {}".format(word))
    res = getTweetData(searchRequest(word))
    counts = [0, 0, 0]
    for tweet in res:
        if tweet['sentiment'] == 'Positive':
            counts[0] += 1
        elif tweet['sentiment'] == 'Neutral':
            counts[1] += 1
        else:
            counts[2] += 1

    print('Positive: {} | Neutral: {} | Negative: {} ||| {}'.format(counts[0], counts[1], counts[2], word))

    dfd[word] = res

with open ('asiantwitter.json', 'w', encoding='utf-8') as outfile: # dump json
    print('Dumping JSON')
    json.dump(dfd, outfile, ensure_ascii=False, indent=4)
    print('Successfully Dumped JSON')