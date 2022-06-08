from rest_framework.serializers import ModelSerializer, IntegerField, SerializerMethodField
from .models import User
from tracks.serializers import TrackSerializer

class UserSerializer(ModelSerializer):
    """
    A viewset for viewing and editing user instances.
    """
    track_list = TrackSerializer(read_only=True, many=True)
    count = SerializerMethodField(read_only=True)
    count_rock = SerializerMethodField(read_only=True)
    count_rap = SerializerMethodField(read_only=True)

    def get_count(self, users):
        return users.track_list.count()

    def get_count_rock(self, users):
        return users.track_list.filter(predicted_genre="Rock").count()

    def get_count_rap(self, users):
        return users.track_list.filter(predicted_genre="Rap").count()

    class Meta:
        model = User
        fields = ['id', 'created_at', 'updated_at', 'username', 'track_list', 'count', 'count_rock', 'count_rap']