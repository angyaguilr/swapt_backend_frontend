# Generated by Django 4.1.7 on 2023-02-26 22:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('listings', '0004_alter_gradedifficultypair_listings'),
    ]

    operations = [
        migrations.AddField(
            model_name='swaptlistingmodel',
            name='listings',
            field=models.ManyToManyField(blank=True, related_name='order', to='listings.listing'),
        ),
    ]