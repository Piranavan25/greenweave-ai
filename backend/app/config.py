# Configuration variables (database URL, secret keys)

import os
from dotenv import load_dotenv

# Load environment variables from .env
load_dotenv()

class Config:
    # Use DATABASE_URL directly if available (preferred for production)
    SQLALCHEMY_DATABASE_URI = os.getenv("DATABASE_URL")

    # Fallback: build URL manually from separate vars (optional)
    if SQLALCHEMY_DATABASE_URI is None:
        DB_USER = os.getenv("DB_USER")
        DB_PASS = os.getenv("DB_PASSWORD")
        DB_HOST = os.getenv("DB_HOST", "localhost")
        DB_PORT = os.getenv("DB_PORT", 5432)
        DB_NAME = os.getenv("DB_NAME")
        SQLALCHEMY_DATABASE_URI = f"postgresql://{DB_USER}:{DB_PASS}@{DB_HOST}:{DB_PORT}/{DB_NAME}"

    SQLALCHEMY_TRACK_MODIFICATIONS = False

    # Security keys
    SECRET_KEY = os.getenv("FLASK_SECRET_KEY")
    JWT_SECRET_KEY = os.getenv("JWT_SECRET_KEY")
