from django.db import models
from django.db.models.deletion import CASCADE
from django.utils.html import mark_safe
from accounts.models import SwaptUser
from accounts.models import propManager
from django.utils import timezone
#from django.contrib.auth.models import User
from django.conf import settings
from django.template.defaultfilters import slugify
from django.utils.translation import gettext_lazy as _

User = settings.AUTH_USER_MODEL
def get_image_filename(instance, filename):
    title = instance.title
    slug = slugify(title)
    return f"listings/{slug}-{filename}"

#Inventory Listing Tag
class InventoryListingTag(models.Model):
    name = models.CharField(
        max_length=100
    )
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    class Meta:
        verbose_name_plural='1: Inventory Listing Tags'
    def __str__(self) -> str:
        return self.name
    
class InventoryListingManager(models.Manager):
    # Only shows the user rejected listings within last 30 days or listings from other stages
    # This is so that when listings are >= 30 days old, but daily cleansing hasn't run yet,
    # user still can't see those listings
    def get_queryset(self):
        return super().get_queryset().filter(
            publishing_date__gte=timezone.now()-timezone.timedelta(days=30), stage=3
        ) | super().get_queryset().filter(
            stage__in=[1,2,4,5]
        )
    
# Banner
class Banner(models.Model):
    img=models.ImageField(upload_to="banner_imgs/")
    alt_text=models.CharField(max_length=300)

    class Meta:
        verbose_name_plural='0: Image Banners'

    def image_tag(self):
        return mark_safe('<img src="%s" width="100" />' % (self.img.url))

    def __str__(self):
        return self.alt_text

# Category
class Category(models.Model):
    title=models.CharField(max_length=100)
    image=models.ImageField(upload_to="cat_imgs/")

    class Meta:
        verbose_name_plural='7. Swapt Listing Categories'

    def image_tag(self):
        return mark_safe('<img src="%s" width="50" height="50" />' % (self.image.url))

    def __str__(self):
        return self.title

# Brand
class Brand(models.Model):
    title=models.CharField(max_length=100)
    image=models.ImageField(upload_to="brand_imgs/")

    class Meta:
        verbose_name_plural='8. Swapt Listing Brands'

    def __str__(self):
        return self.title

# Color
class Color(models.Model):
    title=models.CharField(max_length=100)
    color_code=models.CharField(max_length=100)

    class Meta:
        verbose_name_plural='2. Inventory Item Colors'

    def color_bg(self):
        return mark_safe('<div style="width:30px; height:30px; background-color:%s"></div>' % (self.color_code))

    def __str__(self):
        return self.title

# Dimension
class Dimension(models.Model):
    title=models.CharField(max_length=100)

    class Meta:
        verbose_name_plural='3. Inventory Item Dimensions'

    def __str__(self):
        return self.title


# InventoryListing Model
class InventoryListing(models.Model):
    PICKUP_CHOICES = [
        (1, 'Public Pickup'),
        (2, 'Door Pickup'),
    ]
    APPROVAL_STAGES = [
        (1, 'Under Review'),
        (2, 'Approved'),
        (3, 'Rejected'),
        (4, 'Reported'),
        (5, 'Closed'),
    ]
    SELLING_STAGES = [
        (1, 'Available'),
        (2, 'Pending'),
        (3, 'Sold'),
    ]
    CATEGORY_CHOICES = [
        ('Bedroom Furniture', 'Bedroom Furniture'),
        ('Dining Room Furniture', 'Dining Room Furniture'),
        ('Living Room Furniture', 'Living Room Furniture'),
        ('Office Furniture', 'Office Furniture'),
        ('Bathroom Furniture', 'Bathroom Furniture'),
        ('Outdoor Furniture', 'Outdoor Furniture'),
        ('Other Furniture', 'Other Furniture'),
    ]
    CONDITION_CHOICES = [
        ('New', 'New'),
        ('Used - Like New', 'Used - Like New'),
        ('Used - Decent', 'Used - Decent'),
        ('Used - Fair', 'Used - Fair'),
    ]
    DELIVERYMETHOD_CHOICES = [
        (1, 'Local Pickup'),
        (2, 'Swapt Delivery'),
    ]
    COLOR_CHOICES = [
        ('Beige', 'Beige'),
        ('Black', 'Black'),
        ('Blue', 'Blue'),
        ('Brown', 'Brown'),
        ('Clear', 'Clear'),
        ('Gold', 'Gold'),
        ('Gray', 'Gray'),
        ('Green', 'Green'),
        ('Multicolor', 'Multicolor'),
        ('Orange', 'Orange'),
        ('Pink', 'Pink'),
        ('Purple', 'Purple'),
        ('Red', 'Red'),
        ('Silver', 'Silver'),
        ('White', 'White'),
        ('Yellow', 'Yellow'),
        ('Wood', 'Wood'),
    ]
    LOCATION_CHOICES = [
        ('Elon, NC', 'Elon NC'),
        ('Burlington, NC', 'Burlington, NC'),
    ]
    swaptuser = models.ForeignKey(SwaptUser, on_delete=CASCADE, null=True)
    title=models.CharField(max_length=200)
    slug=models.CharField(max_length=400)
    detail=models.TextField()
    specs=models.TextField()
    status=models.BooleanField(default=True)
    is_featured=models.BooleanField(default=False)
    preloaded_category = models.CharField(
        max_length=50,
        choices=CATEGORY_CHOICES,
        null=True
    )
    condition = models.CharField(max_length=50,choices=CONDITION_CHOICES , null=True)
    #mandatory location details
    location = models.CharField(
        max_length=30,
        choices=LOCATION_CHOICES,
        null=True
    )
    delivery = models.PositiveSmallIntegerField(choices=DELIVERYMETHOD_CHOICES, null=True)
    pickupmethod = models.PositiveSmallIntegerField(choices= PICKUP_CHOICES, null=True)
    #fields used to review listingscts
    stage = models.PositiveSmallIntegerField(choices=APPROVAL_STAGES, null=True)
    selling_stage = models.PositiveSmallIntegerField(choices=SELLING_STAGES, null=True)
    confirmed = models.BooleanField(default=False)
    issue = models.CharField(max_length=250, blank=True, null=True) # Currently only using one field for both rejected and reported issues
    #optional
    quantity = models.IntegerField(default=1, null=True)
    tags = models.ManyToManyField(InventoryListingTag, blank=True)
    publishing_date = models.DateTimeField(
        default=timezone.now,
        blank=True,
    )
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    class Meta:
        verbose_name_plural='4. Inventory Items'

    def __str__(self):
        return self.title


