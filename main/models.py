from django.db import models
from django.db.models.deletion import CASCADE
from autoslug import AutoSlugField
from django.utils.html import mark_safe
from accounts.models import SwaptUser
from accounts.models import propManager
from django.utils import timezone
from datetime import date
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
        verbose_name_plural='1A: Inventory Listing Tags'
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
        verbose_name_plural='2C: Swapt Listing Categories'

    def image_tag(self):
        return mark_safe('<img src="%s" width="50" height="50" />' % (self.image.url))

    def __str__(self):
        return self.title

# Brand
class Brand(models.Model):
    title=models.CharField(max_length=100)
    image=models.ImageField(upload_to="brand_imgs/")

    class Meta:
        verbose_name_plural='2B: Swapt Listing Brands'

    def __str__(self):
        return self.title

# Color
class Color(models.Model):
    title=models.CharField(max_length=100)
    color_code=models.CharField(max_length=100)

    class Meta:
        verbose_name_plural='1B: Inventory Item Colors'

    def color_bg(self):
        return mark_safe('<div style="width:30px; height:30px; background-color:%s"></div>' % (self.color_code))

    def __str__(self):
        return self.title

# Dimension
class Dimension(models.Model):
    title=models.CharField(max_length=100)

    class Meta:
        verbose_name_plural='1C: Inventory Item Dimensions'

    def __str__(self):
        return self.title


# InventoryListing Model
class InventoryListing(models.Model):
    APPROVAL_STAGES = [
        (1, 'Draft'),
        (2, 'Published'),
        (3, 'Unpublished'),
        (4, 'Reported'),
        (5, 'Closed'),
    ]
    SELLING_STAGES = [
        ('Available', 'Available'),
        ('Pending', 'Pending'),
        ('Sold', 'Sold'),
    ]
    DELIVERYMETHOD_CHOICES = [
        (1, 'Local Pickup'),
        (2, 'Swapt Delivery'),
    ]
    CATEGORY_CHOICES = [
        ('Living Room Furniture', 'Living Room Furniture'),
        ('Entryway Furniture', 'Entryway Furniture'),
        ('Kitchen Furniture', 'Kitchen Furniture'),
        ('Dining Room Furniture', 'Dining Room Furniture'),
        ('Office Furniture', 'Office Furniture'),
        ('Bedroom Furniture', 'Bedroom Furniture'),
        ('Bathroom Furniture', 'Bathroom Furniture'),
        ('Laundry Furniture', 'Laundry Furniture'),
        ('Storage Room Furniture', 'Storage Room Furniture'),
        ('Outdoor Furniture', 'Outdoor Furniture'),
        ('Other Furniture', 'Other Furniture')
    ]
    CONDITION_CHOICES = [
        ('New', 'New'),
        ('Used - Like New', 'Used - Like New'),
        ('Used - Decent', 'Used - Decent'),
        ('Used - Fair', 'Used - Fair'),
    ]
    swaptuser = models.ForeignKey(SwaptUser, on_delete=CASCADE, null=True, default = None)
    title=models.CharField(max_length=200)
    slug=AutoSlugField(_('slug'), max_length=50, unique=True, populate_from=('title'))
    detail=models.TextField()
    delivery = models.PositiveSmallIntegerField(choices=DELIVERYMETHOD_CHOICES, null=True, default = 'Swapt Delivery')
    status=models.BooleanField(default=True)
    category = models.CharField(
        max_length=50,
        choices=CATEGORY_CHOICES,
        null=True, default = 'Other Furniture'
    )
    condition = models.CharField(max_length=50,choices=CONDITION_CHOICES , null=True, default = None)
    #fields used to review listingscts
    stage = models.PositiveSmallIntegerField(choices=APPROVAL_STAGES, null=True, default=1)
    selling_stage = models.CharField(max_length=50,choices=SELLING_STAGES , null=True, default = 'Available')
    confirmed = models.BooleanField(default=False)
    isBundled = models.BooleanField(default=False)
    issue = models.CharField(max_length=250, blank=True, null=True, default = 'No issues') # Currently only using one field for both rejected and reported issues
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
        verbose_name_plural='1D. Inventory Items'

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
  
# AddressBook
class UserAddressBook(models.Model):
    CAMPUS_CHOICES = [
        ('Elon University', 'Elon University'),
    ]
    user=models.ForeignKey(User,on_delete=models.CASCADE)
    address=models.TextField()
    campus = models.CharField(
        max_length=30,
        choices=CAMPUS_CHOICES,
        default='Elon University'
    )
    propertyname=models.CharField(max_length=50,null=True)
    status=models.BooleanField(default=False)

    class Meta:
        verbose_name_plural='Users AddressBook'
# InventoryListing Attribute
class InventoryItemAttribute(models.Model):
    product=models.ForeignKey(InventoryListing,on_delete=models.CASCADE)
    brand=models.CharField(max_length=100, default='Brand')
    color=models.ForeignKey(Color,on_delete=models.CASCADE)
    size=models.ForeignKey(Dimension,on_delete=models.CASCADE)
    price=models.PositiveIntegerField(default=0)
    image=models.ImageField(upload_to="product_imgs/",null=True)

    class Meta:
        verbose_name_plural='1E: Inventory Item Attributes'

    def __str__(self):
        return self.product.title

    def image_tag(self):
        return mark_safe('<img src="%s" width="50" height="50" />' % (self.image.url))
