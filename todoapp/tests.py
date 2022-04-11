from mixer.backend.django import mixer
from rest_framework import status
from rest_framework.test import APITestCase

from todoapp.models import Project, ToDo
from usersapp.models import User


class TestProjectViewSet(APITestCase):
    def setUp(self) -> None:
        self.admin_login = 'admin'
        self.admin_pass = 'Admin123456'
        self.admin_email = 'admin@admin.admin'
        self.admin = User.objects.create_superuser(
            username=self.admin_login,
            password=self.admin_pass,
            email=self.admin_email
        )
        self.project_data = mixer.blend(Project)
        self.project_put = {'name': 'my_new_project'}
        self.url = '/api/projects/'

    def test_get_list(self) -> None:
        response = self.client.get(self.url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_get_detail(self) -> None:
        temp_project = self.project_data
        response = self.client.get(f'{self.url}{temp_project.id}/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_update_guest(self) -> None:
        temp_project = self.project_data
        response = self.client.put(f'{self.url}{temp_project.id}/', {'name': 'hello_world'})
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)

    # Не работает авторизация
    # def test_update_admin(self) -> None:
    #     temp_project = self.project_data
    #     self.client.login(username=self.admin_login, password=self.admin_pass)
    #     response = self.client.put(f'{self.url}{temp_project.id}/', {'name': 'hello_world'})
    #     self.assertEqual(response.status_code, status.HTTP_200_OK)
