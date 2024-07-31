import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { NavbarComponent } from './_components/navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImageService } from './image.service';
import { AboutComponent } from './pages/about/about.component';
import { BlackWhiteComponent } from './pages/black-white/black-white.component';
import { HomeComponent } from './pages/home/home.component';
import { RealismComponent } from './pages/realism/realism.component';
import { TeamComponent } from './pages/team/team.component';
import { WaterColorComponent } from './pages/water-color/water-color.component';

import { RegisterComponent } from './pages/register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    RealismComponent,
    BlackWhiteComponent,
    WaterColorComponent,
    TeamComponent,

    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ImageService],

  bootstrap: [AppComponent],
})
export class AppModule {}
