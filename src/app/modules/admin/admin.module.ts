import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
console.log('Start of Admin Module') // This will always log when trying to access admin path
import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { ServicesComponent } from './components/services/services.component';
import { AboutComponent } from './components/about/about.component';

@NgModule({
  declarations: [AdminDashboardComponent, HeaderComponent, FooterComponent, HomeComponent, ContactComponent, ServicesComponent, AboutComponent],
  imports: [CommonModule, AdminRoutingModule],
})
export class AdminModule {
  constructor(){
    console.log('Admin module constructor')// This will always log when trying to access admin path
  }
}
