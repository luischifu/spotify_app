import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: [
  ]
})
export class ArtistComponent implements OnInit {

  artista: any = {} ;
  topTracks: any[] = [] ;
  loading: boolean ;

  constructor( private router: ActivatedRoute,
               private spotify: SpotifyService ) { 

    this.router.params.subscribe ( params =>{

      this.getArtista ( params['id'] ) ;
      this.getTopTracks ( params['id'] ) ;

    } ) ;

   }

   getArtista ( id: string ){

    this.loading = true ;

    this.spotify.getArtista ( id )
        .subscribe ( (data:any)=>{
          this.artista = data ;
          console.log (this.artista) ;
          this.loading = false ;
        } ) ;

   }

   getTopTracks ( id: string ) {

    this.spotify.getTopTracks ( id )
         .subscribe ( (data:any)=>{
           this.topTracks = data ;
            console.log ( this.topTracks ) ;
         } ) ;

   }

  ngOnInit(): void {
  }

}
