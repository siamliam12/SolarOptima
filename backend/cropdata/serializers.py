# serializers.py
from rest_framework import serializers
from .models import CropData

class CropDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = CropData
        fields = ['id','image','name','description']
        