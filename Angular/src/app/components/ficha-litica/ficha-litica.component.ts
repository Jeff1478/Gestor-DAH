import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { LiticoService } from 'src/app/services/litico.service';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { Litico } from 'src/app/models/litico';
import { Globallit } from 'src/app/services/globallit';


@Component({
  selector: 'app-ficha-litica',
  templateUrl: './ficha-litica.component.html',
  styleUrls: ['./ficha-litica.component.css'],
  providers: [LiticoService]
})
export class FichaLiticaComponent implements OnInit {

  
  public litico!: Litico;
  public status!: String;
  public url: String;
  public is_edit: boolean;
 
  afuConfig = {
    uploadAPI: {
      url:Globallit.url+'upload-image'
    }
  };

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _liticoService: LiticoService
  ) { 
    this.url = Globallit.url;
     this.is_edit = true;

    this.litico= {
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

    this._liticoService.create(this.litico).subscribe(
      
      response => {
       if(response.status == 'success'){
         this.status = 'success';
         this.litico = response.litico;
      
 
           Swal.fire('Artefacto Creado', 'Guardado Correctamente!', 'success')
       
        
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
     
   
     // this.ceramic.image = image_data.image;
   }
  }