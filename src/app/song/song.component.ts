import { Component } from '@angular/core';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.css']
})
export class SongComponent {



  songs = [
    { name: 'Canción 1', title: 'titulo 1', artist: 'artista1', year: 'year 1', style: 'style 1',duration: 'duration 1',  url: 'cancion1.mp3' },
    { name: 'Canción 2', title: 'titulo 2',artist: 'artista2',year: 'year 2', style: 'style 2', duration: 'duration 2',  url: 'cancion2.mp3' },
    { name: 'Canción 3', title: 'titulo 3',artist: 'artista3',year: 'year 3',  style: 'style 3',duration: 'duration 3',  url: 'cancion3.mp3' }
  ];
  currentSong: any;

  getSongs(){
    return this.songs;
  }

  showSongDetails = false;

  toggleSongDetails() {
    this.showSongDetails = !this.showSongDetails;
  }




  previousSong() {
    const currentIndex = this.songs.indexOf(this.currentSong);
    if (currentIndex > 0) {
      this.currentSong = this.songs[currentIndex - 1];
    }
  }

  nextSong() {
    const currentIndex = this.songs.indexOf(this.currentSong);
    if (currentIndex < this.songs.length - 1) {
      this.currentSong = this.songs[currentIndex + 1];
    }
  }

}
