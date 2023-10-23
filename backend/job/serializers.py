from rest_framework import serializers
from django.contrib.auth import get_user_model

from .models import Job

class JobSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            "id",
            "created_by",
            "company",
            "position",
            "status",
            "job_type",
            "job_location"
        )
        
        model = Job
        
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = get_user_model()
        fields = ("id", "username",)