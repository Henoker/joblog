from rest_framework import generics
from .models import Job
from .serializers import JobSerializer
from .permissions import IsOwnerOrReadOnly

# Create your views here.
class JobList(generics.ListCreateAPIView):
    permission_classes = (IsOwnerOrReadOnly,)
    queryset = Job.objects.all()
    serializer_class = JobSerializer
    
class JobDetail(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = (IsOwnerOrReadOnly,)
    queryset = Job.objects.all()
    serializer_class = JobSerializer
    