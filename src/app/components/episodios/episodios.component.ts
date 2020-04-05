import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { RickMortyService } from '../../services/rick-morty.service';

@Component({
  selector: 'app-episodios',
  templateUrl: './episodios.component.html',
  styleUrls: ['./episodios.component.scss']
})
export class EpisodiosComponent implements OnInit {

  public episodies: any;
  public loading: boolean;

  constructor(private RickMortyServiceservice: RickMortyService, private router: Router) {
    this.loading = true;
  }

  ngOnInit(): void {
    this.getAllEpisodies();
  }

  getAllEpisodies(){
    this.RickMortyServiceservice.getAllEpisodies().subscribe((episodies: any) => {
       setTimeout(() => {
        this.episodies = episodies.results;
        console.log(episodies.results);
        this.loading = false;
       }, 2000);
    })
  }
}
