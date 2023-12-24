from flask import render_template

from app import app
from tests.posts_generator import generate_posts


@app.route("/")
def index():
    return render_template("index.html", posts=generate_posts(20))


@app.route("/random")
def random():
    return render_template("random.html")
