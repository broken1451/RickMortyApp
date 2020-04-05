import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RickMortyService } from '../../services/rick-morty.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  public id: string;
  public character: any;

  constructor(private rickMortyService: RickMortyService , private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe((parametrolURL) => {
      this.id = parametrolURL['id'];
      this.getCharacter(this.id);
      console.log(parametrolURL);
    });

  }

  getCharacter(id: string) {
    this.rickMortyService.getCharacter(id).subscribe((character: any) => {
      this.character = character;
      console.log('character individual', character);
      console.log(' this.character',  this.character);
    });
  }

}
