import view
from app import app


if __name__ == "__main__":
    app.run(app.config.get('HOST'), app.config.get('PORT'))
