from django.utils.translation import gettext as _
from drf_yasg import openapi
from drf_yasg.utils import swagger_auto_schema
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

from .serializers import HelloResponseSerializer, HelloRequestSerializer


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
    first_name = request.data.get('firstName')
    last_name = request.data.get('lastName')
    email = request.data.get('email')
    country_code = request.data.get('countryCode')
    phone = request.data.get('phone')

    if not all([first_name, last_name, email, country_code, phone]):
        return Response({"message": "All fields are required."}, status=status.HTTP_400_BAD_REQUEST)

    # TODO: add logic if user have access for trial
    # if true:
    #     free trial pass template (figma)
    # else:
    #     free trial fail template (figma)

    return Response({"message": "Form submitted successfully!"}, status=status.HTTP_200_OK)
