from django.contrib.auth import get_user_model
from django.db import models

User = get_user_model()


class FreeTrial(models.Model):
    user = models.OneToOneField(
        User,
        on_delete=models.CASCADE,
        related_name='free_trials',
        null=True,
        blank=True,
    )
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    email = models.EmailField(unique=True)
    country_code = models.CharField(max_length=5)
    phone_number = models.CharField(max_length=20)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f'{self.first_name} {self.last_name}'

    class Meta:
        ordering = ('-created_at',)
        verbose_name = 'Free Trial'
        verbose_name_plural = 'Free Trials'
