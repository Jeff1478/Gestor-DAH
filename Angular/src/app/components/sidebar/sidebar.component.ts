import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CeramicService } from 'src/app/services/ceramic.service';
import {Ceramic} from '../../models/ceramic';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  providers: [CeramicService]
})
export class SidebarComponent implements OnInit {
  public ceramic!: Ceramic;
  public searchString!: string;
  @Input() titulo!: string;

  constructor(
    private _ceramicService: CeramicService,
    private _router: Router,
    private _route: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  goSearch(){
    this._router.navigate(['/buscar', this.searchString]);
  }
}
