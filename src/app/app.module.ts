import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WebpageComponent } from './webpage/webpage.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ShopComponent } from './shop/shop.component';
import { Routes, RouterModule } from '@angular/router';
import { BlogComponent } from './blog/blog.component';


 const routes:Routes =[
  {path:'',component:WebpageComponent},
    {path:'shop',component:ShopComponent},
    {path:'blog',component:BlogComponent},
  
 ];
@NgModule({
  declarations: [
    AppComponent,
    WebpageComponent,
    ShopComponent,
    BlogComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    FontAwesomeModule  // Remove any extra comma
  ],
  exports:[RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
