from django.db import models
from django.conf import settings 
# Create your models here.
from django.dispatch import Signal

# Updated signal definition for Django 4.0+
my_signal = Signal()


class FormData(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='your_new_model')
    latitude = models.FloatField()
    longitude = models.FloatField()
    nitrogen = models.FloatField()
    phosphorous = models.FloatField()
    potasium = models.FloatField()
    ph = models.FloatField()
    def __str__(self):
        return str(self.user.name)