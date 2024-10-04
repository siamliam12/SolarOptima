# serializers.py
from rest_framework import serializers
from .models import FormData

class FormDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = FormData
        fields = ['id', 'user', 'latitude', 'longitude', 'nitrogen', 'phosphorous', 'potasium', 'ph']
        read_only_fields = ['user']  # Make user read-only if you don't want it to be set manually
