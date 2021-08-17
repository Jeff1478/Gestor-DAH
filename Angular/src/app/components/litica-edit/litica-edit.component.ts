import { Component, OnInit } from '@angular/core';
import { Litico } from 'src/app/models/litico';
import { Router, ActivatedRoute, Params} from '@angular/router';
import Swal from 'sweetalert2';
import { LiticoService } from 'src/app/services/litico.service';
import { Globallit } from 'src/app/services/globallit';

@Component({
  selector: 'app-litica-edit',
  templateUrl: '../ficha-litica/ficha-litica.component.html',
  styleUrls: ['./litica-edit.component.css'],
  providers: [LiticoService]
})
export class LiticaEditComponent implements OnInit {

  public litico: Litico;
  public status!: string;
  public user:any;
  public is_edit: boolean;
  public page_title: string;
  public url: string;

  afuConfig = {
    uploadAPI: {
      url:Globallit.url+'upload-image'
    }
};

  constructor( 
    private _route: ActivatedRoute,
    private _router: Router,
    private _liticoService: LiticoService) { 

      this.litico = new Litico( '', '','','','','',0,0,'','',0,'','','','','','','','','','','','','','','','','','','',
      '','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',
      '','','','','','','','','','','','','','','','','','','');
      this.is_edit = true;
      this.page_title = 'Editar Articulo';
      this.url = Globallit.url;
    }

  
  ngOnInit() {
    this.getArticle();
  }

  OnSubmit(){
    
    this._liticoService.update(this.litico._id, this.litico).subscribe(
      response => {
       if(response.status == 'success'){
         this.status = 'success';
         this.litico = response.liticoUpdated; 
         
         Swal.fire('Artefacto Editado', 'Cambios Aplicados!', 'success')

         this._router.navigate(['/pag-lit']);
       
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

   
    this.litico.image=data.body.image;
    
  
    
  }

  getArticle() {
    this._route.params.subscribe(params => {
      let id = params ['id'];

      this._liticoService.getLitico(id).subscribe(
        response => {
          if(response.litico){
            this.litico = response.litico;
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

