from django import forms
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm,UserChangeForm
from .models import ProductAttribute, InventoryItemAttribute,ProductOffers,UserAddressBook, SwaptListingModel, InventoryListing
from django.forms import ModelForm

class SignupForm(UserCreationForm):
	class Meta:
		model=User
		fields=('first_name','last_name','email','username','password1','password2')

# Offers Add Form
class OffersAdd(forms.ModelForm):
	class Meta:
		model=ProductOffers
		fields=('offers_message','offers_amount')

# AddressBook Add Form
class AddressBookForm(forms.ModelForm):
	class Meta:
		model=UserAddressBook
		fields=('address','campus', 'propertyname','status')

# ProfileEdit
class ProfileForm(UserChangeForm):
	class Meta:
		model=User
		fields=('first_name','last_name','email','username')

class SwaptListingCreationForm(ModelForm):
    
    # Instead of creating a new model, just using listing model with arbitrary data for required fields
    # Specifically, using title field for commMkt and stage=5 is for commMkt listings
    title = forms.CharField(max_length=250, label="Swapt Listing Title")

    class Meta:
        model = SwaptListingModel
        fields = ("title", "detail", "category", "condition", "move_out_date", "location", "brand", )
    
    def save(self, commit=True):
        self.full_clean() # calls clean function
        listing = SwaptListingModel(stage=2, confirmed=False, selling_stage=1, )
        exclude = ["swaptuser"]

        if commit:
            fields = self.cleaned_data
            listing.title = fields['title']
            listing.detail = fields['detail']
            #listing.listings = fields['listings']
            listing.category = fields['category']
            listing.condition = fields['condition']
            listing.location = fields['location']
            listing.brand = fields['brand']
            listing.move_out_date = fields['move_out_date']
        
        return listing
        

class InventoryListingCreationForm(ModelForm):
    
    # Instead of creating a new model, just using listing model with arbitrary data for required fields
    # Specifically, using title field for commMkt and stage=5 is for commMkt listings
    title = forms.CharField(max_length=250, label="InventoryListing Title")

    class Meta:
        model = InventoryListing
        fields = ("title", "detail", "category", "condition", )
    
    def save(self, commit=True):
        self.full_clean() # calls clean function
        listing = InventoryListing(stage=2, confirmed=False, selling_stage=1, )
        exclude = ["swaptuser"]

        if commit:
            fields = self.cleaned_data
            listing.title = fields['title']
            listing.detail = fields['detail']
            listing.category = fields['category']
            listing.condition = fields['condition']
        
        return listing
    
class InventoryListingAttributeCreationForm(ModelForm):
    
    # Instead of creating a new model, just using listing model with arbitrary data for required fields
    # Specifically, using title field for commMkt and stage=5 is for commMkt listings

    class Meta:
        model = InventoryItemAttribute
        fields = ("product", "color", "size", "price", "image" )
    
class SwaptListingAttributeCreationForm(ModelForm):
    
    # Instead of creating a new model, just using listing model with arbitrary data for required fields
    # Specifically, using title field for commMkt and stage=5 is for commMkt listings

    class Meta:
        model = ProductAttribute
        fields = ("product", "price", "image" )
    
