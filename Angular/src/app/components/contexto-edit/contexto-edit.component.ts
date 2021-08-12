import { Component, OnInit } from '@angular/core';
import { Contexto } from 'src/app/models/contexto';
import { Router, ActivatedRoute, Params} from '@angular/router';
import Swal from 'sweetalert2';
import { ContextoService } from 'src/app/services/contexto.service';
import { Global } from 'src/app/services/global';

@Component({
  selector: 'app-contexto-edit',
  templateUrl: '../ficha-contexto/ficha-contexto.component.html',
  styleUrls: ['./contexto-edit.component.css'],
  providers: [ContextoService]
})


export class ContextoEditComponent implements OnInit {
  public contexto: Contexto;
  public status!: string;
  public user:any;
  public is_edit: boolean;
  public page_title: string;
  public url: string;

  afuConfig = {
    uploadAPI: {
      url:Global.url+'upload-image'
    }
};

  

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _contextoService: ContextoService
  ) {
    this.contexto = new Contexto( '', '','','','','', '',0,'','','','','','','','','','','','','','','','','','','','','','',
    '','','','','','','','','','','','',0,'','','','','','','','','','','','','','','','','','','','','',
    '','','','','','','','','','','','','','','','','');
    this.is_edit = true;
    this.page_title = 'Editar Articulo';
    this.url = Global.url;
      
   }

  ngOnInit() {
    this.getArticle();
  }

  OnSubmit(){
    
    this._contextoService.update(this.contexto._id, this.contexto).subscribe(
      response => {
       if(response.status == 'success'){
         this.status = 'success';
         this.contexto = response.contextoUpdated; 
         
         Swal.fire('Artefacto Editado', 'Cambios Aplicados!', 'success')

         this._router.navigate(['/peliculas']);
        //  this._router.navigate(['/pagina/ceramic', this.ceramic._id]);
       }else{
         this.status = 'error'
       }
      },
      error => {
       console.log(error);
       this.status = 'error';
      }
    );
   }

  imageUpload(data: any){
    
    console.log(data);

    // let image_data = JSON.parse(data.response);

   
    this.contexto.image=data.body.image;
    
  
    // this.ceramic.image = image_data.image;
  }

  getArticle() {
    this._route.params.subscribe(params => {
      let id = params ['id'];

      this._contextoService.getContexto(id).subscribe(
        response => {
          if(response.contexto){
            this.contexto = response.contexto;
          }else{
            this._router.navigate(['/home']);
          }
        },
        error => {
          console.log(error);
          this._router.navigate(['/home']);
        }
      );
    });
  }

}

