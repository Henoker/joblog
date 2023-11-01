from django.contrib import admin
from django.urls import path, include, re_path
from django.views.generic import TemplateView
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api-auth/', include("rest_framework.urls")),
    path('api/token', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh', TokenRefreshView.as_view(), name='token_refresh'),
    path('api/accounts/', include('accounts.urls')),
    path('api/vi/', include("job.urls")),
    # path("api/v1/dj-rest-auth/", include("dj_rest_auth.urls")),
    # path("api/v1/dj-rest-auth/registration/", include("dj_rest_auth.registration.urls")),
]

# urlpatterns += [re_path(r'^.*', TemplateView.as_view(template_name='index.html'))]