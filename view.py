from flask import render_template

from app import app


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/about")
def example():
    return render_template("about.html")
