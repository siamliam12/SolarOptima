from django.urls import path
from .views import get_power_data,get_form_data,predict_crop

urlpatterns =[
    path('get-power-data', get_power_data, name='get_power_data'),
    path('get-form-data', get_form_data, name='get_form_data'),
    path('recommend-crop', predict_crop, name='predict_crop'),
]