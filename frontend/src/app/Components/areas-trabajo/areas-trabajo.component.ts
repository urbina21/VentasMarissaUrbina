import { Component, OnInit} from '@angular/core';
import {  areas_trabajo } from 'src/app/Interfaces/user';
import { DataService } from '../../Services/data.service';
import { ViewChild, ElementRef } from '@angular/core';
import * as XLSX from 'xlsx';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-areas-trabajo',
  templateUrl: './areas-trabajo.component.html',
  styleUrls: ['./areas-trabajo.component.css']
})
export class AreasTrabajoComponent implements OnInit{
  name = 'Areas-trabajo.xlsx';
TUser: any = [];
Empresalist: any;
Sucursallist: any;

  user: areas_trabajo = {
    idarea:null,
    idempresa: null,
    idsuc: null,
    area: null,
    fecha_creacion: null,
    estado: 'Activo'

  }

    constructor(private Data: DataService) { }
     ngOnInit(): void {
      this.getDropListEmpresa();
      this.getDropListSucursal();
      this.getUser();
  }

    @ViewChild('htmlData') htmlData!: ElementRef;
  filterPost = '';

      getUser() {
    this.Data.getAll('/areas_trabajo')
      .subscribe(res => {
          this.TUser = res;
        
        }, err => console.error(err));
  }

   AgregarValor(){
    delete this.user.idarea;   
    this.Data.save(this.user,'/areas_trabajo')
       .subscribe(
         res => {

this.getUser();
         },
         err => console.error(err)
       );
}
  EliminarData(id: number){
    this.Data.delete(id, '/areas_trabajo')
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
      PDF.save('areas-trabajo.pdf');
    });
  }

}

