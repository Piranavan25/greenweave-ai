# JWT token creation/verification

from flask_jwt_extended import create_access_token, create_refresh_token, decode_token
from datetime import timedelta

# Create JWT access + refresh tokens
def generate_tokens(user_id):
    """
    Generates access and refresh tokens for a given user ID.
    """
    access_token = create_access_token(identity=user_id, expires_delta=timedelta(minutes=15))
    refresh_token = create_refresh_token(identity=user_id)
    return {
        "access_token": access_token,
        "refresh_token": refresh_token
    }

# Decode token manually if needed
def decode_jwt(token):
    """
    Decodes a JWT token (for debugging or custom logic).
    """
    return decode_token(token)
