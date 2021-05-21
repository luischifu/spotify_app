import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient ) { 
    console.log ('Servicio spotify listo ') ;
  }

  getQuery( query: string ){

    const url = `https://api.spotify.com/v1/${ query }` ;

    const headers = new HttpHeaders ({
      'Authorization' : 'Bearer BQAH8PRh7k8d8lxJEZB4NufOTkoSqG-iiFrD06ipLdMgnahan9mY_HROtfOTAb5CeKI88NDZtL7whXA9geI'
    })

    return this.http.get( url, { headers } ) ;

  }

  getNewReleases (){

  /** 
  const headers = new HttpHeaders ({
    'Authorization' : 'Bearer BQDVr69w0hxMsncwWUOgNHOegL77TMMM8DpQAnXxPZfVpgBCGdFyQrg77e9D48cHWsJzP-YY8_1OPA0FqLo'
  })
    */ 

    return this.getQuery ('browse/new-releases')
                  .pipe ( map  ( data => data['albums'].items  ) ) ;
        
  };

  getArtistas( termino: string ) {

    return this.getQuery (`search?q=${ termino }&type=artist&limit=15`)
                  .pipe ( map ( data => data['artists'].items ) ) ;
    

  }

  getArtista( id: string ) {

    return this.getQuery (`artists/${id}`);
                  //.pipe ( map ( data => data['artists'].items ) ) ;
  }

  getTopTracks( id: string ) {

    return this.getQuery (`artists/${id}/top-tracks?country=us`)
                  .pipe ( map ( data => data['tracks'] ) ) ;
  }



}
