# Generated by Django 4.1.7 on 2023-05-17 22:07

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0007_delete_swaptlistingtransactionref_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='cartorderitems',
            name='email',
        ),
    ]
