# Generated by Django 4.1.7 on 2023-05-12 22:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='swaptlistingmodel',
            name='listings',
            field=models.ManyToManyField(blank=True, related_name='inventory_items', to='main.inventorylisting'),
        ),
    ]
