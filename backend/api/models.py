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


class Membership(models.Model):
    MEMBERSHIP_TYPES = [
        ("Single Visit", "Single Visit"),
        ("Monthly Pass", "Monthly Pass"),
        ("10-Session Pack", "10-Session Pack"),
        ("Quarterly Membership", "Quarterly Membership"),
        ("Annual Membership", "Annual Membership"),
    ]
    home_gym_location = models.CharField(max_length=255)
    membership_type = models.CharField(max_length=255, choices=MEMBERSHIP_TYPES)
    start_date = models.DateField(blank=True, null=True)
    amount_of_visits = models.IntegerField(default=0)
    payment_date = models.DateField(blank=True, null=True)
    last_payment_date = models.DateField(blank=True, null=True)
    next_payment_date = models.DateField(blank=True, null=True)
    last_payment_amount = models.IntegerField(blank=True, null=True)
    next_payment_amount = models.IntegerField(blank=True, null=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='memberships')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f'{self.user.email} at {self.home_gym_location} with {self.membership_type}'

    class Meta:
        ordering = ('-created_at',)
        verbose_name = 'Membership'
        verbose_name_plural = 'Memberships'
