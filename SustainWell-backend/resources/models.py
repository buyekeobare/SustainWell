from django.db import models

# Create your models here.

from django.db import models

class Resource(models.Model):
    name = models.CharField(max_length=100)
    capacity = models.IntegerField(help_text="Total capacity of the resource (e.g., water capacity in liters)")
    current_usage = models.IntegerField(help_text="Current usage amount")

    def __str__(self):
        return self.name

class MaintenanceLog(models.Model):
    resource = models.ForeignKey(Resource, on_delete=models.CASCADE, related_name='logs')
    date = models.DateField()
    issue = models.TextField()
    resolved = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.resource.name} - {self.issue[:20]}"

