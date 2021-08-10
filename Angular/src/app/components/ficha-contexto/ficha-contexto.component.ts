import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { ContextoService } from 'src/app/services/contexto.service';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { Contexto } from 'src/app/models/contexto';
import { GlobalC } from 'src/app/services/globalc';

@Component({
  selector: 'app-ficha-contexto',
  templateUrl: './ficha-contexto.component.html',
  styleUrls: ['./ficha-contexto.component.css'],
  providers: [ContextoService]
})
export class FichaContextoComponent implements OnInit {

  public user:any;
  public contexto!: Contexto;
  public status!: String;
  public url: String;
  public is_edit: boolean;
  values = [0, 1, 2, 3];
  calc = "Cementerio";
  afuConfig = {
    uploadAPI: {
      url:GlobalC.url+'upload-image'
    }
  };

  constructor(  private _route: ActivatedRoute,
    private _router: Router,
    private _contextoService: ContextoService) {
    
     this.url = GlobalC.url;
     this.is_edit = true;

    this.contexto= {
      _id: '',
     date:'',
     
      image: '',
       title: '',
       content: '',
       id_cont: '',
       proyecto: '',
       year_inv: 0,
       investigador: '',
      sector: '',
      ubicacion: '',
      operacion: '',
      suboperacion: '',
       desc_operacion: '',
       cont: '',
      diagnostico_contexto: '',
       tipo_contexto: '',
       otro_contexto: '',
       num_cem: '',
       num_basa: '',
       num_plaza: '',
      num_estruc: '',
       ind_conex: '',
       foto: '',
       num_foto: '',
      calidad_foto: '',
      estado_foto: '',
       planimetria: '',
       num_lamina: '',
       calidad_plano: '',
       estado_plano: '',
       coordenadas: '',
      crtm: '',
       profundidad: '',
       profundidad_datum: '',
       ubicacion_datum: '',
      existe_antro: '',
       estado_antro: '',
      tipo_enterramiento: '',
       forma_enterramiento: '',
       condicion: '',
       sexo: '',
       edad: 0,
       patologias: '',
       evidencia: '',
       fecha_existe: '',
       tecnica: '',
      material_fechado: '',
       asociacion_indv: '',
      asociacion_art: '',
       num_lab: '',
      fecha_conv: '',
       fecha_calb: '',
      valoracion_fecha: '',
       explique_fecha: '',
      otras_muestras: '',
       estado_muestras: '',
       cera_existe: '',
       cera_cant: '',
       id_artef_cera: '',
       litica_existe: '',
       litica_cant: '',
       id_litica: '',
       metal_existe: '',
      metal_cantidad: '',
       metal_id: '',
      madera_existe: '',
       madera_cantidad: '',
       madera_id: '',
       fauna_existe: '',
       fauna_cantidad: '',
       fauna_id: '',
       otros_existe: '',
       otros_cantidad: '',
       otros_id: '',
       verifica_si: '',
      inves_verifica: '',
       fecha_verifica: '',
       resultados_verifica: '',
       revisor_documental: '',
       fecha_revision: '' 
    };
  }

  ngOnInit(): void {
  }

  OnSubmit(){

    this._contextoService.create(this.contexto).subscribe(
      
      response => {
       if(response.status == 'success'){
         this.status = 'success';
         this.contexto = response.contexto;
      
 
           Swal.fire('Artefacto Creado', 'Guardado Correctamente!', 'success')
       
        
         this._router.navigate(['/peliculas']);
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
  }