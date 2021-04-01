import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowseComponent } from './friend/browse/browse.component';
import { ConnectComponent } from './friend/connect/connect.component';
import { DisplayComponent } from './friend/display/display.component';
import { HomeComponent } from './layout/home/home.component';
import { FeedComponent } from './listings/feed/feed.component';
import { FoodListingsComponent } from './listings/food-listings/food-listings.component';
import { OrderComponent } from './ordering/order/order.component';
import { TrackComponent } from './ordering/track/track.component';
import { ForgotPasswordComponent } from './registration/forgot-password/forgot-password.component';
import { LoginComponent } from './registration/login/login.component';
import { ProfileComponent } from './registration/profile/profile.component';
import { RegistrationComponent } from './registration/registration/registration.component';
import { SettingsComponent } from './registration/settings/settings.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'logout', component: LoginComponent },
  { path: 'forgotPassword', component: ForgotPasswordComponent },
  { path: 'users', component: BrowseComponent },
  { path: 'users/:id', component: ConnectComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'feed', component: FoodListingsComponent },
  { path: 'feed/:type/:search', component: FoodListingsComponent },
  { path: 'orders', component: OrderComponent },
  { path: 'orders/:id', component: TrackComponent },
  { path: 'orders/:id/status', component: TrackComponent },
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: ProfileComponent},
  { path: 'track', component: TrackComponent },
  { path: 'friendlist', component: DisplayComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
