import { Component, OnInit} from '@angular/core';
import {  pagos } from 'src/app/Interfaces/user';
import { DataService } from '../../Services/data.service';
import * as XLSX from 'xlsx';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-pagos',
  templateUrl: './pagos.component.html',
  styleUrls: ['./pagos.component.css']
})
export class PagosComponent implements OnInit {
  name = 'Pagos.xlsx';
    TUser: any = [];
    Sucursallist: any;
    Empresalist: any;

  user: pagos = {
    idpago: null,
    idempresa: null,
    num_venta: null,
    idsuc: null,
    num_clie: null,
    userid: null,
    idfpago: null,
    fecha_pago: null,
    num_prod: null,
    cantidad: null,
    precio: null,
    isv: null,
    descuento: null,
    total: null,
    estado: 'Activo'
  }

    constructor(private Data: DataService) { }
     ngOnInit(): void {
      this.getUser();
      this.getDropListSucursal();
      this.getDropListEmpresa();
  }

      getUser() {
    this.Data.getAll('/pagos')
      .subscribe(res => {
          this.TUser = res;
        
        }, err => console.error(err));
  }

   AgregarValor(){
    delete this.user.idpago;   
    this.Data.save(this.user,'/pagos')
       .subscribe(
         res => {

this.getUser();
         },
         err => console.error(err)
       );
}
  EliminarData(id: number){
    this.Data.delete(id, '/pagos')
      .subscribe(
        res => {
          this.getUser();
        },
        err => console.error(err)
      );
  }

  getDropListEmpresa() {
    this.Data.getDropListEmpresa().subscribe((data:any)=>{
      this.Empresalist=data;
    })
  }

getDropListSucursal() {
    this.Data.getDropListSucursal().subscribe((data:any) => {
      this.Sucursallist = data;
    });
  }

  exportToExcel(): void {
    let element = document.getElementById('tabla');
    const worksheet: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);
    const book: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(book, worksheet, 'Sheet1');
    XLSX.writeFile(book, this.name);
  }
public openPDF(): void {
    let DATA: any = document.getElementById('tabla');
    html2canvas(DATA).then((canvas) => {
      let fileWidth = 208;
      let fileHeight = (canvas.height * fileWidth) / canvas.width;
      const FILEURI = canvas.toDataURL('image/png');
      let PDF = new jsPDF('p', 'mm', 'a4');
      let position = 0;
      PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
      PDF.save('pagos.pdf');
    });
  }
}
