# Generated by Django 3.0.4 on 2020-03-13 19:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0002_profile'),
    ]

    operations = [
        migrations.AddField(
            model_name='profile',
            name='username',
            field=models.CharField(blank=True, max_length=30),
        ),
    ]
