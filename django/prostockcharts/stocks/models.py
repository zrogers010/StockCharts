from django.db import models

class Stock(models.Model):
    symbol = models.CharField(max_length=10)
    name = models.CharField(max_length=300)
    sector = models.CharField(blank=True, max_length=100)
    industry = models.CharField(blank=True, max_length=100)

    def __str__(self):
        return self.name