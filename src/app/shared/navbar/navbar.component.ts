import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @ViewChild('txtBuscar') txtBuscar: ElementRef;
  public termino: string;

  constructor( private router: Router) { }

  ngOnInit(): void {
  }


  buscarCharacter(texto: string) {
    if (texto === '' || texto.length === 0) {
      return;
    }
    this.router.navigate(['/search', texto]);
    this.txtBuscar.nativeElement.innerText = '';
    this.termino = '';
  }

}
