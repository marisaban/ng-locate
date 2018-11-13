import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { BranchAPIService } from './service/branch-api.service';
import { BranchListService } from './service/branch-list.service';

import { AppComponent } from './app.component';
import { ListBranchesComponent } from './list-branches/list-branches.component';
import { ViewBranchMapComponent } from './view-branch-map/view-branch-map.component';

import { AgmCoreModule } from '@agm/core';
import { SearchBranchesComponent } from './search-branches/search-branches.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { CityNamePipe } from './pipe/city-name.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ListBranchesComponent,
    ViewBranchMapComponent,
    SearchBranchesComponent,
    CityNamePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBQSGkpHKdToePWcV1Ot4FSYhjmIFs3TIQ'
    })
  ],
  providers: [
    BranchAPIService,
    BranchListService,
    CityNamePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
