from django import forms
from django.db.models.base import Model
from django.forms import ModelForm

from .models import Listing, GradeDifficultyPair, Price

# For Swapt admin to create commMkt listings
class ListingCreationForm(ModelForm):
    
    # Instead of creating a new model, just using listing model with arbitrary data for required fields
    # Specifically, using title field for commMkt and stage=5 is for commMkt listings
    title = forms.CharField(max_length=250, label="Listing Title")

    class Meta:
        model = Listing
        fields = ("title", "description", "location", "category", "condition", "itemPrice")
        # "grade", "difficulty"
    
    def save(self, commit=True):
        self.full_clean() # calls clean function
        listing = Listing(stage=5)
        
        if commit:
            fields = self.cleaned_data
            listing.title = fields['title']
        
        return listing

class CommMktListingCreationForm(ModelForm):
    
    # Instead of creating a new model, just using listing model with arbitrary data for required fields
    # Specifically, using title field for commMkt and stage=5 is for commMkt listings
    title = forms.CharField(max_length=250, label="Listing Title")

    class Meta:
        model = Listing
        fields = ( "thumbnail", "name", "itemPrice", "category", "condition", "desc", "tags", "location",)
        # "grade", "difficulty"
    
    def save(self, commit=True):
        self.full_clean() # calls clean function
        listing = Listing(stage=5)
        
        if commit:
            fields = self.cleaned_data
            listing.name = fields['name']
        
        return listing

class ListingEditForm(ModelForm):

    DIFFICULTY_CHOICES = [
        ('', ''), # This is for the blank option
        ('Oaks UMD', 'Oaks UMD'),
        ('Park Place UMD', 'Park Place UMD'),
        ('Mill Point UMD', 'Mill Point UMD'),
    ]

    APPROVAL_STAGES = [
        ('', ''),
        (1, 'Under Review'),
        (2, 'Approved'),
        (3, 'Rejected'),
        (4, 'Reported'),

    ]

   
    stage = forms.ChoiceField(choices=APPROVAL_STAGES, label="Stage", required=False)

    # Added the grade and difficulty fields separately since they are part of a related object instead of the Listing object itself
    gradeOne = forms.IntegerField(min_value=1, max_value=12, label="Grade Level 1", required=True)
    difficultyOne = forms.ChoiceField(choices=DIFFICULTY_CHOICES, label="Difficulty Level 1", required=True)

    gradeTwo = forms.IntegerField(min_value=1, max_value=12, label="Grade Level 2", required=False)
    difficultyTwo = forms.ChoiceField(choices=DIFFICULTY_CHOICES, label="Difficulty Level 2", required=False)

    gradeThree = forms.IntegerField(min_value=1, max_value=12, label="Grade Level 3", required=False)
    difficultyThree = forms.ChoiceField(choices=DIFFICULTY_CHOICES, label="Difficulty Level 3", required=False)
    
    class Meta:
        model = Listing
        fields = ("title", "description", "location")

    def clean(self):
        data = self.cleaned_data
        errors =[]

        # Deals with one part of the pair (i.e. grade or difficulty) being left blank when the other is filled in
        # Can't have grade/difficulty pair without grade or without difficulty
        if data['gradeOne'] == None and data['difficultyOne'] != "":
            errors.append(forms.ValidationError("Grade level one has no value even though difficulty level one does. Either both must have a value or neither."))
        if data['gradeOne'] != None and data['difficultyOne'] == "":
            errors.append(forms.ValidationError("Difficulty level one has no value even though grade level one does. Either both must have a value or neither."))
        if data['gradeTwo'] == None and data['difficultyTwo'] != "":
            errors.append(forms.ValidationError("Grade level two has no value even though difficulty level two does. Either both must have a value or neither."))
        if data['gradeTwo'] != None and data['difficultyTwo'] == "":
            errors.append(forms.ValidationError("Difficulty level two has no value even though grade level two does. Either both must have a value or neither."))
        if data['gradeThree'] == None and data['difficultyThree'] != "":
            errors.append(forms.ValidationError("Grade level three has no value even though difficulty level three does. Either both must have a value or neither."))
        if data['gradeThree'] != None and data['difficultyThree'] == "":
            errors.append(forms.ValidationError("Difficulty level three has no value even though grade level one does. Either both must have a value or neither."))
        
        # Deals with more than one pair being the same
        if data['gradeOne'] == data['gradeTwo'] and data['difficultyOne'] == data['difficultyTwo']:
            errors.append(forms.ValidationError("The first and second grade/difficulty pairs are identical"))
        if data['gradeOne'] == data['gradeThree'] and data['difficultyOne'] == data['difficultyThree']:
            errors.append(forms.ValidationError("The first and third grade/difficulty pairs are identical"))   
        if data['gradeTwo'] == data['gradeThree'] and data['difficultyTwo'] == data['difficultyThree'] and data['gradeTwo'] != "" and data['difficultyTwo'] !="":
            errors.append(forms.ValidationError("The second and third grade/difficulty pairs are identical")) 

        # Raises all relevant errors
        if errors:
            raise forms.ValidationError(errors)

        return data
        

    def save(self, commit=True):
        self.full_clean() # calls clean function
        listing = super().save(commit=False)
        pairs = listing.gradedifficultypair_set.all()
        
        if commit:
            fields = self.cleaned_data
            
            # Remove old pairs
            for pair in pairs:
                pair.listings.remove(listing)

            # Add new pairs
            # NOTE: if first pair and third pair are filled in, but second isn't, then when displayed on the site, the third pair filled in on 
            # the form will act like the second pair
            firstPair = GradeDifficultyPair.objects.get_or_create(
                grade=fields['gradeOne'],
                difficulty=fields['difficultyOne']
            )
            firstPair[0].listings.add(listing)
            
            # Need to make sure these fields are filled in before adding a pair since they're optional (same goes for pair 3)
            if fields['gradeTwo'] != None and fields['difficultyTwo'] != "":
                secondPair = GradeDifficultyPair.objects.get_or_create(
                    grade=fields['gradeTwo'],
                    difficulty=fields['difficultyTwo']
                )
                secondPair[0].listings.add(listing)

            if fields['gradeThree'] != None and fields['difficultyThree'] != "":
                thirdPair = GradeDifficultyPair.objects.get_or_create(
                    grade=fields['gradeThree'],
                    difficulty=fields['difficultyThree']
                )
                thirdPair[0].listings.add(listing)
            
        return listing

# Only field is issue (to show Swapt User what's wrong)
class ListingRejectForm(ModelForm):
    class Meta:
        model = Listing
        fields = ("issue", )

    def save(self, commit=True):
        self.full_clean()
        listing = super().save(commit=False)
        listing.stage = 3 # Changes stage to rejected
        return listing
        