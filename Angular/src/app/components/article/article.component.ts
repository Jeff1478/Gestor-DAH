import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params  } from '@angular/router';
import { CeramicService } from 'src/app/services/ceramic.service';
import {Ceramic} from '../../models/ceramic';
import { Global } from 'src/app/services/global';
import Swal from 'sweetalert2';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import domtoimage from 'dom-to-image';




//declare let pdfMake:any;


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  providers: [CeramicService]
})
export class ArticleComponent implements OnInit {

  public url: string;
  public selec : string;
  public ceramic!: Ceramic;

  constructor(
   
    private _ceramicService: CeramicService,
    private _route:ActivatedRoute,
    private _router:Router, )
  { 
    this.url = Global.url;
    this.selec = '';

   
  }

  exportPdf() {
    
    const div : any = document.getElementById('htmlData');
    const options = { background: 'white',  height: 2470, width: 1265 };
    domtoimage.toPng(div, options).then((dataUrl: any) => {
      //Initialize JSPDF
      const doc = new jsPDF('p', 'pt', 'a4');
      const bufferX = 15;
      const bufferY = 15;
      var width = doc.internal.pageSize.getWidth()- 2 * bufferX;;
     // var height = doc.internal.pageSize.getHeight();
     var height = (doc.internal.pageSize.getHeight() * width) / width;
      var height2 = height*2;
      doc.addImage(dataUrl, 'PNG', 5, 0, width, height2);
      doc.save(this.ceramic._id + '.pdf');
    })
  }
   

  sendToPdf(){
    const data : any = document.getElementById("htmlData");
    const options = { background: 'white', height: 845, width: 595 };
    // console.log(data);
    domtoimage.toPng(data, options).then((dataUrl: any) => {
      const doc = new jsPDF('p', 'pt', 'a4');


      html2canvas(data, options).then((canvas) => {

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
        docResult.save(`${new Date().toISOString()}_ceramica.pdf`);
      });
    }
    )}

  openPDF(){
    const DATA : any = document.getElementById('htmlData');
      

    html2canvas(DATA).then(canvas => {
        
        let fileWidth = 208;
        let fileHeight = canvas.height * fileWidth / canvas.width;
        
        const FILEURI = canvas.toDataURL('image/png')
        let PDF = new jsPDF('p', 'mm', 'a4');
        let position = 0;
        PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight)
        
        PDF.save('angular-demo.pdf');
    });     
  }
 
htmlEntities(str: any) {
    return String(str).replace('true', 'X')           
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





