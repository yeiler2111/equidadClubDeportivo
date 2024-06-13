import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

//primeNG se considera ponerlo en un modulo por separado para no empañar el modulo principal
import { CommonModule } from '@angular/common';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { ButtonModule } from 'primeng/button';
import { FileUploadModule } from 'primeng/fileupload';
import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';
import { PanelModule } from 'primeng/panel';
import { RippleModule } from 'primeng/ripple';


import { HeaderPageComponent } from './header-page/header-page.component';




//validacion de formulario
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderPageComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    RippleModule,
    CommonModule,
    BadgeModule,
    AvatarModule,
    InputTextModule,
    MenubarModule,
    PanelModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FileUploadModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
