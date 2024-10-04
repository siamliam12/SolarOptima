from __future__ import print_function
import pandas as pd
import numpy as np
from sklearn.metrics import classification_report
from sklearn import metrics
from sklearn import tree
from sklearn.model_selection import train_test_split
from sklearn.tree import DecisionTreeClassifier
from sklearn.naive_bayes import GaussianNB
import warnings
import os
warnings.filterwarnings('ignore')
# Define the base directory (where your Django project is located)
base_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))  # Adjust this if necessary

# Specify the relative path to your dataset folder and the CSV file
dataset_folder = 'datasets'
csv_file_name = 'Crop_recommendation.csv'  # Replace with your actual CSV file name
# PATH='./datasets/Crop_recommendation.csv'
csv_file_path = os.path.join(base_dir, dataset_folder, csv_file_name)
df = pd.read_csv(csv_file_path)
# print(df['label'].unique())

#separating features and target label
features = df[['N', 'P', 'K', 'temperature', 'humidity', 'ph']]
target = df['label']
labels = df['label']
#Initializing empty lists to append all model's name and corresponding name
acc = []
model = []
#splitting into train and test data
Xtrain,Xtest,Ytrain,Ytest = train_test_split(features,target,test_size=0.2,random_state=2)

class Predictions:
    def __init__(self,n,p,k,tmp,hum,ph):
        self.n = n
        self.p = p
        self.k = k
        self.tmp = tmp
        self.hum = hum
        self.ph = ph
    def decisionTreeMethod(self):
        #Decision tree
        DecisionTree = DecisionTreeClassifier(criterion="entropy",random_state=2,max_depth=5)
        DecisionTree.fit(Xtrain,Ytrain)
        predicted_values = DecisionTree.predict(Xtest)
        x = metrics.accuracy_score(Ytest,predicted_values)
        acc.append(x)
        model.append('Decision Tree')
        print(f'Decision Trees Accuracy is: {x*100}')
        data = np.array([[self.n,self.p,self.k,self.tmp,self.hum,self.ph]])
        prediction = DecisionTree.predict(data)
        return prediction

    def naiveBayesMethod(self):
        NaiveBayes = GaussianNB()
        NaiveBayes.fit(Xtrain,Ytrain)
        predicted_values = NaiveBayes.predict(Xtest)
        x = metrics.accuracy_score(Ytest,predicted_values)
        acc.append(x)
        model.append('Naive Bayes')
        print(f'Naive Bayes Accuracy is: {x*100}')
        data = np.array([[self.n,self.p,self.k,self.tmp,self.hum,self.ph]])
        prediction = NaiveBayes.predict(data)
        # print(prediction)
        return prediction


# prediction = Predictions(104,18, 30, 23.603016, 60.3, 6.7)
# print(prediction.naiveBayesMethod())
