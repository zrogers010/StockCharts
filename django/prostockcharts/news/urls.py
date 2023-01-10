from django.urls import path
from . import views

app_name = 'news'
urlpatterns = [
    path("", views.news, name="news-page"),
    path("search", views.stock_search, name="stock-search"),
    path("<str:symbol>", views.news_symbol, name="news-symbol-page")
    # path("<str:title>", views.news_article, name="news-article-page")
]
