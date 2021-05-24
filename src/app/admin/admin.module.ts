import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { ConfigurationComponent } from './configuration/configuration.component';
import { BusinessSetupComponent } from './business-setup/business-setup.component';
import { MasterSetupComponent } from './master-setup/master-setup.component';


@NgModule({
  declarations: [AdminComponent, ConfigurationComponent, BusinessSetupComponent, MasterSetupComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
