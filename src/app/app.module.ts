import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DayViewComponent } from './day-view/day-view.component';
import { MatListModule } from '@angular/material/list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MaxDaysComponent } from './max-days/max-days.component';






@NgModule({
  declarations: [
    AppComponent,
    DayViewComponent,
    MaxDaysComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatListModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule,
      MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule




  ],
  exports: [
    MatFormFieldModule,
    MatSortModule,
    MatListModule,
    MatPaginatorModule,
    MatInputModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
