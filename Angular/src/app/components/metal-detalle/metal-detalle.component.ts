import { Component, OnInit } from '@angular/core';
import { MetalicoService } from 'src/app/services/metalico.service';
import { Metalico } from 'src/app/models/metalico';
import { GlobalM } from 'src/app/services/globalmet';
import { Router, ActivatedRoute, Params  } from '@angular/router';
import domtoimage from 'dom-to-image';
import jsPDF from 'jspdf';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-metal-detalle',
  templateUrl: './metal-detalle.component.html',
  styleUrls: ['./metal-detalle.component.css'],
  providers: [MetalicoService]
})


export class MetalDetalleComponent implements OnInit {
 
  public metalico!: Metalico;
  public url: string;
  public page_title!: string;

  constructor(
    private _metalicoService: MetalicoService,
    private _route:ActivatedRoute,
    private _router:Router
  ) {
    this.url = GlobalM.url
    this.page_title = 'Metalico';
   }


   exportPdf() {
    
    const div : any = document.getElementById('htmlData');
    const options = { background: 'white',  height: 2470, width: 1265 };
    domtoimage.toPng(div, options).then((dataUrl: any) => {
      //Initialize JSPDF
      const doc = new jsPDF('p', 'pt', 'a4',true);
      const bufferX = 15;
      const bufferY = 15;
      var width = doc.internal.pageSize.getWidth()- 2 * bufferX;;
     
     var height = (doc.internal.pageSize.getHeight() * width) / width;
      var height2 = height*2-200;
      
      doc.addImage(dataUrl, 'PNG', 0, 0, width, height2,'FAST');
      doc.save(this.metalico._id + '.pdf');
    })
  }

  delete(id: any) {

    Swal.fire({

      title: 'Esta seguro de Borrar?',

      text: 'No podra recuperar el artefacto!',

      icon: 'warning',

      showCancelButton: true,

      confirmButtonText: 'Si, Borrar!',

      cancelButtonText: 'No, Mantener'

    }).then((result) => {

      if (result.value) {

        this._metalicoService.delete(id).subscribe(
          response => {

            this._router.navigate(['/pag-met']);
          },
          error => {
            console.log(error);
            this._router.navigate(['/pag-met']);
          }

        );

        Swal.fire(

          'Borrado!',

          'El artefacto ha sido borrado.',

          'success'

        )

      } else if (result.dismiss === Swal.DismissReason.cancel) {

        Swal.fire(

          'Cancelado',

          'Su Artefacto se mantiene',

          'error'

        )

      }

    })

  }

   ngOnInit() {
  
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