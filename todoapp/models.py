from django.db import models

from usersapp.models import User


class Project(models.Model):
    name = models.CharField(max_length=128, unique=True)
    repo_url = models.CharField(max_length=128, blank=True)
    users = models.ManyToManyField(User)


class ToDo(models.Model):
    project = models.ForeignKey(Project, on_delete=models.CASCADE)
    text = models.TextField()
    author = models.ForeignKey(User, on_delete=models.PROTECT)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    is_active = models.BooleanField(default=True)


