# Generated by Django 4.1.4 on 2023-01-17 22:55

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0007_campussignup_locationsignup_propmgnr_admin_and_more'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='propMgnr_admin',
            new_name='propManager',
        ),
    ]