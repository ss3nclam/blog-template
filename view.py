from flask import render_template

from app import app
from dev_tools.post_generator import generate_posts


@app.route("/")
def index():
    return render_template("index.html", posts=generate_posts(10))


@app.route("/random")
def random():
    return render_template("random.html")
