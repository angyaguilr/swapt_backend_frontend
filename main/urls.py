from django.urls import path,include, re_path
from django.contrib.auth.decorators import login_required
from rest_framework import routers
from . import views
from accounts.decorators import swapt_user_required, Swapt_admin_required
from django.conf import settings
from django.conf.urls.static import static

router = routers.DefaultRouter()
router.register(r'review', views.SwaptReviewListingsAPI)
router.register(r'inventory-review', views.InventoryReviewListingsAPI)

urlpatterns=[
    path('',views.home,name='home'),
    path('', views.index, name="index"),
    path('privacy-policy', views.privacy_policy, name="privacy_policy"),
    path('cookies-policy', views.cookies_policy, name="cookies_policy"),
    path('search',views.search,name='search'),
    path('category-list',views.category_list,name='category-list'),
    path('brand-list',views.brand_list,name='brand-list'),
    path('product-list',views.product_list,name='product-list'),
    path('category-product-list/<int:cat_id>',views.category_product_list,name='category-product-list'),
    path('brand-product-list/<int:brand_id>',views.brand_product_list,name='brand-product-list'),
    path('product/<str:slug>/<int:id>',views.product_detail,name='product_detail'),
    path('filter-data',views.filter_data,name='filter_data'),
    path('load-more-data',views.load_more_data,name='load_more_data'),
    path('add-to-cart',views.add_to_cart,name='add_to_cart'),
    path('cart',views.cart_list,name='cart'),
    path('delete-from-cart',views.delete_cart_item,name='delete-from-cart'),
    path('update-cart',views.update_cart_item,name='update-cart'),
    path('accounts/signup',views.signup,name='signup'),
    path('checkout',views.checkout,name='checkout'),
    path('paypal/', include('paypal.standard.ipn.urls')),
    path('payment-done/', views.payment_done, name='payment_done'),
    path('payment-cancelled/', views.payment_canceled, name='payment_cancelled'),
    path('save-review/<int:pid>',views.save_offer, name='save-review'),
    # User Section Start
    path('my-dashboard',views.my_dashboard, name='my_dashboard'),
    path('my-orders',views.my_orders, name='my_orders'),
    path('my-orders-items/<int:id>',views.my_order_items, name='my_order_items'),
    # End

    # Wishlist
    path('add-wishlist',views.add_wishlist, name='add_wishlist'),
    path('my-wishlist',views.my_wishlist, name='my_wishlist'),
    # My Offerss
    path('my-offers',views.my_offers, name='my-offers'),
    # My AddressBook
    path('my-addressbook',views.my_addressbook, name='my-addressbook'),
    path('add-address',views.save_address, name='add-address'),
    path('activate-address',views.activate_address, name='activate-address'),
    path('update-address/<int:id>',views.update_address, name='update-address'),
    path('edit-profile',views.edit_profile, name='edit-profile'),
    #all 
    path('index', views.Index2.as_view(), name='index2'),
    path("create-checkout-session/<int:pk>/", swapt_user_required()(views.CreateStripeCheckoutSessionView.as_view()),name="create-checkout-session",),
    path('success/', swapt_user_required()(views.SuccessView.as_view()),name='success'),
    path('cancel/', swapt_user_required()(views.CancelView.as_view()),name='cancel'),
    path("webhooks/stripe/", views.StripeWebhookView.as_view(), name="stripe_webhook"), #updated line
    #Inventory listings:
    path('inventory-create-listing/', views.InventoryListingCreationView.as_view(), name="inventory_create"),
    path('inventory-confirm/', swapt_user_required()(views.InventoryListingsConfirmationView.as_view()), name="inventory_confirm"),
    path('inventory-review/', login_required()(views.InventoryListingsReviewView.as_view()), name="inventory_review"),
    path('inventory-edit/<int:pk>/', swapt_user_required()(views.InventoryListingEditView.as_view()), name="inventory_edit"),
    path('inventory-reject/<int:pk>/', Swapt_admin_required()(views.InventoryListingRejectView.as_view()), name="inventory_reject"),
    path('inventory-list/', views.InventoryListingListAPIView.as_view(), name="inventory_list"),
    path('inventory-report/', views.InventoryReportListingView.as_view(), name="inventory_report"),
    path('inventory-Listings/', views.InventoryListingsUploaded.as_view(), name='inventory_listings'),
    path('inventory-Listings/search/', views.InventoryListingsUploadedSearch.as_view(), name='inventory_listings_search'),
    path("inventory-listing", views.InventoryListingListView.as_view(), name="inventory_listing_list"),
    path("inventory-<int:pk>/", swapt_user_required()(views.InventoryListingDetailView.as_view()), name="inventory_listing_detail"),

    #swapt listings:
    path('swapt-confirm/', swapt_user_required()(views.SwaptListingsConfirmationView.as_view()), name="swapt_confirm"),
    path('swapt-review/', login_required()(views.SwaptListingsReviewView.as_view()), name="swapt_review"),
    path('swapt-edit/<int:pk>/', login_required()(views.SwaptListingEditView.as_view()), name="swapt_edit"),
    path('swapt-reject/<int:pk>/', Swapt_admin_required()(views.SwaptListingRejectView.as_view()), name="swapt_reject"),
    path('swapt-list/', views.SwaptListingListAPIView.as_view(), name="swapt_list"),
    re_path('^api/', include(router.urls)),
    #TBD: url('^api/', include(router.urls)),
    path('swapt-report/', views.SwaptReportListingView.as_view(), name="swapt_report"),
    path('swapt-Listings/', views.SwaptListingsUploaded.as_view(), name='swapt_listings'),
    path('swapt-Listings/search/', views.SwaptListingsUploadedSearch.as_view(), name='swapt_listings_search'),
    path('swapt-create-listing/', views.SwaptListingCreation.as_view(), name='swapt_create'),
    path("swapt-listing", views.SwaptListingListView.as_view(), name="swapt_listing_list"),
    path("swapt-<int:pk>/", swapt_user_required()(views.SwaptListingDetailView.as_view()), name="swapt_listing_detail"),
    path('swapt-confirmation/<int:pk>', views.SwaptListingConfirmation.as_view(), name='swapt_confirmation'),
    path('swapt-pay-confirmation/', views.SwaptListingPayConfirmation.as_view(),name='payment-confirmation'),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)