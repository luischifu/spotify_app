import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  newSongs : any[] = [] ;
  loading  : boolean ;


  constructor( private spotify: SpotifyService ) {

    this.loading = true ;

    this.spotify.getNewReleases ()
        .subscribe ( (data:any) => {

          this.newSongs = data ;
          console.log (this.newSongs) ;
          this.loading = false ;

        } ) ;

  }

  ngOnInit(): void {
  }

}
