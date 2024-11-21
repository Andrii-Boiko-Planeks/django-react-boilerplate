from django.contrib.auth import get_user_model
from django.core.exceptions import ObjectDoesNotExist
from django.db import IntegrityError
from django.utils.translation import gettext as _
from drf_yasg import openapi
from drf_yasg.utils import swagger_auto_schema
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from rest_framework.authtoken.models import Token
from rest_framework.exceptions import AuthenticationFailed

from .models import FreeTrial, Membership
from .serializers import HelloResponseSerializer, HelloRequestSerializer, FreeTrialSerializer

User = get_user_model()


@swagger_auto_schema(
    method='get',
    operation_description=_("Returns 'Hello world' response."),
    responses={200: openapi.Response('Greeting', HelloResponseSerializer)}
)
@api_view(['GET'])
def hello_world_view(request):
    greeting = 'Hello world'
    serializer = HelloResponseSerializer({'greeting': greeting})
    return Response(serializer.data, status=200)


@swagger_auto_schema(
    method='post',
    request_body=HelloRequestSerializer,
    operation_description=_("Requires name and returns 'Hello {name}' response."),
    responses={200: openapi.Response('Greeting', HelloResponseSerializer)}
)
@api_view(['POST'])
def hello_name_view(request):
    in_serializer = HelloRequestSerializer(data=request.data)
    in_serializer.is_valid(raise_exception=True)
    greeting = 'Hello ' + in_serializer.validated_data['name']
    out_serializer = HelloResponseSerializer({'greeting': greeting})
    return Response(out_serializer.data, status=200)


@api_view(['POST'])
def free_trial_view(request):
    serializer = FreeTrialSerializer(data=request.data)
    if serializer.is_valid():
        email = serializer.validated_data['email']

        try:
            free_trial = FreeTrial.objects.filter(email=email).exists()
            if free_trial:
                return Response(
                    {"message": "Trial already exists for this email"},
                    status=status.HTTP_302_FOUND,
                )
            else:
                try:
                    user = User.objects.create_user(
                        email=email,
                        name=serializer.validated_data['first_name'] + ' ' + serializer.validated_data['last_name'],
                    )
                    user.set_password(
                        serializer.validated_data['country_code'] + serializer.validated_data['phone_number'])
                    user.save()
                except IntegrityError:
                    user = User.objects.get(email=email)

                free_trial = FreeTrial.objects.create(
                    user=user,
                    first_name=serializer.validated_data['first_name'],
                    last_name=serializer.validated_data['last_name'],
                    email=email,
                    country_code=serializer.validated_data['country_code'],
                    phone_number=serializer.validated_data['phone_number'],
                )
                free_trial.save()

                token, _ = Token.objects.get_or_create(user=user)

                return Response(
                    {
                        "message": "Trial period started successfully",
                        "token": token.key
                    },
                    status=status.HTTP_201_CREATED,
                )
        except ObjectDoesNotExist:
            return Response(
                {"message": "Error occurred while checking the trial status"},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR,
            )

    return Response(
        serializer.errors,
        status=status.HTTP_400_BAD_REQUEST
    )
    # TODO: add logic if user have access for trial
    # if true:
    #     free trial pass template (figma)
    # else:
    #     free trial fail template (figma)


@api_view(['GET'])
def my_membership_view(request):
    token = request.headers.get('Authorization')
    if not token:
        raise AuthenticationFailed('Token not provided')

    if token.startswith('Token '):
        token = token.split(' ')[1]

    try:
        token_obj = Token.objects.get(key=token)
        user = token_obj.user
    except Token.DoesNotExist:
        raise AuthenticationFailed('Invalid token')

    membership = Membership.objects.filter(user=user).order_by('-created_at').first()

    data = {
        'email': user.email,
        'first_name': user.first_name,
        'last_name': user.last_name,
        'home_gym_location': membership.home_gym_location,
        'start_date': membership.start_date,
        'membership_type': membership.membership_type,
        'amount_of_visits': membership.amount_of_visits,
        'payment_date': membership.payment_date,
        'last_payment_date': membership.last_payment_date,
        'last_payment_amount': membership.last_payment_amount,
        'next_payment_date': membership.next_payment_date,
        'next_payment_amount': membership.next_payment_amount,
    }

    return Response(data, status=status.HTTP_200_OK)
