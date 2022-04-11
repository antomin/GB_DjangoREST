from django.test import TestCase
from usersapp.models import User
from rest_framework import status
from rest_framework.test import APIRequestFactory, APIClient

from usersapp.views import UserModelViewSet


class TestUserViewSet(TestCase):
    def setUp(self) -> None:
        self.admin_login = 'admin'
        self.admin_pass = 'admin'
        self.admin_email = 'admin@admin.admin'
        self.admin = User.objects.create_superuser(
            username=self.admin_login,
            password=self.admin_pass,
            email=self.admin_email
        )
        self.user_data = {'username': 'olduser', 'first_name': 'Old', 'last_name': 'Old'}
        self.user_put = {'username': 'newuser', 'first_name': 'New', 'last_name': 'New'}
        self.url = '/api/users/'

    def test_get_list(self) -> None:
        factory = APIRequestFactory()
        request = factory.get(self.url)
        view = UserModelViewSet.as_view({'get': 'list'})
        response = view(request)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_update_guest(self) -> None:
        user = User.objects.create(**self.user_data)
        client = APIClient()
        response = client.put(f'{self.url}{user.id}/', self.user_put)
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)

    # def test_update_admin(self) -> None:
    #     user = User.objects.create(**self.user_data)
    #     client = APIClient()
    #     client.login(username=self.admin_login, password=self.admin_pass)
    #     response = client.put(f'{self.url}{user.id}/', self.user_put)
    #     self.assertEqual(response.status_code, status.HTTP_200_OK)
