from __future__ import print_function
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
from sklearn.metrics import classification_report
from sklearn import metrics
from sklearn import tree
from sklearn.model_selection import train_test_split
from sklearn.tree import DecisionTreeClassifier
from sklearn.naive_bayes import GaussianNB
import warnings
warnings.filterwarnings('ignore')

PATH='..\datasets\Crop_recommendation.csv'
df = pd.read_csv(PATH)
# print(df['label'].unique())

#separating features and target label
features = df[['N', 'P', 'K', 'temperature', 'humidity', 'ph', 'rainfall']]
target = df['label']
labels = df['label']
#Initializing empty lists to append all model's name and corresponding name
acc = []
model = []
#splitting into train and test data
Xtrain,Xtest,Ytrain,Ytest = train_test_split(features,target,test_size=0.2,random_state=2)

class Predictions:
    def __init__(self,n,p,k,tmp,hum,ph,rain):
        self.n = n
        self.p = p
        self.k = k
        self.tmp = tmp
        self.hum = hum
        self.ph = ph
        self.rain = rain
    def decisionTreeMethod(self):
        #Decision tree
        DecisionTree = DecisionTreeClassifier(criterion="entropy",random_state=2,max_depth=5)
        DecisionTree.fit(Xtrain,Ytrain)
        predicted_values = DecisionTree.predict(Xtest)
        x = metrics.accuracy_score(Ytest,predicted_values)
        acc.append(x)
        model.append('Decision Tree')
        print(f'Decision Trees Accuracy is: {x*100}')
        data = np.array([[self.n,self.p,self.k,self.tmp,self.hum,self.ph,self.rain]])
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
        data = np.array([[self.n,self.p,self.k,self.tmp,self.hum,self.ph,self.rain]])
        prediction = NaiveBayes.predict(data)
        return prediction


prediction = Predictions(104,18, 30, 23.603016, 60.3, 6.7, 140.91)
print(prediction.naiveBayesMethod())
