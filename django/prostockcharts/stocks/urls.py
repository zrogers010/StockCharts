from re import search
from django.urls import path

from . import views
# from ..stocks.views import news_symbol

app_name = 'stocks'
urlpatterns = [
    path("", views.stocks, name="stocks-page"),
    path("search", views.stock_search, name="stock-search"),
    path("<str:symbol>", views.stock_detail, name="stock-detail-page"),    
]
