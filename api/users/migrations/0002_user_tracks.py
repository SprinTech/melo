# Generated by Django 4.0.5 on 2022-06-08 12:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tracks', '0001_initial'),
        ('users', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='tracks',
            field=models.ManyToManyField(to='tracks.track'),
        ),
    ]