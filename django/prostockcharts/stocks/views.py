from django.shortcuts import render, redirect, HttpResponseRedirect
from django.urls import reverse
from django.http import Http404
from django.template.response import TemplateResponse
from django.db.models import Q
from datetime import datetime, timedelta
import requests
import yfinance as yf
import pandas as pd
import json

import plotly.express as px 
import plotly.graph_objects as go

from pandas_datareader.data import Options

import os
from dotenv import load_dotenv

from .models import Stock

load_dotenv()

def stocks(request):
    stocks = Stock.objects.all()
    news = stock_news(request)
    thumbnail_list = ['SPY', 'QQQ', 'DIA', 'GLD']#, 'BTCUSD']
    chart_data = {}
    for s in thumbnail_list:
        chart_data[s] = goog_chart(request, s)
    
    return render(request, "stocks/stocks.html", {
        "stocks": stocks,
        "news": news['news'],
        "chart_data": chart_data, 
    })


def stock_detail(request, symbol):
    news = news_symbol(request, symbol)
    try:
        stock = Stock.objects.filter(symbol=symbol.upper())[0]
        return render(request, "stocks/stock_detail.html", {
            "symbol": stock.symbol,
            "name": stock.name,
            "sector": stock.sector,
            "industry": stock.industry,
            "articles": news['news']
        })
    except:
        raise Http404()


def stock_news(request):
    try:
        sources = "bbc-news,bloomberg,business-insider,cnbc,cnn,reuters,techcrunch,the-wall-street-journal"
        news_api_token = news_api_token = str(os.getenv('NEWS_API_TOKEN'))
        article_dates = datetime.now() - timedelta(days=30)
        url = f"https://newsapi.org/v2/top-headlines?pageSize=10&sources={sources}&from={article_dates}&apiKey={news_api_token}"
        response = requests.get(url).json()
        news = response['articles']
        return {"news": news}
    except:
        print("Error getting stock news")


def news_symbol(request, symbol):
    try:
        sources = "bbc-news,bloomberg,business-insider,cnbc,cnn,reuters,techcrunch,the-wall-street-journal"
        news_api_token = news_api_token = str(os.getenv('NEWS_API_TOKEN'))
        url = f"https://newsapi.org/v2/everything?q={symbol}&sources={sources}&apiKey={news_api_token}"
        response = requests.get(url).json()
        news = response['articles']
        return {"news": news}
    except:
        print("Error getting symbol news")


def stock_search(request):
    try:
        if 'search-stock' in request.POST and len(request.POST['search-stock']) > 0:
            value = request.POST['search-stock'].split()[0]
            return HttpResponseRedirect(f"{ value }")
        else: 
            return render(request, "stocks/stocks.html", {
                "stocks": stocks
            })
    except:
        print("Error in stock search")


def goog_chart(request, symbol):
    stock_data = yf.Ticker(symbol)
    stock_df = pd.DataFrame(stock_data.history(period="15d", interval="1d"))

    dates = [datetime.strftime(ts, '%m-%d') for ts in stock_df.index]
    close = list(stock_df["Close"])

    df = pd.DataFrame({'date': dates, 'close': close})
    data = [[str(x), y] for x, y in zip(df['date'], df['close'])]

    return data
