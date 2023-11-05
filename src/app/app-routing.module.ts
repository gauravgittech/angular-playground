import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: "", redirectTo: "landing-page", pathMatch: 'full' },
  { path: "landing-page", component: LandingPageComponent },
  { path: "angular", component: AppComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
