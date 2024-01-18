import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./components/pages/hometwo/hometwo.module').then(m => m.HometwoModule), data: { breadcrumb: 'Homepage' }},
  // { path: 'home-v2', loadChildren: () => import('./components/pages/hometwo/hometwo.module').then(m => m.HometwoModule), data: { breadcrumb: 'Homepage' } },
  // { path: 'home-v3', loadChildren: () => import('./components/pages/homethree/homethree.module').then(m => m.HomethreeModule), data: { breadcrumb: 'Homepage' } },
  { path: 'about', loadChildren: () => import('./components/pages/about/about.module').then(m => m.AboutModule), data: { breadcrumb: 'About Us' } },
  { path: 'management', loadChildren: () => import('./components/pages/error/error.module').then(m => m.ErrorModule), data: { breadcrumb: 'Our Management' } },
  { path: 'quality', loadChildren: () => import('./components/pages/quality/quality.module').then(m => m.QualityModule), data: { breadcrumb: 'Quality Assurance' } },
  { path: 'commitment', loadChildren: () => import('./components/pages/commitment/commitment.module').then(m => m.CommitmentModule), data: { breadcrumb: 'Our Commitment' } },
  { path: 'certifications', loadChildren: () => import('./components/pages/certificates/certificates.module').then(m => m.CertificatesModule), data: { breadcrumb: 'Certificates & Standards' } },
  { path: 'legal', loadChildren: () => import('./components/pages/legal/legal.module').then(m => m.LegalModule), data: { breadcrumb: 'Legal' } },
  { path: 'infrastructure', loadChildren: () => import('./components/pages/infrastructure/infrastructure.module').then(m => m.InfrastructureModule), data: { breadcrumb: 'Infrastructure' } },
  { path: 'machining', loadChildren: () => import('./components/pages/machining/machining.module').then(m => m.MachiningModule), data: { breadcrumb: 'Machining Shop' } },
  { path: 'products', loadChildren: () => import('./components/pages/shopthree/shopthree.module').then(m => m.ShopthreeModule), data: { breadcrumb: 'Products' } },
  { path: 'product/:id', loadChildren: () => import('./components/pages/productsingle/productsingle.module').then(m => m.ProductsingleModule), data: { breadcrumb: 'Product Details' } },
  // { path: 'product-single-v2/:id', loadChildren: () => import('./components/pages/productsingletwo/productsingletwo.module').then(m => m.ProductsingletwoModule), data: { breadcrumb: 'Product Details' } },
  // { path: 'wishlist', loadChildren: () => import('./components/pages/wishlist/wishlist.module').then(m => m.WishlistModule), data: { breadcrumb: 'Wishlist' } },
  // { path: 'shop-v1', loadChildren: () => import('./components/pages/shopone/shopone.module').then(m => m.ShoponeModule), data: { breadcrumb: 'Shop v1 (Default)' } },
  // { path: 'shop-v2', loadChildren: () => import('./components/pages/shoptwo/shoptwo.module').then(m => m.ShoptwoModule), data: { breadcrumb: 'Shop v2 (Full Width)' } },
  // { path: 'shop-v4', loadChildren: () => import('./components/pages/shopfour/shopfour.module').then(m => m.ShopfourModule), data: { breadcrumb: 'Shop v4 (List view)' } },
  { path: 'events', loadChildren: () => import('./components/pages/events/events.module').then(m => m.EventsModule), data: { breadcrumb: 'Events' } },
  { path: 'blogs', loadChildren: () => import('./components/pages/blogmasonry/blogmasonry.module').then(m => m.BlogmasonryModule), data: { breadcrumb: 'Blogs' } },
  { path: 'blog/:id', loadChildren: () => import('./components/pages/postsingle/postsingle.module').then(m => m.PostsingleModule), data: { breadcrumb: 'Blog Details' } },
  // { path: 'blog-grid', loadChildren: () => import('./components/pages/bloggrid/bloggrid.module').then(m => m.BloggridModule), data: { breadcrumb: 'Blog Grid' } },
  // { path: 'blog-list', loadChildren: () => import('./components/pages/bloglist/bloglist.module').then(m => m.BloglistModule), data: { breadcrumb: 'Blog List' } },
  // { path: 'cart', loadChildren: () => import('./components/pages/cart/cart.module').then(m => m.CartModule), data: { breadcrumb: 'Cart' } },
  // { path: 'checkout', loadChildren: () => import('./components/pages/checkout/checkout.module').then(m => m.CheckoutModule), data: { breadcrumb: 'Checkout' } },
  // { path: 'login', loadChildren: () => import('./components/pages/login/login.module').then(m => m.LoginModule) , data: { breadcrumb: 'Login' }},
  // { path: 'register', loadChildren: () => import('./components/pages/register/register.module').then(m => m.RegisterModule), data: { breadcrumb: 'Register' } },
  { path: 'careers', loadChildren: () => import('./components/pages/careers/careers.module').then(m => m.CareersModule), data: { breadcrumb: 'Careers' } },
  { path: 'contact', loadChildren: () => import('./components/pages/contact/contact.module').then(m => m.ContactModule), data: { breadcrumb: 'Contact Us' } },
  { path: 'qr-code', loadChildren: () => import('./components/pages/qr/qr.module').then(m => m.QrModule), data: { breadcrumb: 'Downloads' } },
  { path: 'error', loadChildren: () => import('./components/pages/error/error.module').then(m => m.ErrorModule), data: { breadcrumb: 'Error 404' } },
  { path: '**', loadChildren: () => import('./components/pages/error/error.module').then(m => m.ErrorModule), data: { breadcrumb: 'Error 404' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
