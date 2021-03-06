from django.shortcuts import render, get_object_or_404
from rest_framework import generics, authentication

from .models import Group, Beer
from .serializers import GroupSerializer, BeerSerializer, GroupBeerSerializer


class GroupListCreate(generics.ListCreateAPIView):
    queryset = Group.objects.all()
    serializer_class = GroupSerializer
    authentication_classes = [authentication.TokenAuthentication]

    def get_queryset(self):
        return Group.objects.filter(created_by=self.request.user)

    def perform_create(self, serializer):
        serializer.save(created_by=self.request.user)

class GroupRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = Group.objects.all()
    serializer_class = GroupSerializer
    authentication_classes = [authentication.TokenAuthentication]

class BeerListCreate(generics.ListCreateAPIView):
    queryset = Beer.objects.all()
    serializer_class = BeerSerializer
    authentication_classes = [authentication.TokenAuthentication]

class BeerRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = Beer.objects.all()
    serializer_class = BeerSerializer
    authentication_classes = [authentication.TokenAuthentication]


class GroupBeerUpdate(generics.UpdateAPIView):
    queryset = Group.objects.all()
    serializer_class = GroupBeerSerializer
    authentication_classes = [authentication.TokenAuthentication]

    def partial_update(self, request, *args, **kwargs):

       
        if not Beer.objects.filter(beer_name=request.data['beer_name']).exists():
            beer = Beer.objects.create(beer_name=request.data['beer_name'], beer_description=request.data['beer_description'], beer_label=request.data['beer_label'], beer_abv=request.data['beer_abv'], beer_ibu=request.data['beer_ibu'], brewery_name=request.data['brewery_name'], brewery_state=request.data['brewery_state'])
        else:
            beer = Beer.objects.filter(beer_name=request.data['beer_name'])
        instance = self.get_object()
        instance.beers.add(beer)
        instance.save()
