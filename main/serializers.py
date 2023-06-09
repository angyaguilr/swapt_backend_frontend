from rest_framework import serializers 
from .models import Banner, Category, Brand, Color, Dimension, InventoryListingTag, InventoryListing,  UserAddressBook, ProductAttribute, SwaptListingModel
import random
 

class CampusPropertyNamePairSerializer(serializers.ModelSerializer):

    class Meta:
        model =  UserAddressBook
        fields = ('campus',
                  'propertyname',
                  )
class InventoryListingSerializer(serializers.ModelSerializer):
    
    # Added fields up here to specify attributes (read_only or write_only)
    title = serializers.CharField(read_only=True)
    desc = serializers.CharField(read_only=True)
    location = serializers.CharField(read_only=True)
    propertyname = serializers.SerializerMethodField(read_only=True)
    stage = serializers.IntegerField(write_only=True)
    issue = serializers.CharField(write_only=True)
    
    class Meta:
        model = InventoryListing
        fields = ('id',
                  'title',
                  'tags',
                  'desc',
                  'url',
                  'quantity',
                  'title',
                  'desc',
                  'color',
                  'delivery',
                  'category',
                  'condition',
                  'cover',
                  'itemPrice',
                  'location',
                  'propertyname',
                  'stage',
                  'issue'
                  )
        depth=1
      
    # Randomly selects a propertyname level to return in the API request based on campus levels
    # requested and campus levels that are in a campus/propertyname pair of the card
    def get_propertyname(self, obj):
        if(obj.stage == 5): 
            return "Inventory"
            
        campuses = self.context.get("campuses")

        if campuses == None:
            return "N/A"

        # Narrow down from campuses requested to campuses actually in the card's campus/propertyname pairs
        campuses = obj.campuspropertynamepair_set.filter(campus__in=campuses).values("campus")

        if campuses != None:
            campus = random.choice(campuses)["campus"]
        else:
            return "N/A"

        propertyname = obj.campuspropertynamepair_set.get(campus=campus).propertyname
        
        # Returns in this format because this is how the propertyname is displayed in the game
        if propertyname == "Oaks":
            return "+1" 
        elif propertyname == "Millpoint": 
            return "+2"
        else:
            return "+3"
class InventoryListingReviewSerializer(serializers.ModelSerializer):

    class Meta:
        model = InventoryListing
        fields = ('title',
                  'desc',
                  'location',
                  'id',
                  'issue'
                  )
        depth=1 # Allows user to see campus and propertyname pairs from the set

        datatables_always_serialize = ('id')


class SwaptCampusPropertyNamePairSerializer(serializers.ModelSerializer):

    class Meta:
        model =  UserAddressBook
        fields = ('campus',
                  'propertyname',
                  )
class SwaptListingSerializer(serializers.ModelSerializer):
    
    # Added fields up here to specify attributes (read_only or write_only)
    title = serializers.CharField(read_only=True)
    detail = serializers.CharField(read_only=True)
    location = serializers.CharField(read_only=True)
    propertyname = serializers.SerializerMethodField(read_only=True)
    stage = serializers.IntegerField(write_only=True)
    issue = serializers.CharField(write_only=True)
    
    class Meta:
        model = SwaptListingModel
        fields = ('id',
                  'title',
                  'tags',
                  'detail',
                  'url',
                  'quantity',
                  'title',
                  'desc',
                  'color',
                  'delivery',
                  'category',
                  'condition',
                  'cover',
                  'itemPrice',
                  'location',
                  'propertyname',
                  'stage',
                  'issue'
                  )
        depth=1
      
    # Randomly selects a propertyname level to return in the API request based on campus levels
    # requested and campus levels that are in a campus/propertyname pair of the card
    def get_propertyname(self, obj):
        if(obj.stage == 5): 
            return "Inventory"
            
        campuses = self.context.get("campuses")

        if campuses == None:
            return "N/A"

        # Narrow down from campuses requested to campuses actually in the card's campus/propertyname pairs
        campuses = obj.campuspropertynamepair_set.filter(campus__in=campuses).values("campus")

        if campuses != None:
            campus = random.choice(campuses)["campus"]
        else:
            return "N/A"

        propertyname = obj.campuspropertynamepair_set.get(campus=campus).propertyname
        
        # Returns in this format because this is how the propertyname is displayed in the game
        if propertyname == "Oaks":
            return "+1" 
        elif propertyname == "Millpoint": 
            return "+2"
        else:
            return "+3"
class SwaptListingReviewSerializer(serializers.ModelSerializer):

    class Meta:
        model = SwaptListingModel
        fields = ('title',
                  'desc',
                  'location',
                  'id',
                  'issue'
                  )
        depth=1 # Allows user to see campus and propertyname pairs from the set

        datatables_always_serialize = ('id')
