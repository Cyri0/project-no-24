from django.shortcuts import render
from .models import Door
from .serializers import DoorSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view(['GET'])
def getAllDoors(request):
    doors = Door.objects.all()
    ser = DoorSerializer(doors, many = True)

    return Response(ser.data)