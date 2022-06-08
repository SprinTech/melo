from pydantic import BaseModel
from datetime import datetime
from typing import List, Optional

class UserBase(BaseModel):
    username: str
    
    class Config:
        orm_mode=True
        
class UserCreate(UserBase):
    pass
    
class SongBase(BaseModel):
    title: str

    class Config:
        orm_mode = True

class SongCreate(SongBase):
    pass

class User(UserBase):
    id: int
    created_at: datetime = None
    updated_at: datetime = None
    songs: List[SongBase]

class Song(SongBase):
    id: int
    created_at: datetime = None
    predicted_genre: str
    users: List[UserBase]
