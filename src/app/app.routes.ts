import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component'
import {ProfileComponent} from './profile/profile.component';
import {NgModule} from "@angular/core";

export const routes: Routes = [
    {path :'home',component: HomeComponent},
    {path :'profile',component: ProfileComponent}
];

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})

export class AppRoutes{}


