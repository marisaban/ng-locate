import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// add services
import { BranchAPIService } from './branch-api.service';

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
    BranchAPIService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
