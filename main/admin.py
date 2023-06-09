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
	list_display=('alt_text','image_tag')
admin.site.register(Banner,BannerAdmin)

class CategoryAdmin(admin.ModelAdmin):
	list_display=('title','image_tag')
admin.site.register(Category,CategoryAdmin)

class ColorAdmin(admin.ModelAdmin):
	list_display=('title','color_bg')
admin.site.register(Color,ColorAdmin)

class ProductAdmin(admin.ModelAdmin):
    list_display=('id','title','category','brand','status','is_featured')
    list_editable=('status','is_featured')
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
	list_editable=('paid_status','order_status')
	list_display=('user','total_amt','paid_status','order_dt','order_status')
admin.site.register(CartOrder,CartOrderAdmin)

class CartOrderItemsAdmin(admin.ModelAdmin):
	list_display=('invoice_no','item','image_tag','qty','price','total')
admin.site.register(CartOrderItems,CartOrderItemsAdmin)


class ProductOffersAdmin(admin.ModelAdmin):
	list_display=('user','product','offers_message','get_offers_amount')
admin.site.register(ProductOffers,ProductOffersAdmin)


admin.site.register(Wishlist)


class UserAddressBookAdmin(admin.ModelAdmin):
	list_display=('user','address','status')
admin.site.register(UserAddressBook,UserAddressBookAdmin)
