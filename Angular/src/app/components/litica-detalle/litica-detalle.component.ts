import { Component, OnInit } from '@angular/core';
import { LiticoService } from 'src/app/services/litico.service';
import { Litico } from 'src/app/models/litico';
import { Globallit } from 'src/app/services/globallit';
import { Router, ActivatedRoute, Params  } from '@angular/router';
import domtoimage from 'dom-to-image';
import jsPDF from 'jspdf';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-litica-detalle',
  templateUrl: './litica-detalle.component.html',
  styleUrls: ['./litica-detalle.component.css'],
  providers: [LiticoService]
})
export class LiticaDetalleComponent implements OnInit {
 
  public litico!: Litico;
  public url: string;
  public page_title!: string;

  constructor(
    private _liticoService: LiticoService,
    private _route:ActivatedRoute,
    private _router:Router
  ) {
    this.url = Globallit.url
    this.page_title = 'Litico';
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
      doc.save(this.litico._id + '.pdf');
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

        this._liticoService.delete(id).subscribe(
          response => {

            this._router.navigate(['/pag-lit']);
          },
          error => {
            console.log(error);
            this._router.navigate(['/pag-lit']);
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