from django import forms
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm,UserChangeForm
from .models import ProductAttribute, Brand, Category, InventoryItemAttribute,ProductOffers,UserAddressBook, SwaptListingModel, InventoryListing
from django.forms import ModelForm

class SignupForm(UserCreationForm):
	class Meta:
		model=User
		fields=('first_name','last_name','email','username','password1','password2')

# Offers Add Form
class OffersAdd(forms.ModelForm):
	class Meta:
		model=ProductOffers
		fields=('message','amount')

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
        fields = ("title", "detail", "category", "brand", "condition", "move_out_date", "location",  )
    
    def save(self, commit=True):
        self.full_clean() # calls clean function
        listing = SwaptListingModel(stage=2, confirmed=False, selling_stage=1, )
        exclude = ["swaptuser"]

        if commit:
            fields = self.cleaned_data
            listing.title = fields['title']
            listing.detail = fields['detail']
            #listing.listings = fields['listings']
            listing.condition = fields['condition']
            listing.location = fields['location']
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

   
    #stage = forms.ChoiceField(choices=APPROVAL_STAGES, label="Stage", required=False)
    
    class Meta:
        model = SwaptListingModel
        fields = ("title", "detail", "category", "brand", "condition", "move_out_date", "location",)

    def clean(self):
        data = self.cleaned_data
        errors =[]

        # Raises all relevant errors
        if errors:
            raise forms.ValidationError(errors)

        return data
        

    def save(self, commit=True):
        self.full_clean() # calls clean function
        listing = super().save(commit=False)
        
        if commit:
            fields = self.cleaned_data
            
            
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

    #stage = forms.ChoiceField(choices=APPROVAL_STAGES, label="Stage", required=False)
    
    class Meta:
        model = InventoryListing
        fields = ("title", "detail", "category", "condition", )

    def clean(self):
        data = self.cleaned_data
        errors =[]

        # Raises all relevant errors
        if errors:
            raise forms.ValidationError(errors)

        return data
        

    def save(self, commit=True):
        self.full_clean() # calls clean function
        listing = super().save(commit=False)
        
        if commit:
            fields = self.cleaned_data
            
            
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
                
