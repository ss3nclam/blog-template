from flask import Flask
from settings import config


app = Flask(__name__)
app.config.from_mapping(config['Flask'])
