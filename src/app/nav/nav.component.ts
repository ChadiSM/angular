import { Component } from '@angular/core';
import { SongComponent } from '../song/song.component';
import { SongService } from '../song.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  songs: { name: string; title: string; artist: string; year: string; style: string; duration: string; url: string; }[] = [];

  constructor(private songService: SongService) {}

  ngOnInit() {
    this.songs = this.songService.getSongs();
  }

  currentSong: any;



  showSongDetails = false;
  toggleSongDetails() {
    this.showSongDetails = !this.showSongDetails;
  }






  /* previousSong() {
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
  } */




  /* ngAfterViewInit() {
     Get DOM elements
     const audio = document.getElementById('audio') as HTMLAudioElement;
    const playBtn = document.getElementById('play') as HTMLDivElement;
    const pauseBtn = document.getElementById('pause') as HTMLDivElement;
    const backwardBtn = document.getElementById('backward') as HTMLDivElement;
    const forwardBtn = document.getElementById('forward') as HTMLDivElement;
    const rangeInput = document.getElementById('range') as HTMLInputElement;
    const startDuration = document.querySelector('.start') as HTMLDivElement;
    const endDuration = document.querySelector('.end') as HTMLDivElement;
    const title = document.querySelector('.player__song') as HTMLHeadingElement;
    const artist = document.querySelector('.player__artist') as HTMLHeadingElement;
    const album = document.querySelector('.player__album img') as HTMLImageElement;






  }

} */
 // Set initial song
    //let currentSong = this.canciones[0];
    //audio.src = currentSong.fuente;
   // title.innerText = currentSong.titulo;

    // Function to update audio duration
   // function updateDuration() {
    //  const duration = Math.floor(audio.duration);
     // const minutes = Math.floor(duration / 60);
    //  const seconds = duration - minutes * 60;
    //  endDuration.innerText = `${minutes}:${seconds.toString().padStart(2, '0')}`;
  //  }

    // Event that triggers when audio is loaded
  //  audio.addEventListener('loadedmetadata', () => {
 ////     updateDuration();
 //   });

    // Event that triggers when audio time is updated
 //   audio.addEventListener('timeupdate', () => {
  //    const currentTime = Math.floor(audio.currentTime);
  //    const minutes = Math.floor(currentTime / 60);
  //    const seconds = currentTime - minutes * 60;
  //    startDuration.innerText = `${minutes}:${seconds.toString().padStart(2, '0')}`;
  //    rangeInput.value = String((audio.currentTime / audio.duration) * 100);
  //////  });

}
