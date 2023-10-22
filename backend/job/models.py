from django.db import models
from django.conf import settings

# Create your models here.
class Job(models.Model):
    company = models.CharField(max_length=50, blank=False, null=False)
    position = models.CharField(max_length=100, blank=False, null=False)
    status_choices = [
        ('interview', 'Interview'),
        ('declined', 'Declined'),
        ('pending', 'Pending')
    ]
    status = models.CharField(max_length=10, choices=status_choices, default='pending')
    job_type_choices = [
        ('full-time', 'Full-time'),
        ('part-time', 'Part-time'),
        ('remote', 'Remote'),
        ('internship', 'Internship')
    ]
    job_type = models.CharField(
        max_length=20,
        choices=job_type_choices,
        default='full-time'
    )
    job_location = models.CharField(max_length=100, default='my city', blank=False, null=False)
    created_by = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    
    def __str__(self):
        return self.company
