from django.contrib import admin
from .models import InventoryItemAttribute, Banner,Category,Brand,Color,Dimension,InventoryListing,ProductAttribute,CartOrder,CartOrderItems,ProductOffers,Wishlist,UserAddressBook, SwaptListingModel, InventoryListingTag

# admin.site.register(Banner)
admin.site.register(Brand)
admin.site.register(Dimension)
#swapt
admin.site.register(InventoryListing)
#Inventory listings
admin.site.register(InventoryListingTag)


class BannerAdmin(admin.ModelAdmin):
	list_display=('altText','image_tag')
admin.site.register(Banner,BannerAdmin)

class CategoryAdmin(admin.ModelAdmin):
	list_display=('title','image_tag')
admin.site.register(Category,CategoryAdmin)

class ColorAdmin(admin.ModelAdmin):
	list_display=('title','color_bg')
admin.site.register(Color,ColorAdmin)

class ProductAdmin(admin.ModelAdmin):
    list_display=('id','title','category','brand','status','isFeatured')
    list_editable=('status','isFeatured')
admin.site.register(SwaptListingModel,ProductAdmin)

# InventoryListing Attribute
class ProductAttributeAdmin(admin.ModelAdmin):
    list_display=('id','image_tag','product','price')
admin.site.register(ProductAttribute,ProductAttributeAdmin)

# InventoryListing Attribute
class InventoryItemAttributeAdmin(admin.ModelAdmin):
    list_display=('id','image_tag','product','price','color','size')
admin.site.register( InventoryItemAttribute, InventoryItemAttributeAdmin)

# Order
class CartOrderAdmin(admin.ModelAdmin):
	list_editable=('paidStatus','orderStatus')
	list_display=('user','totalAmt','paidStatus','orderDt','orderStatus')
admin.site.register(CartOrder,CartOrderAdmin)

class CartOrderItemsAdmin(admin.ModelAdmin):
	list_display=('invoiceNo','item','image_tag','qty','price','total')
admin.site.register(CartOrderItems,CartOrderItemsAdmin)


class ProductOffersAdmin(admin.ModelAdmin):
	list_display=('user','product','message','amount')
admin.site.register(ProductOffers,ProductOffersAdmin)


admin.site.register(Wishlist)


class UserAddressBookAdmin(admin.ModelAdmin):
	list_display=('user','address','campus', 'propertyname', 'status')
admin.site.register(UserAddressBook,UserAddressBookAdmin)
