from flask import Flask
from flask_sqlalchemy import SQLAlchemy
import urllib
from config import Config


#db = SQLAlchemy()
from flask_pymongo import PyMongo

def create_app():

    app = Flask(__name__)
   #app.config.from_object("config.Config")

    from app.routes import route_blueprint

    app.register_blueprint(route_blueprint)

    # params
    app.config.from_object(Config)


#    app.config["MONGO_URI"] = "mongodb+srv://alexheinz:DgZZqx6iqRFksUYI@cluster0.0nivrdn.mongodb.net/"
  


    # db = client.NewsScraping
    # mongo = PyMongo(app)

    # newresults = mongo.db.ScrapeSueddeutsche.find()
    # print(newresults)

    return app

