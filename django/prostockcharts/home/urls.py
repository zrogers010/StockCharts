from django.urls import path

from . import views
from stocks.views import stocks

urlpatterns = [
    #path("", views.index, name="home-page"),
    path("", stocks, name="home-page"),
    path("search", views.stock_search, name="stock-search")
]
