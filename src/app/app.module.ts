import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from './layout/layout.module';
import { UserModule } from './user/user.module';
import { HomeModule } from './home/home.module';
import { CheckoutModule } from './checkout/checkout.module';
import { AddressbookModule } from './addressbook/addressbook.module';
import { EmailmessageModule } from './emailmessage/emailmessage.module';


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,

    AppRoutingModule,

    CoreModule,
    SharedModule,
    AuthModule,
    UserModule,
    HomeModule,
    CheckoutModule,
    AddressbookModule,
    EmailmessageModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
