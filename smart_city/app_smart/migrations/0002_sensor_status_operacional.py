# Generated by Django 5.0.6 on 2024-05-17 12:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app_smart', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='sensor',
            name='status_operacional',
            field=models.BooleanField(default=True),
        ),
    ]
