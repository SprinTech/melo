from django.contrib import admin
from .models import Track

@admin.register(Track)
class TrackAdmin(admin.ModelAdmin):
    list_display = ('title', 'predicted_genre', 'created_at')
    raw_id_fields = ('users',)
    ordering = ('title', )