from django.contrib import admin
from .models import FreeTrial


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
