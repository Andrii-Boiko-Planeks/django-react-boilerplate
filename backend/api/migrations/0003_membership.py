# Generated by Django 4.1.2 on 2024-11-14 09:16

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('api', '0002_alter_freetrial_email_alter_freetrial_user'),
    ]

    operations = [
        migrations.CreateModel(
            name='Membership',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('home_gym_location', models.CharField(max_length=255)),
                ('membership_type', models.CharField(max_length=255)),
                ('start_date', models.DateField(blank=True, null=True)),
                ('amount_of_visits', models.IntegerField(default=0)),
                ('payment_date', models.DateField(blank=True, null=True)),
                ('last_payment_date', models.DateField(blank=True, null=True)),
                ('next_payment_date', models.DateField(blank=True, null=True)),
                ('last_payment_amount', models.IntegerField(blank=True, null=True)),
                ('next_payment_amount', models.IntegerField(blank=True, null=True)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='memberships', to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'verbose_name': 'Membership',
                'verbose_name_plural': 'Memberships',
                'ordering': ('-created_at',),
            },
        ),
    ]
