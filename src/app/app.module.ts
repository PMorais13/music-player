import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { FooterComponent } from './core/footer/footer.component';
import { PlayerComponent } from './features/components/player/player.component';
import { GenresComponent } from './features/components/genres/genres.component';
import { MusicListComponent } from './features/components/music-list/music-list.component';
import { LyricsComponent } from './features/components/lyrics/lyrics.component';
import { FavoriteSongsComponent } from './features/components/favorite-songs/favorite-songs.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    PlayerComponent,
    GenresComponent,
    MusicListComponent,
    LyricsComponent,
    FavoriteSongsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
