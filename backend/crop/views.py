from django.shortcuts import render
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.decorators import api_view,authentication_classes,permission_classes
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from django.views.decorators.csrf import csrf_exempt
import requests

@csrf_exempt
@api_view(['GET','POST'])
def get_power_data(request):
    if request.method == 'POST':
        req = request.data
        lon = req.get('lon')
        lat = req.get('lat')
        url = 'https://power.larc.nasa.gov/api/temporal/daily/point'
        params = {
        'start': 20240101,
        'end': 20240930,
        'parameters': 'T2M',
        'format': 'JSON',
        'latitude': lat,
        'longitude': lon,
        'parameters':'TS,T2M,PS,WS2M,CLOUD_AMT,WS10M',
        'community':'ag', 
        }
        response = requests.get(url, params=params)
        data = response.json()
        return Response(data)