import { Component, OnInit } from '@angular/core';
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-inciso',
  templateUrl: './inciso.component.html',
  styleUrls: ['./inciso.component.css']
})
export class IncisoComponent implements OnInit {

  constructor(public inciso:NgbModal) { }

  ngOnInit(): void {
  }

}
