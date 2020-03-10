from rest_framework import serializers

from .models import Group


class GroupSerializer(serializers.ModelSerializer):
    class Meta:
        model = Group
        fields = ('id', 'title', 'description', 'image', 'is_public',)