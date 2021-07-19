import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params  } from '@angular/router';
import { CeramicService } from 'src/app/services/ceramic.service';
import {Ceramic} from '../../models/ceramic';
import { Global } from 'src/app/services/global';
import Swal from 'sweetalert2';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

//declare let pdfMake:any;


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  providers: [CeramicService]
})
export class ArticleComponent implements OnInit {

  public url: string;
  public ceramic!: Ceramic;

  constructor(
   
    private _ceramicService: CeramicService,
    private _route:ActivatedRoute,
    private _router:Router, )
  { 
    this.url = Global.url;

   
  }
   

  sendToPdf(){
    const data = document.getElementById("htmlData") as HTMLCanvasElement;
    console.log(data);
    const doc = new jsPDF('p', 'pt', 'a4');
    
    html2canvas(data).then((canvas) => {

      const img = canvas.toDataURL('image/PNG');

      // Add image Canvas to PDF
      const bufferX = 15;
      const bufferY = 15;
      const imgProps = (doc as any).getImageProperties(img);
      const pdfWidth = doc.internal.pageSize.getWidth() - 2 * bufferX;
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      doc.addImage(img, 'PNG', bufferX, bufferY, pdfWidth, pdfHeight, undefined, 'FAST');
      return doc;
    }).then((docResult) => {
      docResult.save(`${new Date().toISOString()}_tutorial.pdf`);
    });
  }
  
  
    


  ngOnInit() {
  
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

        this._ceramicService.delete(id).subscribe(
          response => {

            this._router.navigate(['/pagina']);
          },
          error => {
            console.log(error);
            this._router.navigate(['/pagina']);
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

}






