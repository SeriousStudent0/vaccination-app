import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { CenterSearchbarComponent } from './center-searchbar/center-searchbar.component';
import { CenterDetailsComponent } from './center-details/center-details.component';

const routes: Routes = [
  { path: "first", component: FirstComponent},
  { path: "second", component: SecondComponent},
  { path: "centers", component: CenterSearchbarComponent},
  { path: "center/:id", component: CenterDetailsComponent},
  { path: '', redirectTo : 'centers', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
