from django.shortcuts import render, redirect, HttpResponseRedirect

from stocks.models import Stock

def charts(request):
    return render(request, "charts/charts_symbol.html", {"symbol": 'AAPL'})

def charts_symbol(request, symbol):
    return render(request, "charts/charts_symbol.html", {"symbol": symbol})

def stock_search(request):
    if 'search-stock' in request.POST and len(request.POST['search-stock']) > 0:
        value = request.POST['search-stock'].split()[0]
        return HttpResponseRedirect(f"{ value }")
    else: 
        return redirect("/stocks")

