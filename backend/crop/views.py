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
# from .crop_recommendation import Predictions
from .models import FormData
from .new_crop_recommendation import Predictions
from .yeilddatannnnn import predict_yield
import numpy as np

@csrf_exempt
@api_view(['GET','POST'])
def get_power_data(request):
    if request.method == 'POST':
        # formdata = FormData.objects.filter(user=user_id).first()

        # # Access the specific fields
        latitude = request.data.get('lat')
        longitude = request.data.get('lon')
        # print(latitude,longitude)
        url = 'https://power.larc.nasa.gov/api/temporal/daily/point'
        params = {
        'start': 20240101,
        'end': 20240930,
        'format': 'JSON',
        'latitude': latitude,
        'longitude': longitude,
        'parameters':'TS,T2M,PS,WS2M,CLOUD_AMT,WS10M,RH2M',
        'community':'ag', 
        }
        response = requests.get(url, params=params)
        data = response.json()
        return Response(data)
 
@api_view(['GET','POST'])
def root(request):
    context = {'message': 'Welcome to the SolarOoptima API'}
    return Response(context)


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
    if request.method == 'POST':
        user = request.user
        user_id = user.id
        formdata = FormData.objects.filter(user=user_id).first()
        print('test')
        temperature = request.data.get('temperature')
        humidity = request.data.get('humidity')

        if formdata:
            crop = Predictions(formdata.nitrogen,formdata.phosphorous,formdata.potasium,temperature,humidity,formdata.ph)
            result = crop.main()
            # print(result)
            return Response({'Crop':result})
        return Response({'Error': 'No form data found for this user.'}, status=404)
    

@api_view(['GET', 'POST'])
@authentication_classes([JWTAuthentication])
@permission_classes([IsAuthenticated])
def predict_crop_yield(request):
    if request.method == 'GET':
        num_samples = 500
        crops = ['Wheat', 'Corn', 'Rice', 'Soybean']
        years = np.random.randint(2015, 2023, size=num_samples)
        crop = np.random.choice(crops, size=num_samples)
        
        # Generate features with some randomness
        rainfall = np.random.normal(loc=600, scale=100, size=num_samples).clip(300, 900)  # in mm
        temperature = np.random.normal(loc=25, scale=3, size=num_samples).clip(15, 35)    # in °C
        fertilizer = np.random.normal(loc=120, scale=20, size=num_samples).clip(50, 200)  # kg/ha
        soil_quality = np.random.randint(5, 10, size=num_samples)                        # 1-10
        pest_incidence = np.random.choice([0, 1], size=num_samples, p=[0.8, 0.2])       # 0 or 1
        
        # Define yield based on some hypothetical relationships
        # Base yield varies by crop
        base_yield = {'Wheat': 3.0, 'Corn': 4.0, 'Rice': 5.0, 'Soybean': 3.5}
        yield_ = []
        for i in range(num_samples):
            y = base_yield[crop[i]]
            y += (rainfall[i] - 600) * 0.005  # Positive impact of rainfall
            y += (temperature[i] - 25) * -0.02  # Negative impact of higher temp
            y += (fertilizer[i] - 120) * 0.01  # Positive impact of fertilizer
            y += (soil_quality[i] - 7) * 0.05   # Positive impact of soil quality
            y -= pest_incidence[i] * 0.3        # Negative impact of pests
            y += np.random.normal(0, 0.2)        # Random noise
            yield_.append(round(y, 2))
            new_samples = [
                {'Crop': 'Wheat', 'Year': 2024, 'Rainfall (mm)': 580, 'Temperature (°C)': 23, 'Fertilizer (kg/ha)': 115, 'Soil Quality': 8, 'Pest Incidence': 0},
                {'Crop': 'Corn', 'Year': 2024, 'Rainfall (mm)': 620, 'Temperature (°C)': 26, 'Fertilizer (kg/ha)': 130, 'Soil Quality': 7, 'Pest Incidence': 1},
                {'Crop': 'Rice', 'Year': 2024, 'Rainfall (mm)': 750, 'Temperature (°C)': 28, 'Fertilizer (kg/ha)': 160, 'Soil Quality': 6, 'Pest Incidence': 0},
                {'Crop': 'Soybean', 'Year': 2024, 'Rainfall (mm)': 500, 'Temperature (°C)': 25, 'Fertilizer (kg/ha)': 120, 'Soil Quality': 7, 'Pest Incidence': 1},
            ]
            yieldPrediction = predict_yield(new_samples)
            return Response(yieldPrediction)
        return Response({'Error': 'No form data found for this user.'}, status=404)
    
