# Generated by Django 2.0.4 on 2018-04-30 06:28

from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('myapp', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='userprofile',
            name='user',
            field=models.ForeignKey(on_delete='CASECADE', to=settings.AUTH_USER_MODEL),
        ),
    ]
