from django.shortcuts import render, get_object_or_404
from rest_framework import generics

from .models import Group, Beer
from .serializers import GroupSerializer, BeerSerializer


class GroupListCreate(generics.ListCreateAPIView):
    # queryset = Group.objects.all()
    serializer_class = GroupSerializer

    def get_queryset(self):
        return Group.objects.filter(created_by=self.request.user)

    def perform_create(self, serializer):
        serializer.save(created_by=self.request.user)

class GroupRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = Group.objects.all()
    serializer_class = GroupSerializer

class BeerListCreate(generics.ListCreateAPIView):
    queryset = Beer.objects.all()
    serializer_class = BeerSerializer

class BeerRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = Beer.objects.all()
    serializer_class = BeerSerializer
