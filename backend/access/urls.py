from django.urls import path
from .views import RegisterView,LogoutView
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView
)

urlpatterns =[
    path('api/login/',TokenObtainPairView.as_view(),name='token_obtain_pair'),
    path('api/logout/', LogoutView.as_view(), name='logout'),
    path('api/login/refresh',TokenRefreshView.as_view(),name='token_refresh'),
    path('api/register/',RegisterView.as_view(),name="signup"),
]