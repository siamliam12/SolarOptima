from django.shortcuts import render,get_object_or_404
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.decorators import api_view,authentication_classes,permission_classes
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from django.views.decorators.csrf import csrf_exempt
import requests
from .serializers import FormDataSerializer
from .crop_recommendation import Predictions
from .models import FormData
@csrf_exempt
@api_view(['GET','POST'])
def get_power_data(request):
    if request.method == 'POST':
        user = request.user
        user_id = user.id
        formdata = FormData.objects.filter(user=user_id).first()

        # Access the specific fields
        latitude = formdata.latitude
        longitude = formdata.longitude
        url = 'https://power.larc.nasa.gov/api/temporal/daily/point'
        params = {
        'start': 20240101,
        'end': 20240930,
        'format': 'JSON',
        'latitude': latitude,
        'longitude': longitude,
        'parameters':'TS,T2M,PS,WS2M,CLOUD_AMT,WS10M',
        'community':'ag', 
        }
        response = requests.get(url, params=params)
        data = response.json()
        return Response(data)
    


@api_view(['GET', 'POST'])
@authentication_classes([JWTAuthentication])
@permission_classes([IsAuthenticated])
def get_form_data(request):
    if request.method == 'POST':
        formdata = request.data
        serializer = FormDataSerializer(data=formdata, context={'request': request})
        if serializer.is_valid():
            serializer.save(user=request.user)  # Use request.user instead of self.request.user
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)

@api_view(['GET', 'POST'])
@authentication_classes([JWTAuthentication])
@permission_classes([IsAuthenticated])
def predict_crop(request):
    if request.method == 'GET':
        user = request.user
        user_id = user.id
        formdata = FormData.objects.filter(user=user_id).first()

        # Access the specific fields
        latitude = formdata.latitude
        longitude = formdata.longitude
        url = 'https://power.larc.nasa.gov/api/temporal/monthly/point'
        params = {
        'start': 2022,
        'end': 2022,
        'parameters': 'T2M',
        'format': 'JSON',
        'latitude': latitude,
        'longitude': longitude,
        'parameters':'T10M_MIN_AVG,RH2M',
        'community':'ag', 
        }
        response = requests.get(url, params=params)
        data = response.json()
        temperature = data['properties']['parameter']['T10M_MIN_AVG']['202201']
        humidity = data['properties']['parameter']['RH2M']['202201']
        if formdata:
            crop = Predictions(formdata.nitrogen,formdata.phosphorous,formdata.potasium,temperature,humidity,formdata.ph)
            result = crop.naiveBayesMethod()
            print(result)
            return Response({'Crop':result})
        return Response({'Error': 'No form data found for this user.'}, status=404)