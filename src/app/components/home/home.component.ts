import { Component, OnInit } from '@angular/core';
import { RickMortyService } from '../../services/rick-morty.service';
// interfaces
import { RickMorty } from '../../interfaces/rickMorty.interface';
import { Router } from '@angular/router';

{}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public characters: RickMorty;
  public charactersimg: any;
  public charactersId: any;
  public loading: boolean;

  constructor(private RickMortyServiceservice: RickMortyService, private router: Router) { 
    this.loading = true;
  }

  ngOnInit(): void {
    this.getAllCharacter();

    // console.log(this.charactersimg);
  }


  getAllCharacter() {
    this.RickMortyServiceservice.getAllCharacters().subscribe((characters: any) => {
      setTimeout(() => {
        this.characters = characters.results;
        this.loading = false;
        console.log(this.characters);
      }, 2000);
    });
  }


  verdetalles(character: any ) {
    console.log(character);
    this.charactersimg = character.image;
    this.charactersId = character.id;

  }

  verInfo() {
    this.router.navigate(['details', this.charactersId]);
  }

}
