import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BranchAPIService } from './service/branch-api.service';

import { AppComponent } from './app.component';
import { ListBranchesComponent } from './list-branches/list-branches.component';

import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    ListBranchesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [
    BranchAPIService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
