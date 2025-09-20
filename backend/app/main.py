# Main application entry point, creates the Flask app
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_jwt_extended import JWTManager
from flask_migrate import Migrate
from app.config import Config
from flask_cors import CORS

db = SQLAlchemy()
jwt = JWTManager()
migrate = Migrate()

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)

    db.init_app(app)
    jwt.init_app(app)
    migrate.init_app(app, db)  # Initialize Flask-Migrate

    CORS(app, resources={r"/auth/*": {"origins": "http://localhost:5173"}})

    from app.models.user import User

    # Import and register routes (blueprints)
    from app.routes.auth import auth_bp
    app.register_blueprint(auth_bp, url_prefix="/auth")

    # Register other blueprints
    #from app.routes.products import products_bp
    #from app.routes.upload import upload_bp
    #app.register_blueprint(products_bp, url_prefix="/api")
    #app.register_blueprint(upload_bp, url_prefix="/api")

    return app