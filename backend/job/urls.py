from django.urls import path
from rest_framework.routers import SimpleRouter

# from .views import JobList, JobDetail, UserList, UserDetail
from .views import JobViewSet, UserViewSet

router = SimpleRouter()
router.register("users", UserViewSet, basename="users")
router.register("", JobViewSet, basename="jobs")

urlpatterns = router.urls

# urlpatterns = [
    # path("", JobList.as_view(), name="job_list"),
    # path("<int:pk>/", JobDetail.as_view(), name="job_detail"),
    # path("users/", UserList.as_view()),
    # path("users/<int:pk>/", UserDetail.as_view()),
    
# ]
