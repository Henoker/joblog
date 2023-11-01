from rest_framework.routers import SimpleRouter
from .views import JobViewSet, UserViewSet

router = SimpleRouter()
router.register("users", UserViewSet, basename="users")
router.register("", JobViewSet, basename="jobs")

urlpatterns = router.urls