from rest_framework.serializers import ModelSerializer
from .models import Door

class DoorSerializer(ModelSerializer):
    class Meta:
        model = Door
        fields = '__all__'