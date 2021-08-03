import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params  } from '@angular/router';
import { CeramicService } from 'src/app/services/ceramic.service';
import {Ceramic} from '../../models/ceramic';
import { Global } from 'src/app/services/global';
import Swal from 'sweetalert2';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import domtoimage from 'dom-to-image';

@Component({
  selector: 'app-reporte-publico',
  templateUrl: './reporte-publico.component.html',
  styleUrls: ['./reporte-publico.component.css'],
  providers: [CeramicService]
})
export class ReportePublicoComponent implements OnInit {

  public url: string;
  public ceramic!: Ceramic;

  constructor(
    private _ceramicService: CeramicService,
    private _route:ActivatedRoute,
    private _router:Router, 
  ) {
    this.url = Global.url;
   }

   exportPdf() {
    
    const div : any = document.getElementById('htmlData');
    const options = { background: 'white', height: 1024, width: 1265 };
    domtoimage.toPng(div, options).then((dataUrl: any) => {
      //Initialize JSPDF
      const doc = new jsPDF('p', 'pt', 'a4');
      var width = doc.internal.pageSize.getWidth();
      var height = doc.internal.pageSize.getHeight();
        
      //Add image Url to PDF
      doc.addImage(dataUrl, 'PNG', 5, 0, width, height);
      doc.save(this.ceramic._id + '.pdf');
    })
  }

  ngOnInit(){
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
