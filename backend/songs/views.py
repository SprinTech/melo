import sys
from sqlalchemy.orm import Session
from fastapi import APIRouter, Depends, HTTPException
from typing import List
from . import crud

sys.path.append("..")
import schemas
from utils import get_db

router = APIRouter()

@router.post("/songs/", response_model=schemas.Song, status_code=201)
def create_song(song: schemas.SongBase, db: Session = Depends(get_db)):
    db_song = crud.get_song_by_title(db, title=song.title)
    if db_song:
        pass
    return crud.create_song(db=db, song=song)

@router.get("/songs/", response_model=List[schemas.Song])
def read_songs(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    songs = crud.get_songs(db, skip=skip, limit=limit)
    return songs

@router.get("/songs/{song_id}", response_model=schemas.Song)
def read_song(song_id: int, db: Session = Depends(get_db)):
    db_song = crud.get_song(db, song_id)
    if db_song is None:
        raise HTTPException(status_code=404, detail="song not found")
    return db_song