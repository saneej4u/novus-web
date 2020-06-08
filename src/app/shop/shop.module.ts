import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './shop.component';
import { CourseItemComponent } from './course-item/course-item.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [ShopComponent, CourseItemComponent, CourseDetailsComponent],
  imports: [
    CommonModule,
    RouterModule,
    CarouselModule.forRoot()
  ],
  exports:[ShopComponent]
})
export class ShopModule { }
