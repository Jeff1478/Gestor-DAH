import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { AuthService } from 'src/app/services/auth.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import autoTable from 'jspdf-autotable';

@Component({
  selector: 'app-dashboard-estadisticas',
  templateUrl: './dashboard-estadisticas.component.html',
})
export class DashboardEstadisticasComponent implements OnInit {
  ingresosPorMes: any[] = [];

  // MatTableDataSource en lugar de array simple
  displayedColumns: string[] = ['usuario', 'nombre_usuario', 'total'];
  dataSource = new MatTableDataSource<any>();

  // Referencia al paginador en la vista
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private apiService: AuthService) {}

  ngOnInit(): void {
    this.apiService.getIngresosPorUsuario().subscribe(data => {
      this.dataSource.data = data;
      // Asignar el paginador después de que la tabla tenga datos
      setTimeout(() => this.dataSource.paginator = this.paginator);
    });

    this.apiService.getIngresosEstadisticas().subscribe(data => {
      this.ingresosPorMes = data.map(d => ({
        name: d._id,
        value: d.total
      }));
    });
  }

  exportarPDF() {
    const pdf = new jsPDF('p', 'mm', 'a4');
  
    // Título y subtítulo
    pdf.setFontSize(16);
    pdf.text('Estadísticas de Ingreso al Sistema', 105, 15, { align: 'center' });
  
    pdf.setFontSize(11);
    pdf.text('Reporte mensual y por usuario del sistema Orígenes', 105, 22, { align: 'center' });
  
    // Tabla generada directamente desde los datos
    autoTable(pdf, {
      startY: 30,
      head: [['Usuario', 'Nombre', 'Total Ingresos']],
      body: this.dataSource.data.map((row: any) => [
        row._id,
        row.nombre_usuario,
        row.total
      ]),
      styles: {
        fontSize: 10,
        cellPadding: 3
      },
      headStyles: {
        fillColor: [22, 160, 133],
        textColor: 255,
        halign: 'center'
      },
      bodyStyles: {
        halign: 'center'
      },
      alternateRowStyles: {
        fillColor: [245, 245, 245]
      },
      theme: 'striped',
      margin: { top: 10 }
    });
  
    pdf.save('estadisticas_ingresos.pdf');
  }
  
  
  
  
}
