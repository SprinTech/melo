from pydantic import BaseModel
from datetime import datetime

class UserBase(BaseModel):
    username: str
    
    class Config:
        orm_mode=True
        
class UserCreate(UserBase):
    pass
    # refresh_token: str
    
class User(UserBase):
    id: int
    created_at: datetime = None
    updated_at: datetime = None
    last_login: datetime = None