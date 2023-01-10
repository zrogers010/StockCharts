from django.shortcuts import render, redirect, HttpResponseRedirect
from django.http import Http404
from datetime import datetime, timedelta
import requests
import os
from dotenv import load_dotenv

from stocks.models import Stock

dotenv_path = os.path.join(os.path.dirname(__file__), '.env')
load_dotenv(dotenv_path)

def news(request):
    try:
        sources = "bbc-news,bloomberg,business-insider,cnbc,cnn,reuters,techcrunch,the-wall-street-journal"
        news_api_token = news_api_token = str(os.getenv('NEWS_API_TOKEN')) 
        article_dates = datetime.now() - timedelta(days=30)
        url = f"https://newsapi.org/v2/top-headlines?pageSize=10&sources={sources}&from={article_dates}&apiKey={news_api_token}"
        response = requests.get(url).json()
        news = response['articles']
        return render(request, "news/news.html", {"news": news})
    except:
        raise Http404()


def news_symbol(request, symbol):
    try:
        news_api_token = news_api_token = str(os.getenv('NEWS_API_TOKEN')) 
        url = f"https://newsapi.org/v2/everything?q={symbol}&apiKey={news_api_token}"
        response = requests.get(url).json()
        news = response['articles']
        return render(request, "news/news_symbol.html", {
            "news": news, 
            "symbol": symbol, 
        })
    except:
        raise Http404()


def stock_search(request):
    if 'search-stock' in request.POST and len(request.POST['search-stock']) > 0:
        value = request.POST['search-stock'].split()[0]
        return HttpResponseRedirect(f"{ value }")
    else: 
        return redirect("/news")
    
