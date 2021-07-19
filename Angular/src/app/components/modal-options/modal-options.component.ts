import { Component, Input, OnInit } from '@angular/core';
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-options',
  templateUrl: './modal-options.component.html',
  styleUrls: ['./modal-options.component.css']
})
export class ModalOptionsComponent implements OnInit{
 

  constructor(public modal:NgbModal) {}

  ngOnInit(): void{

  }
  
}

  
