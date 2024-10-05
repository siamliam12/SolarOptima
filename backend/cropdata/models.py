from django.db import models

# Create your models here.
class CropData(models.Model):
    image = models.CharField()
    name = models.CharField()
    description = models.TextField()

    def __str__(self):
        return self.name