from django.shortcuts import redirect
from .models import Door
from .serializers import DoorSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view(['GET'])
def getAllDoors(request):
    doors = Door.objects.all()
    ser = DoorSerializer(doors, many = True)

    return Response(ser.data)

@api_view(['GET'])
def toggleDoorById(request, id):
    door = Door.objects.get(id=id)
    door.isOpen = not door.isOpen
    door.save()
    return redirect('home')