# Order
status_choice=(
        ('process','In Process'),
        ('shipped','Shipped'),
        ('delivered','Delivered'),
    )
class CartOrder(models.Model):
    user=models.ForeignKey(User,on_delete=models.CASCADE)
    total_amt=models.FloatField()
    paid_status=models.BooleanField(default=False)
    order_dt=models.DateTimeField(auto_now_add=True)
    order_status=models.CharField(choices=status_choice,default='process',max_length=150)

    class Meta:
        verbose_name_plural='Swapt Orders'

# OrderItems
class CartOrderItems(models.Model):
    order=models.ForeignKey(CartOrder,on_delete=models.CASCADE)
    invoice_no=models.CharField(max_length=150)
    item=models.CharField(max_length=150)
    image=models.CharField(max_length=200)
    qty=models.IntegerField()
    price=models.FloatField()
    total=models.FloatField()

    class Meta:
        verbose_name_plural='Swapt Order Items'

    def image_tag(self):
        return mark_safe('<img src="/media/%s" width="50" height="50" />' % (self.image))

# AddressBook
class UserAddressBook(models.Model):
    user=models.ForeignKey(User,on_delete=models.CASCADE)
    propertyname=models.CharField(max_length=50,null=True)
    address=models.TextField()
    status=models.BooleanField(default=False)

    class Meta:
        verbose_name_plural='User: AddressBook'

class InventoryCampusPropertyNamePair(models.Model):
    listings = models.ManyToManyField('InventoryListing')
    CAMPUS_CHOICES = [
        ('Elon', 'Elon'),
        ('UMD', 'UMD'),
        ('UNCG', 'UNCG')
    ]
    PROPERTYNAME_CHOICES = [
        ('Oaks', 'Oaks'),
        ('MillPoint', 'MillPoint'),
        ('OakHill', 'OakHill'),
    ]
    campus = models.CharField(
        max_length=30,
        choices=CAMPUS_CHOICES,
        default='Elon'
    )
    propertyname = models.CharField(
        max_length=30,
        choices=PROPERTYNAME_CHOICES,
    )
    confirmed = models.BooleanField(default=False)  
class InventoryListingPrice(models.Model):
    listing = models.ForeignKey(InventoryListing, on_delete=models.CASCADE)
    price = models.DecimalField(decimal_places=2, max_digits=10)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self) -> str:
        return f"{self.listing.title} {self.price}"  

#SWAPTLISTINGS
class SwaptListingTag(models.Model):
    name = models.CharField(
        max_length=100, help_text=_("Designates the name of the tag.")
    )
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self) -> str:
        return self.name
    
class SwaptPropertyManager(models.Model):
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    companyname = models.CharField(max_length=40, default="company")
    email = models.EmailField(unique= True)
    propertyname = models.CharField(max_length=30)

    def __str__(self):
        return "%s %s" % (self.first_name, self.last_name)

