import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  nroFicha = 2140504;
  nombrePrograma = "MCDS";
  cantidadAprendices = 21;
  modalidad = "Virtual";
  registroCalificado = true;

  constructor() { }

  ngOnInit(): void {
  }

}
