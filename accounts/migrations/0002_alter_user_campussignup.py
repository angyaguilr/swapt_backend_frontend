# Generated by Django 4.1.7 on 2023-05-17 18:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='campusSignUp',
            field=models.CharField(choices=[('Elon University', 'Elon University')], max_length=50, null=True),
        ),
    ]