import { Component, OnInit } from '@angular/core';
import { Metalico } from 'src/app/models/metalico';
import { Router, ActivatedRoute, Params} from '@angular/router';
import Swal from 'sweetalert2';
import { MetalicoService } from 'src/app/services/metalico.service';
import { GlobalM } from 'src/app/services/globalmet';

@Component({
  selector: 'app-metal-edit',
  templateUrl: '../ficha-metal/ficha-metal.component.html',
  styleUrls: ['./metal-edit.component.css'],
  providers: [MetalicoService]
})


export class MetalEditComponent implements OnInit {

  public metalico: Metalico;
  public status!: string;
  public user:any;
  public is_edit: boolean;
  public page_title: string;
  public url: string;

  afuConfig = {
    uploadAPI: {
      url:GlobalM.url+'upload-image'
    }
};

  constructor( 
    private _route: ActivatedRoute,
    private _router: Router,
    private _metalicoService: MetalicoService) { 

      this.metalico = new Metalico( '', '','','','','',0,0,'','',0,'','','','','','','','','','','','','','','','','','','',
      '','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',
      '','','','','','','','','','','','','','','','','','','');
      this.is_edit = true;
      this.page_title = 'Editar Articulo';
      this.url = GlobalM.url;
    }

  
  ngOnInit() {
    this.getArticle();
  }

  OnSubmit(){
    
    this._metalicoService.update(this.metalico._id, this.metalico).subscribe(
      response => {
       if(response.status == 'success'){
         this.status = 'success';
         this.metalico = response.liticoUpdated; 
         
         Swal.fire('Artefacto Editado', 'Cambios Aplicados!', 'success')

         this._router.navigate(['/pag-met']);
       
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

   
    this.metalico.image=data.body.image;
    
  
    
  }

  getArticle() {
    this._route.params.subscribe(params => {
      let id = params ['id'];

      this._metalicoService.getMetalico(id).subscribe(
        response => {
          if(response.metalico){
            this.metalico = response.metalico;
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

