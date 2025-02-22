# Generated by Django 5.1.6 on 2025-02-14 09:39

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Resource',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('capacity', models.IntegerField(help_text='Total capacity of the resource (e.g., water capacity in liters)')),
                ('current_usage', models.IntegerField(help_text='Current usage amount')),
            ],
        ),
        migrations.CreateModel(
            name='MaintenanceLog',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date', models.DateField()),
                ('issue', models.TextField()),
                ('resolved', models.BooleanField(default=False)),
                ('resource', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='logs', to='resources.resource')),
            ],
        ),
    ]
