from flask import Flask, render_template, redirect, jsonify, request
import pandas as pd 
import os
import pickle 
import sys
import numpy as np
from sklearn.linear_model import LogisticRegression

# from flask_pymongo import PyMongo
# import scrape_mars

# Create an instance of Flask
app = Flask(__name__)



# Route to render index.html template using data from Mongo
@app.route("/")
def home():



    # Return template and data
    return render_template("index.html")

    


# Route that will trigger the scrape function
@app.route("/Visualisations.html")
def Viz():

    return render_template("Visualisations.html")


    # Route that will trigger the scrape function
@app.route("/questions.html")
def questions():

    return render_template("questions.html")


@app.route("/answers/<age>/<NumofKids>/<Edu>/<Emp>/<Par>/<Mat>/<Css>/<Help>")
def Results(age, NumofKids, Edu, Emp, Par, Mat, Css, Help ):


# binary education  
    if Edu == "none" : 
        none = 1
        High_School = 0
        Uni = 0
        Masters = 0

    elif Edu == "High School diploma" :
        none = 0
        High_School = 1
        Uni = 0
        Masters = 0   

    elif Edu == "Tertiary education" :
        none = 0
        High_School = 0
        Uni = 1
        Masters = 0  

    elif Edu == "Master's or Doctorate" :
        none = 0
        High_School = 0
        Uni = 0
        Masters = 1

# binary of employment status before first baby 

    if Emp ==  "unemployed":
        unemployed = 1
        casual = 0
        part_time = 0
        full_time = 0
    
    elif Emp == "Casual": 
        unemployed = 0
        casual = 1
        part_time = 0
        full_time = 0
  
    elif Emp == "Part-time": 
        unemployed = 0
        casual = 0
        part_time = 1
        full_time = 0
  
    elif Emp == "Full-time": 
        unemployed = 0
        casual = 0
        part_time = 0
        full_time = 1

 # partnerd binary  

    if  Par == "Single":
      Single = 1
      Partnered = 0
    
    elif Par == "Partnered": 
        Single = 1
        Partnered = 0

# maternity eligabiluty binary

    if Mat == "None":
        none_1 = 1
        Yes_paying = 0
        Yes_unpaid = 0
    
    elif Mat ==  "Yes - and we are paying!": 
        none_1 = 0
        Yes_paying = 1
        Yes_unpaid = 0
  
    elif Mat == "Yes - but unpaid": 
        none_1 = 0
        Yes_paying = 0
        Yes_unpaid = 1


# Css eligability binary

    if Css == "Yes":
        css_Yes = 1
        css_No = 0
    
    elif Css == "No": 
        css_Yes = 0
        css_No = 1 


# Help binary 
    if Help == "No": 
        Hel_Yes_sc = 0
        Hel_Yes_need =0
        Help_no = 1
    
    elif Help == "Yes-Scheduled":
        Hel_Yes_sc = 1
        Hel_Yes_need =0
        Help_no = 0
    
    elif Help == "Yes- As needed": 
        Hel_Yes_sc = 0
        Hel_Yes_need =1
        Help_no = 0
  


    print(Help_no)


    filename = 'Model.h5'
    loaded_model = pickle.load(open(filename, 'rb'))


    response = [age, NumofKids, High_School,Masters, none, Uni, casual, full_time, part_time, unemployed, Partnered, Single, none_1, Yes_unpaid, Yes_paying, css_No, css_Yes, Help_no, Hel_Yes_sc, Hel_Yes_need ]
   
    results_list =[]

    for item in response:
        results_list.append(float(item))


    new_value = np.array(results_list)
    new_value = np.expand_dims(new_value, 0)
    prediction = loaded_model.predict(new_value)


    if prediction == "Yes" : 
        Content = "Yes!! Your hard working employee will return"
    elif prediction =="No": 
        Content = "No! Sorry, should have paid more. Have you considered birthday day off? "
    else: 
        Content = "Sorry, I don't know, I'm a good model - not a great model"





    return render_template("answers.html", Content=Content)
        # f"age : {age}<br/>"
        # f"Number of Kids : {NumofKids}<br/>"
        # f"{Edu}: none : {none}, high school diploma : {High_School}, Tertiary : {Uni}, Masters or Doctorate: {Masters}<br/>"
        # f"{Emp} : unemployed:{unemployed},  casual: {casual}, part_time: {part_time}, full_time: {full_time}<br/>"
        # f"{Par}: Single : {Single}, Partnered : {Partnered}<br/>"
        # f"{Mat}: none : {none_1}, Yes-Paying: {Yes_paying}, Yes-Unpaid: {Yes_unpaid}<br/>"
        # f"{Css}: yes : {css_Yes}, no: {css_No}<br/>"
        # f"{Help}: no : {Help_no}, yes-scheduled: {Hel_Yes_sc}, yes - as needed : {Hel_Yes_need}<br/>"
        # f" Will Your hard working and dedicated employee return?  {prediction}"


   




if __name__ == "__main__":
    app.run(debug=True)