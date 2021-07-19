import { Component, OnInit } from '@angular/core';
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-plastica',
  templateUrl: './plastica.component.html',
  styleUrls: ['./plastica.component.css']
})
export class PlasticaComponent implements OnInit {

  constructor(public plastica:NgbModal) { }

  ngOnInit(): void {
  }

}
