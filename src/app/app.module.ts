import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { BranchAPIService } from './branch-api.service';
import { BranchListService } from './branch-list.service';
import { BranchListDetailsService } from './branch-list-details.service';

import { AppComponent } from './app.component';
import { ListBanksComponent } from './list-banks/list-banks.component';

@NgModule({
  declarations: [
    AppComponent,
    ListBanksComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    BranchAPIService,
    BranchListService,
    BranchListDetailsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
