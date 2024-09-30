# SolarOptima
Solar Optima is a web application designed to optimize solar energy use in agriculture, improved prediction capacity, risk management, decision-making processes for farmers.

Register Url: http://127.0.0.1:8000/auth/api/register/
body :{
    email,
    name,
    password
},
response:{
    "id"
    "email"
    "name"
}
Login Url : http://127.0.0.1:8000/auth/api/login/
body :{
    email,
    password
},
response:{
    "refresh"
    "access"
}