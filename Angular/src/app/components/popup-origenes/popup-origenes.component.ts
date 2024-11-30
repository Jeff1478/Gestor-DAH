import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-popup-origenes',
  templateUrl: './popup-origenes.component.html',
  styleUrls: ['./popup-origenes.component.css']
})

export class PopupOrigenesComponent implements OnInit {


  

  constructor(
     
      private dialogRef: MatDialogRef<PopupOrigenesComponent>,
      ) {
  }

  ngOnInit() {

  }


  

  close() {
      this.dialogRef.close();
  }

}

  

