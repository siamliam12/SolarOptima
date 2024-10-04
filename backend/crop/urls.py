from django.urls import path
from .views import get_power_data

urlpatterns =[
    path('get-power-data', get_power_data, name='get_power_data'),
]