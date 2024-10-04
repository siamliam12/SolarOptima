import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import classification_report
from sklearn.preprocessing import LabelEncoder


# Function to assign crops based on some conditions
def assign_crop(row):
    crops = ['rice', 'maize', 'chickpea', 'kidneybeans', 'pigeonpeas',
             'mothbeans', 'mungbean', 'blackgram', 'lentil', 'pomegranate',
             'banana', 'mango', 'grapes', 'watermelon', 'muskmelon', 'apple',
             'orange', 'papaya', 'coconut', 'cotton', 'jute', 'coffee']
    
    # Example logic for assigning crops based on input data (N, P, K, etc.)
    if row['N'] > 100 and row['P'] > 50:
        return crops[0]  # Example: Assign 'rice'
    elif row['temperature'] > 30 and row['humidity'] > 70:
        return crops[1]  # Example: Assign 'maize'
    else:
        return crops[2]  # Default crop, 'chickpea'


# Generate synthetic data instead of loading a dataset
def generate_synthetic_data(num_samples=1000):
    np.random.seed(42)
    data = {
        'N': np.random.randint(50, 200, num_samples),
        'P': np.random.randint(30, 100, num_samples),
        'K': np.random.randint(20, 150, num_samples),
        'temperature': np.random.uniform(20, 40, num_samples),
        'humidity': np.random.uniform(40, 90, num_samples),
        'ph': np.random.uniform(5, 8, num_samples),
        # 'rainfall': np.random.uniform(50, 300, num_samples)
    }
    
    df = pd.DataFrame(data)
    
    # Assign crops to each row based on the assign_crop function
    df['label'] = df.apply(assign_crop, axis=1)
    
    return df


def prepare_data(df):
    # Prepare the features (X) and target (y)
    X = df.drop('label', axis=1)  # Drop the target column 'label'
    y = df['label']

    # Encode the target variable (crop label)
    le = LabelEncoder()
    y_encoded = le.fit_transform(y)
    return X, y_encoded, le


def train_model(X, y_encoded):
    # Split the dataset into training and testing sets
    X_train, X_test, y_train, y_test = train_test_split(X, y_encoded, test_size=0.2, random_state=42)

    # Train a RandomForest Classifier model
    rf_model = RandomForestClassifier(n_estimators=100, random_state=42)
    rf_model.fit(X_train, y_train)

    # Evaluate the model
    y_pred = rf_model.predict(X_test)
    print("Classification Report:\n", classification_report(y_test, y_pred))

    return rf_model


# Function to recommend crop based on user input
def recommend_crop(rf_model, le, input_data):
    input_data = np.array([input_data])
    prediction = rf_model.predict(input_data)
    probabilities = rf_model.predict_proba(input_data)[0]
    top_3_indices = probabilities.argsort()[-3:][::-1]
    top_3_crops = le.inverse_transform(top_3_indices)
    top_3_probs = probabilities[top_3_indices]
    return list(zip(top_3_crops, top_3_probs))

class Predictions:
    def __init__(self,n,p,k,temperature,humidity,ph):
        self.n = n
        self.p = p
        self.k = k
        self.temperature = temperature
        self.humidity = humidity
        self.ph = ph

    def main(self):
        print("Welcome to the Crop Recommendation System!")
        
        # Generate synthetic data
        df = generate_synthetic_data(num_samples=1000)
        
        X, y_encoded, le = prepare_data(df)
        model = train_model(X, y_encoded)
        crops =[] 
        
        input_data = [self.n,self.p,self.k,self.temperature,self.humidity,self.ph]
        recommended_crops = recommend_crop(model, le, input_data)

        print("\nTop 3 recommended crops for the given conditions:")
        for crop, probability in recommended_crops:
            # print(f"{crop}: {probability:.2f}")
            crops.append({ 'title': crop,'value': probability })
        return crops

        # print("Thank you for using the Crop Recommendation System!")



# crop = Predictions(104,18, 30, 23.603016, 60.3, 6.7)
# crop.main()
# if __name__ == "__main__":
#     main()
