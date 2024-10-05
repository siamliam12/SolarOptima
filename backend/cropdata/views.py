from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import CropDataSerializer
# Create your views here.
@api_view(['GET', 'POST'])
def get_form_data(request):
    if request.method == 'POST':
        formdata = request.data
        serializer = CropDataSerializer(data=formdata, context={'request': request})
        if serializer.is_valid():
            serializer.save(user=request.user)  # Use request.user instead of self.request.user
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)