import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient) {
    this.getPokemon()
  }
  getPokemon(){
    let bulbasaur = this._http.get('https://pokeapi.co/api/v2/pokemon/1/');
    bulbasaur.subscribe(data => {
      console.log("bulbasaur info:");
      console.log(data["species"]["name"])
      console.log(data["species"]["name"] + "'s abilities are " + data["abilities"][0]["ability"]["name"] + " and " + data["abilities"][1]["ability"]["name"] + ".");
      let others = this._http.get(data["abilities"][0]["ability"]["url"]);
      console.log(others);
      others.subscribe (moredata =>{
        console.log((moredata["pokemon"].length-1) + " other pokemon have the " + data["abilities"][0]["ability"]["name"] + " ability.")
      })
    })

  }
}
