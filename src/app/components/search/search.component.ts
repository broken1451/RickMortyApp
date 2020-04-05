import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RickMortyService } from '../../services/rick-morty.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  public termino: string;
  public error: boolean;
  public loading: boolean;
  public caracteres: any;


  constructor(private rickMortyService: RickMortyService , private activateRoute: ActivatedRoute) {
    this.error = false;
    this.loading = true;
  }

  ngOnInit(): void {
    this.activateRoute.params.subscribe((parametrosURL) => {
      this.termino = parametrosURL['termino'];
      this.getCharacterByName(this.termino);
      console.log(parametrosURL);
    });
  }


  getCharacterByName(nombre: string) {
    this.rickMortyService.getCharacterByName(nombre).subscribe((characterByName: any) => {
      setTimeout(() => {
        this.caracteres = characterByName.results;
        this.error = false;
        this.loading = false;
      }, 2000);
      console.log(characterByName);
      console.log( this.caracteres);
    }, (err) => {
      this.error = true;
      this.caracteres = [];
      console.log(err.error);
    });
   }

}
