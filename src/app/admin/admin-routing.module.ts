import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BusinessSetupComponent } from './business-setup/business-setup.component';
import { ConfigurationComponent } from './configuration/configuration.component';
import { MasterSetupComponent } from './master-setup/master-setup.component';

const routes: Routes = [
  {
    path: 'bsetup', component: BusinessSetupComponent,
  },
  {
    path: 'master-setup', component: MasterSetupComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
