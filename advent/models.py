from django.db import models

class Door(models.Model):
    date = models.DateField()
    image = models.ImageField(upload_to='frontend/static/img', null=True, blank=True)
    isOpen = models.BooleanField(default=False)

    def __str__(self):
        return str(self.date.day)