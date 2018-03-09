import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MediaService } from './services/media.service';
import { SearchService } from './services/search.service';
import { MagnetService } from './services/magnet.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    MediaService,
    SearchService,
    MagnetService
  ]
})
export class SharedModule { }
