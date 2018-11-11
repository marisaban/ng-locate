import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { BranchAPIService } from './service/branch-api.service';
import { BranchListService } from './service/branch-list.service';
import { BranchListDetailsService } from './service/branch-list-details.service';

import { AppComponent } from './app.component';
import { ListBranchesComponent } from './list-branches/list-branches.component';
import { ViewBranchComponent } from './view-branch/view-branch.component';
import { ViewBranchMapComponent } from './view-branch-map/view-branch-map.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

import { AgmCoreModule } from '@agm/core';
import { SearchBranchesComponent } from './search-branches/search-branches.component';

// Add an icon to the library for convenient access in other components
library.add(faCoffee);

@NgModule({
  declarations: [
    AppComponent,
    ListBranchesComponent,
    ViewBranchComponent,
    ViewBranchMapComponent,
    SearchBranchesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBQSGkpHKdToePWcV1Ot4FSYhjmIFs3TIQ'
    })
  ],
  providers: [
    BranchAPIService,
    BranchListService,
    BranchListDetailsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
