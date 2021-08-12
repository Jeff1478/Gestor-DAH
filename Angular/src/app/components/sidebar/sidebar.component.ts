import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CeramicService } from 'src/app/services/ceramic.service';
import { ContextoService } from 'src/app/services/contexto.service';
import {Ceramic} from '../../models/ceramic';
import { Contexto } from 'src/app/models/contexto';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  providers: [CeramicService,ContextoService]
})
export class SidebarComponent implements OnInit {
  public ceramic!: Ceramic;
  public contexto!: Contexto;
  public searchString!: string;
  @Input() titulo!: string;

  constructor(
    private _ceramicService: CeramicService,
    private _contextoService: ContextoService,
    private _router: Router,
    private _route: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  goSearch(){
    this._router.navigate(['/buscar', this.searchString]);
  }

  goSearchCont(){
    this._router.navigate(['/buscarcontexto', this.searchString]);
  }
}
