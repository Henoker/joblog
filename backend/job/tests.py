from django.test import TestCase
from django.contrib.auth import get_user_model

from .models import Job

# Create your tests here.
class JobTests(TestCase):
    @classmethod
    def setUpTestData(cls):
        cls.user = get_user_model().objects.create_user(
            username = "testuser",
            email= "test@email.com",
            password = "secret",
        )
        
        cls.job = Job.objects.create(
            created_by = cls.user,
            company = "Google",
            position = "Frontend Developer",
            status = "pending",
            job_type = "Full-time",
            job_location = "Tornto",
        )
        
    def test_job_model(self):
        self.assertEqual(self.job.created_by.username, "testuser")
        self.assertEqual(self.job.company, "Google")
        self.assertEqual(self.job.position, "Frontend Developer")
        self.assertEqual(self.job.status, "pending")
        self.assertEqual(self.job.job_type, "Full-time")
        self.assertEqual(self.job.job_location, "Tornto")
        self.assertEqual(str(self.job), "Google")
        