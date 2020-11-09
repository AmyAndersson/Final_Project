from flask import Flask, render_template, redirect, jsonify, request
import requests
from bs4 import BeautifulSoup as bs
import function_list

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
@app.route("/questions.html")
def questions():

    return render_template("questions.html")


@app.route("/test" , methods=['GET', 'POST'])
def test():
    

    return render_template("questions_copy.html")



if __name__ == "__main__":
    app.run(debug=True)