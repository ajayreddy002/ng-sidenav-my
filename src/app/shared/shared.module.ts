import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import {SharedRoutingModule} from './shared-routing.module';


@NgModule({
  declarations: [SidebarComponent],
  imports: [
    CommonModule,
    SharedRoutingModule
    // AppRoutingModule
  ],
  exports: [
    SidebarComponent
  ]
})
export class SharedModule { }
