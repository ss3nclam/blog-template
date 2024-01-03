from flask import render_template

from app import app
from dev_tools.post_generator import generate_posts


@app.route('/')
@app.route("/blog")
def blog():
    return render_template("blog.html", posts=generate_posts(10))


@app.route("/some_page")
def some_page():
    return render_template("some_page.html")


@app.errorhandler(404)
def page_not_found(e):
    return render_template('404.html'), 404