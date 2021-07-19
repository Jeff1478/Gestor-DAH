import { Component, OnInit } from '@angular/core';
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-tipo-dis',
  templateUrl: './tipo-dis.component.html',
  styleUrls: ['./tipo-dis.component.css']
})
export class TipoDisComponent implements OnInit {

  constructor(public tipo:NgbModal) { }

  ngOnInit(): void {
  }

}



