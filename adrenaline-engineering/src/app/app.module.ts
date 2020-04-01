import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductsPageComponent } from './products-page/products-page.component';
import { ServicesComponent } from "./services/services.component";
import { RouterModule, Routes } from "@angular/router";
import { HomePageComponent } from './home-page/home-page.component';
import { ContactFormComponent } from "./contact-form/contact-form.component";


const appRoutes: Routes = [

  { path: "products", component: ProductsPageComponent, data: {title: "Adrenaline Engineernig | Services"} },
  { path: "services", component: ServicesComponent },
  { path: "", component: HomePageComponent, data: {title: "Adrenaline Engineering | Home"}},
  {path: "contact-us", component: ContactFormComponent, data:{title: "Adrenaline Engineering | Contact Us"}},
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductsPageComponent,
    ServicesComponent,
    HomePageComponent,
    ContactFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})






export class AppModule { }
