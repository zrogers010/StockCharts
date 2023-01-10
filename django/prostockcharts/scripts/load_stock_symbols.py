from stocks.models import Stock
import csv

def run():
    with open('stocks/stock_data.csv') as file:
        reader = csv.reader(file)
        next(reader)

        Stock.objects.all().delete()

        for row in reader:
            print(row)

            stock = Stock(symbol=row[0],
                            name=row[1],
                            sector=row[2],
                            industry=row[3])
            
            stock.save()
            