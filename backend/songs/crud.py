import sys
from sqlalchemy.orm import Session

sys.path.append("..")
import models
import schemas

def get_song(db: Session, song_id: int):
    return db.query(models.Song).filter(models.Song.id == song_id).first()

def get_song_by_title(db: Session, title: str):
    return db.query(models.Song).filter(models.Song.title == title).first()

def get_users(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.Song).offset(skip).limit(limit).all()

def create_song(db: Session, song: schemas.SongBase):
    db_song = models.Song(**dict(song))
    db.add(db_song)
    db.commit()
    db.refresh(db_song)
    return db_song