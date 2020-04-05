import { Injectable } from '@angular/core';

// services
import { environment } from 'src/environments/environment.prod';
import { HttpClient } from '@angular/common/http';
{}



@Injectable({
  providedIn: 'root'
})
export class RickMortyService {

  public url: string;

  constructor(private httpClient: HttpClient) {
    this.url = environment.rickMortyUrl;
  }


  getAllCharacters() {
    return this.httpClient.get(`${this.url}character`);
  }

  getCharacter(id: string) {
    return this.httpClient.get(`${this.url}character/${id}`);
  }

  getCharacterByName(nombre: string) {
    return this.httpClient.get(`${this.url}character/?name=${nombre}`);
  }

  getAllEpisodies() {
    return this.httpClient.get(`${this.url}episode`);
  }

}
