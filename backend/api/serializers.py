from django.utils.translation import gettext_lazy as _
from rest_framework import serializers


class HelloResponseSerializer(serializers.Serializer):
    greeting = serializers.CharField(label=_('Greeting message'), max_length=50)


class HelloRequestSerializer(serializers.Serializer):
    name = serializers.CharField(label=_('Name'), max_length=25)


class FreeTrialSerializer(serializers.Serializer):
    first_name = serializers.CharField(
        label=_('First name'),
        max_length=255,
        required=True,
    )

    last_name = serializers.CharField(
        label=_('Last name'),
        max_length=255,
        required=True,
    )

    email = serializers.EmailField(
        label=_('Email'),
        required=True,
    )

    country_code = serializers.CharField(
        label=_('Country code'),
        max_length=5,
        required=True,
    )

    phone_number = serializers.CharField(
        label=_('Phone number'),
        max_length=20,
        required=True,
    )
