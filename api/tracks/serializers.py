from rest_framework.serializers import ModelSerializer, PrimaryKeyRelatedField
from .models import Track
from users.models import User

class TrackSerializer(ModelSerializer):
    """
    A viewset for viewing and editing user instances.
    """
    users = PrimaryKeyRelatedField(queryset=User.objects.all(), many=True)

    class Meta:
        model = Track
        fields = ['id', 'created_at', 'title', 'predicted_genre', 'users']