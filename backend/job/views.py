from rest_framework import viewsets
from django.contrib.auth import get_user_model
from .models import Job
from .serializers import JobSerializer, UserSerializer
from .permissions import IsOwnerOrReadOnly
from rest_framework.permissions import IsAdminUser

class JobViewSet(viewsets.ModelViewSet):
    permission_classes= (IsOwnerOrReadOnly,)
    queryset = Job.objects.all()
    serializer_class = JobSerializer
     
class UserViewSet(viewsets.ModelViewSet):
    permission_classes = [IsAdminUser]
    queryset = get_user_model().objects.all()
    serializer_class = UserSerializer