#save customer order for future reference #TBD
class SwaptListingTransactionRef(models.Model):
    email = models.EmailField(max_length=254)
    paid = models.BooleanField(default="False")
    amount = models.IntegerField(default=0)
    description = models.CharField(default=None,max_length=800)
    def __str__(self):
        return self.email 

class SwaptPaymentHistory(models.Model):
    PENDING = "P"
    COMPLETED = "C"
    FAILED = "F"

    STATUS_CHOICES = (
        (PENDING, _("pending")),
        (COMPLETED, _("completed")),
        (FAILED, _("failed")),
    )

    email = models.EmailField(unique=True)
    listing = models.ForeignKey(InventoryListing, on_delete=models.CASCADE)
    payment_status = models.CharField(
        max_length=1, choices=STATUS_CHOICES, default=PENDING
    )
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.listing.title
    
class SwaptListingManager(models.Manager):
    # Only shows the user rejected listings within last 30 days or listings from other stages
    # This is so that when listings are >= 30 days old, but daily cleansing hasn't run yet,
    # user still can't see those listings
    def get_queryset(self):
        return super().get_queryset().filter(
            publishing_date__gte=timezone.now()-timezone.timedelta(days=30), stage=3
        ) | super().get_queryset().filter(
            stage__in=[1,2,4,5]
        )
class SwaptListingModel(models.Model):
    APPROVAL_STAGES = [
        (1, 'Under Review'),
        (2, 'Approved'),
        (3, 'Rejected'),
        (4, 'Reported'),
        (5, 'Closed'),
    ]
    SELLING_STAGES = [
        (1, 'Available'),
        (2, 'Pending'),
        (3, 'Sold'),
    ]
    CATEGORY_CHOICES = [
        ('Bedroom Furniture', 'Bedroom Furniture'),
        ('Dining Room Furniture', 'Dining Room Furniture'),
        ('Living Room Furniture', 'Living Room Furniture'),
        ('Office Furniture', 'Office Furniture'),
        ('Bathroom Furniture', 'Bathroom Furniture'),
        ('Outdoor Furniture', 'Outdoor Furniture'),
        ('Other Furniture', 'Other Furniture'),
    ]
    CONDITION_CHOICES = [
        ('New', 'New'),
        ('Used - Like New', 'Used - Like New'),
        ('Used - Decent', 'Used - Decent'),
        ('Used - Fair', 'Used - Fair'),
    ]
    DELIVERYMETHOD_CHOICES = [
        (1, 'Local Pickup'),
        (2, 'Swapt Delivery'),
    ]
    COLOR_CHOICES = [
        ('Beige', 'Beige'),
        ('Black', 'Black'),
        ('Blue', 'Blue'),
        ('Brown', 'Brown'),
        ('Clear', 'Clear'),
        ('Gold', 'Gold'),
        ('Gray', 'Gray'),
        ('Green', 'Green'),
        ('Multicolor', 'Multicolor'),
        ('Orange', 'Orange'),
        ('Pink', 'Pink'),
        ('Purple', 'Purple'),
        ('Red', 'Red'),
        ('Silver', 'Silver'),
        ('White', 'White'),
        ('Yellow', 'Yellow'),
        ('Wood', 'Wood'),
    ]
    LOCATION_CHOICES = [
        ('ElonNC', 'ElonNC'),
        ('BurlingtonNC', 'BurlingtonNC'),
    ]
    #unique fields for swaptlistingsmodel
    propertymanager = models.ForeignKey(propManager, on_delete=CASCADE, null=True)
    #field identifying seller who posted listing
    swaptuser = models.ForeignKey(SwaptUser, on_delete=CASCADE, null=True)
    listings = models.ManyToManyField(
        'InventoryListing', related_name='order', blank=True)
    name = models.CharField(max_length=50, blank=True)
    email = models.CharField(max_length=50, blank=True)
    street = models.CharField(max_length=50, blank=True)
    city = models.CharField(max_length=50, blank=True)
    state = models.CharField(max_length=15, blank=True)
    zip_code = models.IntegerField(blank=True, null=True)
    is_paid = models.BooleanField(default=False)
    is_shipped = models.BooleanField(default=False)
    #mandatory fields required with user input
    detail=models.TextField(default="detail")
    slug=models.CharField(max_length=400, default=4)
    specs=models.TextField(default="nospecs")
    status=models.BooleanField(default=True)
    category=models.ForeignKey(Category,on_delete=models.CASCADE, default=1)
    brand=models.ForeignKey(Brand,on_delete=models.CASCADE, default=1)
    title = models.CharField(max_length=250)
    thumbnail = models.ImageField(upload_to=get_image_filename, blank=True)
    preloaded_category = models.CharField(
        max_length=50,
        choices=CATEGORY_CHOICES,
        null=True
    )
    condition = models.CharField(max_length=50,choices=CONDITION_CHOICES , null=True)
    #mandatory location details
    location = models.CharField(
        max_length=30,
        choices=LOCATION_CHOICES,
        null=True
    )
    delivery = models.PositiveSmallIntegerField(choices=DELIVERYMETHOD_CHOICES, null=True)
    
    #fields used to review listings
    stage = models.PositiveSmallIntegerField(choices=APPROVAL_STAGES, null=True)
    selling_stage = models.PositiveSmallIntegerField(choices=SELLING_STAGES, null=True)
    confirmed = models.BooleanField(default=False)
    issue = models.CharField(max_length=250, blank=True, null=True) # Currently only using one field for both rejected and reported issues
    #optional
    quantity = models.IntegerField(default=1)
    tags = models.ManyToManyField(SwaptListingTag, blank=True)
    
    #field to display listings in featured page 
    is_featured=models.BooleanField(default=False)

    #date/time fields
    move_out_date = models.DateTimeField(auto_now_add=False, default=timezone.now,)
    publishing_date = models.DateTimeField(
        default=timezone.now,
        blank=True,
    )
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ("-created_at",)
        verbose_name_plural='6. Swapt Listings'
  
    objects = SwaptListingManager() # Using manager above for reasons in comment

    # def __str__(self):
    #     return self.name
    def save(self, *args, **kwargs):
        super(SwaptListingModel, self).save(*args, **kwargs) 

