import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { CoreModule } from '../core/core.module';
import { HomeContentComponent } from './home-content/home-content.component';
import { BecomeInstructorComponent } from './become-instructor/become-instructor.component';



@NgModule({
  declarations: [HomeComponent, HomeContentComponent, BecomeInstructorComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    CoreModule
  ],
  exports: [ HomeComponent]
})
export class HomeModule { }
