import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CeramicService } from 'src/app/services/ceramic.service';
import { ContextoService } from 'src/app/services/contexto.service';
import { LiticoService } from 'src/app/services/litico.service';
import { MetalicoService } from 'src/app/services/metalico.service';



@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  providers: [CeramicService,ContextoService,LiticoService,MetalicoService]
})
export class SidebarComponent implements OnInit {
  
  public searchString!: string;
  @Input() titulo!: string;

  constructor(
    private _ceramicService: CeramicService,
    private _contextoService: ContextoService,
    private _liticoService: LiticoService,
    private _metalicoService: MetalicoService,
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

  goSearchLit(){
    this._router.navigate(['/buscarlitico', this.searchString]);
  }

  goSearchMet(){
    this._router.navigate(['/buscarmetalico', this.searchString]);
  }
}
