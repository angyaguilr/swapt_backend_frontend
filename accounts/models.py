from django.db import models
from django.contrib.auth.models import AbstractUser

# User model for website
class User(AbstractUser):
    email = models.EmailField(max_length=254, unique=True)
    is_swapt_user = models.BooleanField(default=False)
    is_admin = models.BooleanField(default=False)
    is_PM_admin = models.BooleanField(default=False)
   
    CAMPUS_CHOICES = [
        ('Elon University', 'Elon University'),
    ]
    campusSignUp = models.CharField(
        max_length=50,
        choices=CAMPUS_CHOICES,
        null=True
        )

# SwaptUser model that's attached to user model
class SwaptUser(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, primary_key=True)

# Learn Fresh admin model that's attached to user model
class Swapt_admin(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, primary_key=True)

class propManager(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, primary_key=True)    
    first_name = models.CharField(max_length=30, default="Jenny")
    last_name = models.CharField(max_length=30, default="smith")
    companyname = models.CharField(max_length=40, default="company")
    email = models.EmailField(unique= True, default='aaguilar@gmai.com')
    propertyname = models.CharField(max_length=30, default="Property")

class PropNameSignUp(models.Model):
    propertyName = models.CharField(
        max_length=100, help_text= ("Designates the name of the property.")
    )
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self) -> str:
        return self.propertyName
    
# Code model for sign up codes
class Code(models.Model):
    code = models.CharField(max_length=50, primary_key=True, unique=True)
    propertyNameSignUp = models.ManyToManyField(PropNameSignUp, blank=True)
