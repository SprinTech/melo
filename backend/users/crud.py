import sys
from sqlalchemy.orm import Session
from fastapi.responses import JSONResponse

sys.path.append("..")
import models
import schemas

def get_user(db: Session, user_id: int):
    return db.query(models.User).filter(models.User.id == user_id).first()

def get_user_by_username(db: Session, username: str):
    return db.query(models.User).filter(models.User.username == username).first()

def get_users(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.User).offset(skip).limit(limit).all()

def create_user(db: Session, user: schemas.UserBase):
    db_user = models.User(**dict(user))
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user

def delete_user(db: Session, user_id: int):
    db_user = db.query(models.User).get(user_id)
    db.delete(db_user)
    db.commit()
    return f"User with id {user_id} have been deleted successfully"

def update_user(db: Session, user_id: int, user: schemas.UserBase):
    db_user = db.query(models.User).get(user_id)
    db_user.username = user.username
    db.commit()
    db.refresh(db_user)
    return db_user
