import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { MetalicoService } from 'src/app/services/metalico.service';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { Metalico } from 'src/app/models/metalico';
import { GlobalM } from 'src/app/services/globalmet';

@Component({
  selector: 'app-ficha-metal',
  templateUrl: './ficha-metal.component.html',
  styleUrls: ['./ficha-metal.component.css'],
  providers: [MetalicoService]
})


export class FichaMetalComponent implements OnInit {

  
  public metalico!: Metalico;
  public status!: String;
  public url: String;
  public is_edit: boolean;
 
  afuConfig = {
    uploadAPI: {
      url:GlobalM.url+'upload-image'
    }
  };

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _metalicoService: MetalicoService
  ) { 
    this.url = GlobalM.url;
     this.is_edit = true;

    this.metalico= {
      _id: '',
     date:'',
      image: '',
      title: '',
      content: '',
      cod_mon: '',
      num_artefacto: 0,
      num_caja: 0,
      proyecto: '',
      investigador: '',
      pro_year: 0,
      etiqueta: '',
      fecha_exc: '',
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

       tipo_pieza: '',
    desc_narrativa: '',
    materia_prima: '',
    
    lineas: '',
    greca: '',
    elemento_secuencia: '',
    otro_nofig: '',
    cab_zoo: '',
    suario_zoo: '',
    felino_zoo: '',
    batracio_zoo: '',
    ave_zoo: '',
    primate_zoo: '',
    murcielago_zoo: '',
    mamifero_zoo: '',
    turtle_zoo: '',
    reptil_zoo: '',
    pez_zoo: '',
    armadillo_zoo: '',
    insecto_zoo: '',
    ciervo_zoo: '',
    canino_zoo: '',
    ind_zoo: '',
    tax_zoo: '',
    inv_zoo: '',
    cab_antro: '',
    cab_tocantro: '',
    masc_antro: '',
    atuendo_antro: '',
    cara_antro: '',
    sedente_antro: '',
    erguida_antro: '',
    supino_antro: '',
    escena_antro: '',
    genero_antro: '',
    anomalia_antro: '',
    cab_ind: '',
    cara_ind: '',
    otro_ind: '',
    uso_funcion: '',
    datos_funcionalidad: '',
    datos_func_exp: '',
    referencias_funcional: '',
    periodo_funcional:  '',
    fase_funcional: '',
    temporalidad_funcional: '',
    procedencia_funcional: '',
    estado_conservacion: '',
    potencial: '',
    potencial_exp: '',
    largo: '',
    ancho: '',
    alto: '',
    peso: '',
    nombre_invest: '',
    fecha_analisis: '',
    fotos_num: '' 
  };
}

  ngOnInit(): void {
  }

  OnSubmit(){

    this._metalicoService.create(this.metalico).subscribe(
      
      response => {
       if(response.status == 'success'){
         this.status = 'success';
         this.metalico = response.metalico;
      
 
           Swal.fire('Artefacto Creado', 'Guardado Correctamente!', 'success')
       
        
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
     
   
     // this.ceramic.image = image_data.image;
   }
  }
