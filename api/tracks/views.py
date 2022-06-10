from rest_framework import viewsets
from rest_framework.authentication import BasicAuthentication
from rest_framework.permissions import IsAuthenticated

from .serializers import TrackSerializer
from .models import Track

class TrackViewSet(viewsets.ModelViewSet):
    """
    A viewset for viewing and editing user instances.
    """
    authentication_classes = (BasicAuthentication,)
    permission_classes = (IsAuthenticated,)
    
    serializer_class = TrackSerializer
    queryset = Track.objects.all()
