from django.contrib import admin
from django.urls import include, path
from rest_framework.authtoken import views as authtoken
from rest_framework.routers import DefaultRouter
from rest_framework_simplejwt.views import (TokenObtainPairView,
                                            TokenRefreshView)

import todoapp.views as todoapp
import usersapp.views as usersapp

router = DefaultRouter()
router.register('users', usersapp.UserModelViewSet)
router.register('projects', todoapp.ProjectCustomDjangoFilterModelViewSet)
router.register('todo', todoapp.ToDoCastomDjangoFilterModelViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls')),
    path('api/', include(router.urls)),
    path('api-token-auth/', authtoken.obtain_auth_token),
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]