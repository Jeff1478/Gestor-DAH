import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public usuario: any;

  constructor(private router: Router) {}  // 👈 ¡Faltaba esto!

  goToOrigenes() {
    this.router.navigate(['/pag-ori']);
  }
  fechaHoraActual: string = '';

  ngOnInit(): void {
    const nombreGuardado = localStorage.getItem('nombre') || 'Usuario';
    this.usuario = { nombre: nombreGuardado };

    const ahora = new Date();
    const opciones: Intl.DateTimeFormatOptions = {
    weekday: 'long', year: 'numeric', month: 'long',
    day: 'numeric', hour: '2-digit', minute: '2-digit'
  };
  this.fechaHoraActual = ahora.toLocaleString('es-CR', opciones);
  }
}
