from flask import Flask, jsonify, request, Blueprint, current_app as app
import datetime
import collections as ct
import datetime
from bson.json_util import dumps
from transformers import pipeline
# from flask_pymongo import PyMongo
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
import json
from bson import ObjectId

class JSONEncoder(json.JSONEncoder):
    def default(self, o):
        if isinstance(o, ObjectId):
            return str(o)
        return json.JSONEncoder.default(self, o)


route_blueprint = Blueprint("route_blueprint", __name__)



@route_blueprint.route('/api/data', methods = ["POST", "GET"])
def home():
    # connect to mongodb
    uri = app.config["MONGO_URI"]
    try:
        client = MongoClient(uri, server_api=ServerApi('1'))
        print("Connected successfully!!!")
    except:
        print("Could not connect to MongoDB")

    db = client.NewsScraping
    mycollection = db.SueddeutscheNew
    all_posts = mycollection.find()
  
    all_posts = dumps(list(all_posts))

    return all_posts #results




@route_blueprint.route("/table", methods = ["POST", "GET"])
def sentiment():

    test = pipeline("text-classification", "oliverguhr/german-sentiment-bert")
    print(test)
    sentiment_score = test(all_posts["headlines"][0])

    print(sentiment_score)

    return sentiment_score