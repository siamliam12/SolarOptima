import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

from sklearn.model_selection import train_test_split
from sklearn.preprocessing import OneHotEncoder, StandardScaler
from sklearn.compose import ColumnTransformer
from sklearn.pipeline import Pipeline
from sklearn.ensemble import RandomForestRegressor
from sklearn.metrics import mean_squared_error, r2_score

# 1. Generate Synthetic Historical Dataset
def generate_synthetic_data(num_samples=500, random_state=42):
    np.random.seed(random_state)
    
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
    
    data = pd.DataFrame({
        'Crop': crop,
        'Year': years,
        'Rainfall (mm)': rainfall,
        'Temperature (°C)': temperature,
        'Fertilizer (kg/ha)': fertilizer,
        'Soil Quality': soil_quality,
        'Pest Incidence': pest_incidence,
        'Yield (ton/ha)': yield_
    })
    
    return data

# Generate the data
df = generate_synthetic_data(num_samples=1000)

# Display first few rows
print("Sample Data:")
print(df.head())

# 2. Data Preprocessing
# Features and target
X = df.drop('Yield (ton/ha)', axis=1)
y = df['Yield (ton/ha)']

# Identify categorical and numerical columns
categorical_features = ['Crop']
numerical_features = ['Year', 'Rainfall (mm)', 'Temperature (°C)', 'Fertilizer (kg/ha)', 'Soil Quality', 'Pest Incidence']

# Preprocessing pipelines
numeric_transformer = Pipeline(steps=[
    ('scaler', StandardScaler())
])

categorical_transformer = Pipeline(steps=[
    ('onehot', OneHotEncoder(drop='first'))  # drop first to avoid dummy variable trap
])

preprocessor = ColumnTransformer(
    transformers=[
        ('num', numeric_transformer, numerical_features),
        ('cat', categorical_transformer, categorical_features)
    ])

# 3. Model Training
# Split the data
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Create the pipeline with preprocessing and model
model_pipeline = Pipeline(steps=[
    ('preprocessor', preprocessor),
    ('regressor', RandomForestRegressor(n_estimators=100, random_state=42))
])

# Train the model
model_pipeline.fit(X_train, y_train)

# 4. Model Evaluation
# Predict on test set
y_pred = model_pipeline.predict(X_test)

# Calculate metrics
mse = mean_squared_error(y_test, y_pred)
rmse = np.sqrt(mse)
r2 = r2_score(y_test, y_pred)

print("\nModel Performance on Test Set:")
print(f"Mean Squared Error (MSE): {mse:.4f}")
print(f"Root Mean Squared Error (RMSE): {rmse:.4f}")
print(f"R² Score: {r2:.4f}")

# Plot Actual vs Predicted
plt.figure(figsize=(8,6))
sns.scatterplot(x=y_test, y=y_pred, alpha=0.7)
plt.xlabel('Actual Yield (ton/ha)')
plt.ylabel('Predicted Yield (ton/ha)')
plt.title('Actual vs Predicted Yield')
plt.plot([y.min(), y.max()], [y.min(), y.max()], 'r--')  # Diagonal line
plt.show()

# Feature Importance
importances = model_pipeline.named_steps['regressor'].feature_importances_
# Get feature names after one-hot encoding
onehot_features = list(model_pipeline.named_steps['preprocessor'].transformers_[1][1].named_steps['onehot'].get_feature_names_out(['Crop']))
feature_names = numerical_features + onehot_features
feature_importances = pd.Series(importances, index=feature_names).sort_values(ascending=False)

plt.figure(figsize=(10,6))
sns.barplot(x=feature_importances[:10], y=feature_importances.index[:10])
plt.title('Top 10 Feature Importances')
plt.xlabel('Importance')
plt.ylabel('Feature')
plt.show()

# 5. Yield Prediction for New Data
def predict_yield(new_data, model_pipeline):
    """
    new_data: list of dictionaries containing new samples
    Example:
    new_data = [
        {'Crop': 'Wheat', 'Year': 2023, 'Rainfall (mm)': 550, 'Temperature (°C)': 24, 'Fertilizer (kg/ha)': 110, 'Soil Quality': 8, 'Pest Incidence': 0},
        {'Crop': 'Rice', 'Year': 2023, 'Rainfall (mm)': 700, 'Temperature (°C)': 27, 'Fertilizer (kg/ha)': 140, 'Soil Quality': 7, 'Pest Incidence': 1},
    ]
    """
    df_new = pd.DataFrame(new_data)
    predictions = model_pipeline.predict(df_new)
    df_new['Predicted Yield (ton/ha)'] = predictions
    return df_new

# Example new data
new_samples = [
    {'Crop': 'Wheat', 'Year': 2024, 'Rainfall (mm)': 580, 'Temperature (°C)': 23, 'Fertilizer (kg/ha)': 115, 'Soil Quality': 8, 'Pest Incidence': 0},
    {'Crop': 'Corn', 'Year': 2024, 'Rainfall (mm)': 620, 'Temperature (°C)': 26, 'Fertilizer (kg/ha)': 130, 'Soil Quality': 7, 'Pest Incidence': 1},
    {'Crop': 'Rice', 'Year': 2024, 'Rainfall (mm)': 750, 'Temperature (°C)': 28, 'Fertilizer (kg/ha)': 160, 'Soil Quality': 6, 'Pest Incidence': 0},
    {'Crop': 'Soybean', 'Year': 2024, 'Rainfall (mm)': 500, 'Temperature (°C)': 25, 'Fertilizer (kg/ha)': 120, 'Soil Quality': 7, 'Pest Incidence': 1},
]

# Make predictions
predicted_yields = predict_yield(new_samples, model_pipeline)
print("\nPredicted Yields for New Samples:")
print(predicted_yields[['Crop', 'Year', 'Rainfall (mm)', 'Temperature (°C)', 'Fertilizer (kg/ha)', 'Soil Quality', 'Pest Incidence', 'Predicted Yield (ton/ha)']])