class ListingEditForm(ModelForm):
    CAMPUS_CHOICES = [
        ('', ''), # This is for the blank option
        ('Elon', 'Elon'),
        ('UMD', 'UMD'),
        ('UNCG', 'UNCG'),
    ]
    PROPERTYNAME_CHOICES = [
        ('', ''), # This is for the blank option
        ('Oaks', 'Oaks'),
        ('MillPoint', 'MillPoint'),
        ('OakHill', 'OakHill'),
    ]
    APPROVAL_STAGES = [
        ('', ''),
        (1, 'Under Review'),
        (2, 'Approved'),
        (3, 'Rejected'),
        (4, 'Reported'),
    ]

   
    stage = forms.ChoiceField(choices=APPROVAL_STAGES, label="Stage", required=False)

    # Added the campus and propertyname fields separately since they are part of a related object instead of the InventoryListing object itself
    campusOne = forms.ChoiceField(choices=CAMPUS_CHOICES, label="Campus Level 1", required=True)
    propertynameOne = forms.ChoiceField(choices=PROPERTYNAME_CHOICES, label="Propertyname Level 1", required=True)

    campusTwo = forms.ChoiceField(choices=CAMPUS_CHOICES, label="Campus Level 2",  required=False)
    propertynameTwo = forms.ChoiceField(choices=PROPERTYNAME_CHOICES, label="Propertyname Level 2", required=False)

    campusThree = forms.ChoiceField(choices=CAMPUS_CHOICES, label="Campus Level 3",  required=False)
    propertynameThree = forms.ChoiceField(choices=PROPERTYNAME_CHOICES, label="Propertyname Level 3", required=False)
    
    class Meta:
        model = SwaptListingModel
        fields = ("title", "detail", "location")

    def clean(self):
        data = self.cleaned_data
        errors =[]

        # Deals with one part of the pair (i.e. campus or propertyname) being left blank when the other is filled in
        # Can't have campus/propertyname pair without campus or without propertyname
        if data['campusOne'] == None and data['propertynameOne'] != "":
            errors.append(forms.ValidationError("Campus level one has no value even though propertyname level one does. Either both must have a value or neither."))
        if data['campusOne'] != None and data['propertynameOne'] == "":
            errors.append(forms.ValidationError("Propertyname level one has no value even though campus level one does. Either both must have a value or neither."))
        if data['campusTwo'] == None and data['propertynameTwo'] != "":
            errors.append(forms.ValidationError("Campus  level two has no value even though propertyname level two does. Either both must have a value or neither."))
        if data['campusTwo'] != None and data['propertynameTwo'] == "":
            errors.append(forms.ValidationError("Propertyname level two has no value even though campus level two does. Either both must have a value or neither."))
        if data['campusThree'] == None and data['propertynameThree'] != "":
            errors.append(forms.ValidationError("Campus level three has no value even though propertyname level three does. Either both must have a value or neither."))
        if data['campusThree'] != None and data['propertynameThree'] == "":
            errors.append(forms.ValidationError("Propertyname level three has no value even though campus level one does. Either both must have a value or neither."))
        
        # Deals with more than one pair being the same
        if data['campusOne'] == data['campusTwo'] and data['propertynameOne'] == data['propertynameTwo']:
            errors.append(forms.ValidationError("The first and second campus/propertyname pairs are identical"))
        if data['campusOne'] == data['campusThree'] and data['propertynameOne'] == data['propertynameThree']:
            errors.append(forms.ValidationError("The first and third campus/propertyname pairs are identical"))   
        if data['campusTwo'] == data['campusThree'] and data['propertynameTwo'] == data['propertynameThree'] and data['campusTwo'] != "" and data['propertynameTwo'] !="":
            errors.append(forms.ValidationError("The second and third campus/propertyname pairs are identical")) 

        # Raises all relevant errors
        if errors:
            raise forms.ValidationError(errors)

        return data
        

    def save(self, commit=True):
        self.full_clean() # calls clean function
        listing = super().save(commit=False)
        
        if commit:
            fields = self.cleaned_data
            
            #

            # Add new pairs
            # NOTE: if first pair and third pair are filled in, but second isn't, then when displayed on the site, the third pair filled in on 
            # the form will act like the second pair
            firstPair =  UserAddressBook.objects.get_or_create(
                campus=fields['campusOne'],
                propertyname=fields['propertynameOne']
            )
            firstPair[0].listings.add(listing)
            
            # Need to make sure these fields are filled in before adding a pair since they're optional (same goes for pair 3)
            if fields['campusTwo'] != None and fields['propertynameTwo'] != "":
                secondPair =  UserAddressBook.objects.get_or_create(
                    campus=fields['campusTwo'],
                    propertyname=fields['propertynameTwo']
                )
                secondPair[0].listings.add(listing)

            if fields['campusThree'] != None and fields['propertynameThree'] != "":
                thirdPair =  UserAddressBook.objects.get_or_create(
                    campus=fields['campusThree'],
                    propertyname=fields['propertynameThree']
                )
                thirdPair[0].listings.add(listing)
            
        return listing
    

# Only field is issue (to show Swapt User what's wrong)
class ListingRejectForm(ModelForm):
    class Meta:
        model = SwaptListingModel
        fields = ("issue", )

    def save(self, commit=True):
        self.full_clean()
        listing = super().save(commit=False)
        listing.stage = 3 # Changes stage to rejected
        return listing
