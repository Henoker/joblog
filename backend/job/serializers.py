from rest_framework import serializers

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