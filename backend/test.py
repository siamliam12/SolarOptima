import requests

latitude = 23.810331
longitude = 90.412521
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
print(data)
        # print(data)
        # temperature = data['properties']['parameter']['T10M_MIN_AVG']['202201']
        # humidity = data['properties']['parameter']['RH2M']['202201']
        # serializer = temp_humSerializer(user=request.user, temperature=temperature,humidity=humidity)
        # if serializer.is_valid():
        #     serializer.save(user=request.user)  # Use request.user instead of self.request.user