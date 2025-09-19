# Login, logout, signup endpoints
from flask import Blueprint, request, jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity
from app.main import db
from app.models.user import User
from app.utils.password_handler import hash_password, check_password
from app.utils.auth_handler import generate_tokens

auth_bp = Blueprint("auth", __name__)

@auth_bp.route('/signup', methods=['POST'])
def signup():
    data = request.get_json()
    username, password = data['username'], data['password']

    if User.query.filter_by(username=username).first():
        return jsonify({"error": "Username already exists"}), 400

    hashed = hash_password(password)
    new_user = User(username=username, password_hash=hashed)
    db.session.add(new_user)
    db.session.commit()

    tokens = generate_tokens(new_user.id)
    return jsonify({"message": "User created successfully", **tokens}), 201


@auth_bp.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    username, password = data['username'], data['password']
    user = User.query.filter_by(username=username).first()

    if user and check_password(password, user.password_hash):
        tokens = generate_tokens(user.id)
        return jsonify(tokens)
    return jsonify({"error": "Invalid credentials"}), 401


@auth_bp.route('/profile', methods=['GET'])
@jwt_required()
def profile():
    current_user_id = get_jwt_identity()
    return jsonify({"user_id": current_user_id})
