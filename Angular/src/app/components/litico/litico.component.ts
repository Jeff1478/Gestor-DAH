import { Component, OnInit, Input } from '@angular/core';
import { Litico } from 'src/app/models/litico';
import { Globallit } from 'src/app/services/globallit';
import { Router, ActivatedRoute, Params  } from '@angular/router';
import { LiticoService } from 'src/app/services/litico.service';

@Component({
  selector: 'app-litico',
  templateUrl: './litico.component.html',
  styleUrls: ['./litico.component.css'],
  providers: [LiticoService]
})
export class LiticoComponent implements OnInit {

  @Input()
  liticos: Litico[] = [];
  public url: string;

  constructor(
    private _liticoService: LiticoService,
    private _route:ActivatedRoute,
    private _router:Router
  ) { 
    this.url = Globallit.url
  }

  ngOnInit(): void {
  }

}







