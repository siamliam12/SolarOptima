
# SolarOptima

We created Solar Optima, a web tool that uses data from NASA Earth observation missions to give farmers real-time, machine learning-driven insights on crop suggestions, yield forecasts, and irrigation scheduling. Our software assists farmers in making well-informed, data-driven decisions by combining information about location, soil moisture, and meteorological conditions.

By providing farmers with actionable information, Solar Optima tackles the issues of unpredictable weather, few water resources, and restricted data access by enabling them to maximize productivity and minimize risks. In light of climate change, this is essential for enhancing food security, strengthening agricultural resilience, and promoting sustainable farming methods.

# CropMatch: Smart Crop Recommendations for Your Land
CropMatch Analyzes critical factors like location, soil moisture, temperature, and nutrient levels (Nitrogen, Phosphorus, Potassium) to recommend the most suitable crops for your land. By integrating real-time climate data and detailed soil test results (including pH, evapotranspiration, and organic content), it ensures you grow the right crops for optimal yield and sustainability. With tailored, data-driven insights, CropMatch helps farmers make informed, efficient decisions to maximize land productivity.

# EcoGrow: Crop Yield Prediction for Smarter Farming
EcoGrow leverages advanced data analytics to predict crop yields, enabling farmers to plan effectively and allocate resources efficiently. By analyzing soil conditions, weather patterns, and historical data, EcoGrow provides accurate yield forecasts. This helps farmers optimize planting schedules, manage resources like water and fertilizers, and make informed decisions to maximize productivity and profitability.

# Dashboard: Visual Insights for Smarter Farming Decisions
The Dashboard offers an intuitive interface that visualizes essential metrics, trends, and analyses. It helps farmers translate complex data—such as soil conditions, weather patterns, and crop performance—into actionable insights. With clear charts and graphs, farmers can easily monitor and understand their data, improving decision-making and farm management.

# How It Works:
Solar Optima combines NASA satellite and geospatial data with ML to analyze environmental factors affecting crops and water availability. The app simplifies this data into actionable insights and recommendations. Farmers input their farm details, and the app delivers personalized guidance on crop choices, resource management, and more—all accessible from any device.

# 🌟 Benefits:
- Improved Decision-Making: ML-driven insights and real-time data help farmers anticipate challenges and take proactive measures.

- Enhanced Productivity: Optimize crop selection and resource use for higher yields and better farm efficiency.

- Sustainability: Efficient water management and data-backed decisions promote long-term agricultural sustainability.

- Resilience: The app predicts weather and water risks, helping farmers adapt to climate change and safeguard their livelihoods.

# Tech Stack
- NextJs
- Django
- Scikit-Learn


## Installation

Install Client with npm

```bash
    cd client
    npm i
```
Run the Frontend app
```bash
    npm run dev
```
Install Backend with pip 
```bash
    cd Backend
    pip Install -r requirements.txt
```
Run the Backend Server
```bash
    python manage.py runserver
```
## API Reference

#### NASA POWER
- https://power.larc.nasa.gov/

#### NASA Floods Data Pathfinder
- https://www.earthdata.nasa.gov/learn/pathfinders/disasters/floods-data-pathfinder/find-data#flood-inundation

#### Extreme Heat Data Pathfinder - Find Data
- https://www.earthdata.nasa.gov/learn/pathfinders/disasters/extreme-heat-data-pathfinder/find-data#temperature

#### Crop Recommendation
- https://www.kaggle.com/datasets/atharvaingle/crop-recommendation-dataset

#### Crop Yield data
- https://ourworldindata.org/crop-yields
