from django.contrib import admin
from .models import FreeTrial, Membership


@admin.register(FreeTrial)
class FreeTrialAdmin(admin.ModelAdmin):
    list_display = ('first_name', 'last_name', 'email', 'country_code', 'phone_number', 'created_at', 'updated_at')
    search_fields = ('first_name', 'last_name', 'email', 'phone_number')
    list_filter = ('created_at', 'updated_at')
    readonly_fields = ('created_at', 'updated_at')
    ordering = ('-created_at',)

    fieldsets = (
        ('Personal Information', {
            'fields': ('user', 'first_name', 'last_name', 'email', 'country_code', 'phone_number')
        }),
        ('Timestamps', {
            'fields': ('created_at', 'updated_at')
        }),
    )


@admin.register(Membership)
class MembershipAdmin(admin.ModelAdmin):
    list_display = ('user', 'home_gym_location', 'membership_type', 'start_date', 'amount_of_visits', 'payment_date',
                    'last_payment_date', 'next_payment_date', 'last_payment_amount', 'next_payment_amount',
                    'created_at', 'updated_at')
    list_filter = (
        'home_gym_location', 'membership_type', 'start_date', 'payment_date', 'last_payment_date', 'next_payment_date')
    search_fields = ('user__email', 'home_gym_location', 'membership_type')
    ordering = ('-created_at',)
    readonly_fields = ('created_at', 'updated_at')
