from django.urls import path
from . import views

app_name = 'charts'
urlpatterns = [
    path("", views.charts, name="charts-page"),
    path("search", views.stock_search, name="stock-search"),
    path("<str:symbol>", views.charts_symbol, name="charts-symbol-page")
]