class InventoryListingEditForm(ModelForm):
    CAMPUS_CHOICES = [
        ('', ''), # This is for the blank option
        ('Elon', 'Elon'),
        ('UMD', 'UMD'),
        ('UNCG', 'UNCG'),
    ]
    PROPERTYNAME_CHOICES = [
        ('', ''), # This is for the blank option
        ('Oaks', 'Oaks'),
        ('MillPoint', 'MillPoint'),
        ('OakHill', 'OakHill'),
    ]
    APPROVAL_STAGES = [
        ('', ''),
        (1, 'Under Review'),
        (2, 'Approved'),
        (3, 'Rejected'),
        (4, 'Reported'),
    ]

   
    stage = forms.ChoiceField(choices=APPROVAL_STAGES, label="Stage", required=False)
    image = forms.ImageField()
    price = forms.IntegerField()
    # Added the campus and propertyname fields separately since they are part of a related object instead of the InventoryListing object itself
    campusOne = forms.ChoiceField(choices=CAMPUS_CHOICES, label="Campus Level 1", required=True)
    propertynameOne = forms.ChoiceField(choices=PROPERTYNAME_CHOICES, label="Propertyname Level 1", required=True)

    campusTwo = forms.ChoiceField(choices=CAMPUS_CHOICES, label="Campus Level 2",  required=False)
    propertynameTwo = forms.ChoiceField(choices=PROPERTYNAME_CHOICES, label="Propertyname Level 2", required=False)

    campusThree = forms.ChoiceField(choices=CAMPUS_CHOICES, label="Campus Level 3",  required=False)
    propertynameThree = forms.ChoiceField(choices=PROPERTYNAME_CHOICES, label="Propertyname Level 3", required=False)
    
    class Meta:
        model = InventoryListing
        fields = ("title", "detail", "category", "condition",)

    def clean(self):
        data = self.cleaned_data
        errors =[]

        # Deals with one part of the pair (i.e. campus or propertyname) being left blank when the other is filled in
        # Can't have campus/propertyname pair without campus or without propertyname
        if data['campusOne'] == None and data['propertynameOne'] != "":
            errors.append(forms.ValidationError("Campus level one has no value even though propertyname level one does. Either both must have a value or neither."))
        if data['campusOne'] != None and data['propertynameOne'] == "":
            errors.append(forms.ValidationError("Propertyname level one has no value even though campus level one does. Either both must have a value or neither."))
        if data['campusTwo'] == None and data['propertynameTwo'] != "":
            errors.append(forms.ValidationError("Campus  level two has no value even though propertyname level two does. Either both must have a value or neither."))
        if data['campusTwo'] != None and data['propertynameTwo'] == "":
            errors.append(forms.ValidationError("Propertyname level two has no value even though campus level two does. Either both must have a value or neither."))
        if data['campusThree'] == None and data['propertynameThree'] != "":
            errors.append(forms.ValidationError("Campus level three has no value even though propertyname level three does. Either both must have a value or neither."))
        if data['campusThree'] != None and data['propertynameThree'] == "":
            errors.append(forms.ValidationError("Propertyname level three has no value even though campus level one does. Either both must have a value or neither."))
        
        # Deals with more than one pair being the same
        if data['campusOne'] == data['campusTwo'] and data['propertynameOne'] == data['propertynameTwo']:
            errors.append(forms.ValidationError("The first and second campus/propertyname pairs are identical"))
        if data['campusOne'] == data['campusThree'] and data['propertynameOne'] == data['propertynameThree']:
            errors.append(forms.ValidationError("The first and third campus/propertyname pairs are identical"))   
        if data['campusTwo'] == data['campusThree'] and data['propertynameTwo'] == data['propertynameThree'] and data['campusTwo'] != "" and data['propertynameTwo'] !="":
            errors.append(forms.ValidationError("The second and third campus/propertyname pairs are identical")) 

        # Raises all relevant errors
        if errors:
            raise forms.ValidationError(errors)

        return data
        

    def save(self, commit=True):
        self.full_clean() # calls clean function
        listing = super().save(commit=False)
        
        if commit:
            fields = self.cleaned_data
            
            

            # Add new pairs
            # NOTE: if first pair and third pair are filled in, but second isn't, then when displayed on the site, the third pair filled in on 
            # the form will act like the second pair
            firstPair =  UserAddressBook.objects.get_or_create(
                campus=fields['campusOne'],
                propertyname=fields['propertynameOne']
            )
            firstPair[0].listings.add(listing)
            
            # Need to make sure these fields are filled in before adding a pair since they're optional (same goes for pair 3)
            if fields['campusTwo'] != None and fields['propertynameTwo'] != "":
                secondPair =  UserAddressBook.objects.get_or_create(
                    campus=fields['campusTwo'],
                    propertyname=fields['propertynameTwo']
                )
                secondPair[0].listings.add(listing)

            if fields['campusThree'] != None and fields['propertynameThree'] != "":
                thirdPair =  UserAddressBook.objects.get_or_create(
                    campus=fields['campusThree'],
                    propertyname=fields['propertynameThree']
                )
                thirdPair[0].listings.add(listing)
            
        return listing

# Only field is issue (to show Swapt User what's wrong)
class InventoryListingRejectForm(ModelForm):
    class Meta:
        model = InventoryListing
        fields = ("issue", )

    def save(self, commit=True):
        self.full_clean()
        listing = super().save(commit=False)
        listing.stage = 3 # Changes stage to rejected
        return listing
                