#SWAPTLISTINGS
    
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
        ('Available', 'Available'),
        ('Pending', 'Pending'),
        ('Sold', 'Sold'),
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
    LOCATION_CHOICES = [
        ('Elon, NC', 'Elon, NC'),
        ('Burlington, NC', 'Burlington, NC'),
    ]
    #unique fields for swaptlistingsmodel
    propertymanager = models.ForeignKey(propManager, on_delete=CASCADE, null=True, default=1)
    #field identifying seller who posted listing
    swaptuser = models.ForeignKey(SwaptUser, on_delete=CASCADE, null=True, default=1)
    listings = models.ManyToManyField(
        'InventoryListing', related_name='inventory_items', blank=True)
    title = models.CharField(max_length=250)
    is_paid = models.BooleanField(default=False)
    is_MoveInReady = models.BooleanField(default=False)
    #mandatory fields required with user input
    detail=models.TextField(default="detail")
    slug=AutoSlugField(_('slug'), max_length=50, unique=True, populate_from=('title'))
    status=models.BooleanField(default=True)
    category=models.ForeignKey(Category,on_delete=models.CASCADE, null=True, default=1)
    brand=models.ForeignKey(Brand,on_delete=models.CASCADE, null=True, default=1)
    condition = models.CharField(max_length=50,choices=CONDITION_CHOICES, null=True, default='New')
    #mandatory location details
    location = models.CharField(
        max_length=30,
        choices=LOCATION_CHOICES,
        null=True,default='Elon, NC'
    )
    delivery = models.PositiveSmallIntegerField(choices=DELIVERYMETHOD_CHOICES, null=True, default='Swapt Delivery')
    
    #fields used to review listings
    stage = models.PositiveSmallIntegerField(choices=APPROVAL_STAGES, null=True, default=1)
    selling_stage = models.CharField(max_length=50,choices=SELLING_STAGES , null=True, default=1)
    confirmed = models.BooleanField(default=False)
    issue = models.CharField(max_length=250, blank=True, null=True,  default='No Issues') # Currently only using one field for both rejected and reported issues
    #optional
    quantity = models.IntegerField(default=1)
    
    #field to display listings in featured page 
    is_featured=models.BooleanField(default=False)

    #date/time fields
    move_out_date = models.DateField(auto_now_add=False, default=date.today,)
    publishing_date = models.DateTimeField(
        default=timezone.now,
        blank=True,
    )
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ("-created_at",)
        verbose_name_plural='2D. Swapt Listings'
  
    objects = SwaptListingManager() # Using manager above for reasons in comment

    def __str__(self):
        return self.title 
    
    def save(self, *args, **kwargs):
        super(SwaptListingModel, self).save(*args, **kwargs) 

# swapt product Attribute
class ProductAttribute(models.Model):
    product=models.ForeignKey(SwaptListingModel,on_delete=models.CASCADE)
    price=models.PositiveIntegerField(default=0)
    image=models.ImageField(upload_to="product_imgs/",null=True)

    class Meta:
        verbose_name_plural='2E: Swapt Listing Item Attributes'

    def __str__(self):
        return self.product.title

    def image_tag(self):
        return mark_safe('<img src="%s" width="50" height="50" />' % (self.image.url))

    

    

#offers
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
    offers_message=models.TextField(null=True, blank=True)
    offers_amount=models.TextField(null=True, blank=True)

    class Meta:
        verbose_name_plural='Users Offers'

    def get_offers_amount(self):
        return self.offers_amount
  
# order 
class CartOrderItems(models.Model):
    PENDING = "P"
    COMPLETED = "C"
    FAILED = "F"

    STATUS_CHOICES = (
        (PENDING, _("pending")),
        (COMPLETED, _("completed")),
        (FAILED, _("failed")),
    )
    order=models.ForeignKey(CartOrder,on_delete=models.CASCADE)
    invoice_no=models.CharField(max_length=150)
    listing = models.ForeignKey(SwaptListingModel, on_delete=models.CASCADE, default=1)
    item=models.CharField(max_length=150)
    image=models.CharField(max_length=200)
    payment_status = models.CharField(
        max_length=1, choices=STATUS_CHOICES, default=PENDING
    )
    qty=models.IntegerField()
    price=models.FloatField()
    total=models.FloatField()

    class Meta:
        verbose_name_plural='Swapt Order Items'

    def image_tag(self):
        return mark_safe('<img src="/media/%s" width="50" height="50" />' % (self.image))

# WishList
class Wishlist(models.Model):
    user=models.ForeignKey(User,on_delete=models.CASCADE)
    product=models.ForeignKey(SwaptListingModel,on_delete=models.CASCADE)

    class Meta:
        verbose_name_plural='Users Likes'
            
    