class Swapt_Prices(models.Model):
    swapt_bundle_listing = models.ForeignKey(SwaptListingModel, on_delete=models.CASCADE)
    price = models.DecimalField(decimal_places=2, max_digits=10)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self) -> str:
        return f"{self.swapt_bundle_listing.title} {self.price}" 

class SwaptCampusPropertyNamePair(models.Model):
    listings = models.ManyToManyField('SwaptListingModel')
    CAMPUS_CHOICES = [
        ('Elon', 'Elon'),
        ('UMD', 'UMD'),
        ('UNCG', 'UNCG')
    ]
    PROPERTYNAME_CHOICES = [
        ('Oaks', 'Oaks'),
        ('MillPoint', 'MillPoint'),
        ('OakHill', 'OakHill'),
    ]
    campus = models.CharField(
        max_length=30,
        choices=CAMPUS_CHOICES,
        default='Elon'
    )
    propertyname = models.CharField(
        max_length=30,
        choices=PROPERTYNAME_CHOICES,
    )
    confirmed = models.BooleanField(default=False)

# InventoryListing Attribute
class ProductAttribute(models.Model):
    product=models.ForeignKey(SwaptListingModel,on_delete=models.CASCADE)
    price=models.PositiveIntegerField(default=0)
    image=models.ImageField(upload_to="product_imgs/",null=True)

    class Meta:
        verbose_name_plural='9. Swapt Listing Item Attributes'

    def __str__(self):
        return self.product.title

    def image_tag(self):
        return mark_safe('<img src="%s" width="50" height="50" />' % (self.image.url))

# InventoryListing Attribute
class InventoryItemAttribute(models.Model):
    product=models.ForeignKey(InventoryListing,on_delete=models.CASCADE)
    color=models.ForeignKey(Color,on_delete=models.CASCADE)
    size=models.ForeignKey(Dimension,on_delete=models.CASCADE)
    price=models.PositiveIntegerField(default=0)
    image=models.ImageField(upload_to="product_imgs/",null=True)

    class Meta:
        verbose_name_plural='5. Inventory Item Attributes'

    def __str__(self):
        return self.product.title

    def image_tag(self):
        return mark_safe('<img src="%s" width="50" height="50" />' % (self.image.url))
# InventoryListing Review
AMOUNT=(
    (1,'1'),
    (2,'2'),
    (3,'3'),
    (4,'4'),
    (5,'5'),
)
class ProductOffers(models.Model):
    user=models.ForeignKey(User,on_delete=models.CASCADE)
    product=models.ForeignKey(SwaptListingModel,on_delete=models.CASCADE)
    offers_text=models.TextField()
    offers_amount=models.CharField(choices=AMOUNT,max_length=150)

    class Meta:
        verbose_name_plural='User: Offers'

    def get_offers_amount(self):
        return self.offers_amount

# WishList
class Wishlist(models.Model):
    user=models.ForeignKey(User,on_delete=models.CASCADE)
    product=models.ForeignKey(SwaptListingModel,on_delete=models.CASCADE)

    class Meta:
        verbose_name_plural='User: Wishlist'
            
    