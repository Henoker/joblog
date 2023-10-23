# from rest_framework import generics
from rest_framework import viewsets
from django.contrib.auth import get_user_model
from .models import Job
from .serializers import JobSerializer, UserSerializer
from .permissions import IsOwnerOrReadOnly
from rest_framework.permissions import IsAdminUser

# Create your views here.
# class JobList(generics.ListCreateAPIView):
#     permission_classes = (IsOwnerOrReadOnly,)
#     queryset = Job.objects.all()
#     serializer_class = JobSerializer
    
# class JobDetail(generics.RetrieveUpdateDestroyAPIView):
#     permission_classes = (IsOwnerOrReadOnly,)
#     queryset = Job.objects.all()
#     serializer_class = JobSerializer
    
# class UserList(generics.ListCreateAPIView):
#     queryset = get_user_model().objects.all()
#     serializer_class = UserSerializer
    
# class UserDetail(generics.RetrieveUpdateDestroyAPIView):
#     queryset = get_user_model().objects.all()
#     serializer_class = UserSerializer
# Refactored from the above
class JobViewSet(viewsets.ModelViewSet):
    permission_classes= (IsOwnerOrReadOnly,)
    queryset = Job.objects.all()
    serializer_class = JobSerializer
     
class UserViewSet(viewsets.ModelViewSet):
    permission_classes = [IsAdminUser]
    queryset = get_user_model().objects.all()
    serializer_class = UserSerializer