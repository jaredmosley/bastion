import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoutingModule } from './routing.module';

import { SearchComponent } from './search/search.component';
import { ResultListComponent } from './search/result-list/result-list.component';
import { ResultComponent } from './search/result-list/result/result.component';

import {
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatIconModule,
  MatToolbarModule,
  MatGridListModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,

    RoutingModule,

    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatGridListModule
  ],
  declarations: [
    SearchComponent,
    ResultListComponent,
    ResultComponent
  ],
  exports: [
    SearchComponent,
    ResultListComponent,
    ResultComponent
  ]
})
export class SearchModule { }
