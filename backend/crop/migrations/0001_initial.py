# Generated by Django 5.0.7 on 2024-10-04 20:29

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='FormData',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('latitude', models.FloatField()),
                ('longitude', models.FloatField()),
                ('nitrogen', models.FloatField()),
                ('phosphorous', models.FloatField()),
                ('potasium', models.FloatField()),
                ('ph', models.FloatField()),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='your_new_model', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
