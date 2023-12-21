from flask import render_template

from app import app


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/random")
def random():
    return render_template("random.html")
