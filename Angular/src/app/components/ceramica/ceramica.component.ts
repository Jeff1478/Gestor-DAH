import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { CeramicService } from 'src/app/services/ceramic.service';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { Ceramic } from 'src/app/models/ceramic';
import { Global } from 'src/app/services/global';


@Component({
  selector: 'app-ceramica',
  templateUrl: './ceramica.component.html',
  styleUrls: ['./ceramica.component.css'],
  providers: [CeramicService]
})
export class CeramicaComponent implements OnInit {
  public user:any;
  public ceramic!: Ceramic;
  public status!: string;
  public url: string;
  public is_edit: boolean;

  afuConfig = {
    uploadAPI: {
      url:Global.url+'upload-image'
    }
  };

  constructor(  private _route: ActivatedRoute,
    private _router: Router,
    private _ceramicService: CeramicService) {
    
     this.url = Global.url;
     this.is_edit = true;

    this.ceramic= {
      _id:'',
      date:'',
      image:'',
      title:'',
      content:'',
      cod_mon:'',
      num_artefacto: 0,
      num_caja: 0,
      proyecto:'',
      investigador:'',
      pro_year: 0,
      etiqueta:'',
      fecha_exc:'',
      id_contexto:'',
      contexto:'',
      ubicacion:'',
      foto:'',
      num_foto:'',
      calidad_foto:'',
      estado_foto:'',
      plano:'',
      num_lamina:'',
      calidad_lamina:'',
      estado_Lamina:'',
      diagnostico_contexto:'',
      fechamiento:'',
      tipo_pieza:'',
      desc_narrativa:'',
      apendices:'',
      soporte:'',
      ped_base:'',
      asa:'',
      vtdero:'',
      otro_soporte:'',
      desc_apendice:'',
      acabado_superficie:'',
      estilo_decorativo:'',
      color_pintura:'',
      pre_coc:'',
      post_coc:'',
      esgraf:'',
      ptdo:'',
      tira_apl:'',
      ptll:'',
      zna:'',
      rndo:'',
      acnlo:'',
      hddo:'',
      ptdopt:'',
      mdl:'',
      vertical:'',
      horizontal:'',
      zig_zag:'',
      panel:'',
      aisld:'',
      str:'',
      otro_nofig:'',
      head:'',
      suario:'',
      felino:'',
      batracio:'',
      ave:'',
      primate:'',
      murcielago:'',
      mamifero:'',
      turtle:'',
      reptil:'',
      pez:'',
      indt:'',
      txn_expl:'',
      investigador_zoo:'',
      cabeza_nofig:'',
      sau_nofig:'',
      feli_nofig:'',
      bat_nofig:'',
      erguida_nofig:'',
      prim_nofig:'',
      cabfigint:'',
      cabhoc:'',
      garra:'',
      otfigind:'',
      forma_funcion:'',
      marcas_uso:'',
      desc_marcas_uso:'',
      tipo_ceramico_grupo:'',
      ceramico_refz:'',
      periodo_ceramica:'',
      fase_ceramica:'',
      temporalidad_ceramica:'',
      procedencia_ceramica:'',
      estado_conservacion:'',
      potencial:'',
      potencial_exp:'',
      largo:'',
      ancho:'',
      alto:'',
      peso:'',
      nombre_invest:'',
      fecha_analisis:'',
      fotos_num:''
    };
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


