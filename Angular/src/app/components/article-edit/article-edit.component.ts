import { Component, OnInit } from '@angular/core';
import { Ceramic } from 'src/app/models/ceramic';
import { Router, ActivatedRoute, Params} from '@angular/router';
import Swal from 'sweetalert2';
import { CeramicService } from 'src/app/services/ceramic.service';
import { Global } from 'src/app/services/global';

@Component({
  selector: 'app-article-edit',
  templateUrl: '../ceramica/ceramica.component.html',
  styleUrls: ['./article-edit.component.css'],
  providers: [CeramicService]
})
export class ArticleEditComponent implements OnInit {
  public ceramic: Ceramic;
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
    private _ceramicService: CeramicService
  ) {
    this.ceramic = new Ceramic( '', '','','','','',0,0,'','',0,'','','','','','','','','','','','','','','','','','','',
    '','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',
    '','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','');
    this.is_edit = true;
    this.page_title = 'Editar Articulo';
    this.url = Global.url;
      
   }

  ngOnInit() {
    this.getArticle();
  }

  OnSubmit(){
    
    this._ceramicService.update(this.ceramic._id, this.ceramic).subscribe(
      response => {
       if(response.status == 'success'){
         this.status = 'success';
         this.ceramic = response.ceramicUpdated; 
         
         Swal.fire('Artefacto Editado', 'Cambios Aplicados!', 'success')

         this._router.navigate(['/pagina']);
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

   
    this.ceramic.image=data.body.image;
    
  
    // this.ceramic.image = image_data.image;
  }

  getArticle() {
    this._route.params.subscribe(params => {
      let id = params ['id'];

      this._ceramicService.getCeramic(id).subscribe(
        response => {
          if(response.ceramic){
            this.ceramic = response.ceramic;
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
