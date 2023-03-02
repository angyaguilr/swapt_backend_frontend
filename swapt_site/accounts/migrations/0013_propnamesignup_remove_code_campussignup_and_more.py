# Generated by Django 4.1.4 on 2023-03-02 18:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0012_user_is_pm_admin'),
    ]

    operations = [
        migrations.CreateModel(
            name='PropNameSignUp',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('propertyName', models.CharField(help_text='Designates the name of the property.', max_length=100)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
            ],
        ),
        migrations.RemoveField(
            model_name='code',
            name='campusSignUp',
        ),
        migrations.AddField(
            model_name='code',
            name='propertyNameSignUp',
            field=models.ManyToManyField(blank=True, to='accounts.propnamesignup'),
        ),
    ]