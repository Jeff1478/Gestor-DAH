import { Component, OnInit } from '@angular/core';
import { Ceramic } from 'src/app/models/ceramic';
import { CeramicaComponent } from '../ceramica/ceramica.component';
import Swal from 'sweetalert2';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { CeramicService } from 'src/app/services/ceramic.service';
import { Global } from 'src/app/services/global';

@Component({
  selector: 'app-article-new',
  templateUrl: './article-new.component.html',
  styleUrls: ['./article-new.component.css'],
  providers: [CeramicService]
})
export class ArticleNewComponent implements OnInit {
  public ceramic!: Ceramic;
  public status!: string;
  public user:any;
  public page_title!: string;
  public is_edit: boolean;
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
    // this.ceramic = new Ceramic( '', '','',null,null);
    this.is_edit = true;
    this.page_title = 'Crear Articulo';
    this.url = Global.url;
      
   }

  ngOnInit(): void {
  }

  OnSubmit(){
    
   this._ceramicService.create(this.ceramic).subscribe(
     response => {
      if(response.status == 'success'){
        this.status = 'success';
        this.ceramic = response.ceramic;
     

          Swal.fire('Artefacto Creado', 'Guardado Correctamente!', 'success')
      
       
        this._router.navigate(['/pagina']);
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

}
