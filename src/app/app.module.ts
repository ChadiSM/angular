import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { XxxComponent } from './xxx/xxx.component';
import { SongComponent } from './song/song.component';
import { NavComponent } from './nav/nav.component';
import { MusicPlayerComponent } from './music-player/music-player.component';

@NgModule({
  declarations: [
    AppComponent,
    XxxComponent,
    SongComponent,
    NavComponent,
    MusicPlayerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
