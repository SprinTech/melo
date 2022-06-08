from django.db import models
from users.models import User

class Track(models.Model):
    class MusicGenre(models.TextChoices):
        JAZZ = 'Jazz', ('Jazz')
        DISCO = 'Disco', ('Disco')
        RAP = 'Rap', ('Rap')
        ROCK = 'Rock', ('Rock')

    users = models.ManyToManyField(User, related_name="track_list", blank=True)
    title = models.CharField(max_length=100, null=False)
    predicted_genre = models.CharField(max_length=10, choices=MusicGenre.choices, default=MusicGenre.ROCK)
    created_at = models.DateTimeField(auto_now_add=True)