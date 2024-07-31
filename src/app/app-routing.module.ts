import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './pages/about/about.component';
import { BlackWhiteComponent } from './pages/black-white/black-white.component';
import { HomeComponent } from './pages/home/home.component';
import { RealismComponent } from './pages/realism/realism.component';
import { TeamComponent } from './pages/team/team.component';
import { WaterColorComponent } from './pages/water-color/water-color.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'realism', component: RealismComponent },
  {path: 'black-white', component: BlackWhiteComponent},
  {path: 'water-color', component: WaterColorComponent},
  {path: 'team', component: TeamComponent},
  {path: 'register', component: RegisterComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
