import { Component, OnInit} from '@angular/core';
import {  tipousuario } from 'src/app/Interfaces/user';
import { DataService } from '../../Services/data.service';
import { ViewChild, ElementRef } from '@angular/core';
import * as XLSX from 'xlsx';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-tipousuario',
  templateUrl: './tipousuario.component.html',
  styleUrls: ['./tipousuario.component.css']
})
export class TipousuarioComponent implements OnInit {
  name = 'tipousuario.xlsx';
    TUser: any = [];
    Empresalist: any;

  user: tipousuario = {
    idtpusuario: null,
    idempresa: null,
    tipo: null,
    estado: 'Activo'
  }

    constructor(private Data: DataService) { }
     ngOnInit(): void {
      this.getUser();
      this.getDropListEmpresa();
  }
  @ViewChild('htmlData') htmlData!: ElementRef;
  filterPost = '';
  
      getUser() {
    this.Data.getAll('/tipousuario')
      .subscribe(res => {
          this.TUser = res;
        
        }, err => console.error(err));
  }

   AgregarValor(){
    delete this.user.idtpusuario;   
    this.Data.save(this.user,'/tipousuario')
       .subscribe(
         res => {

this.getUser();
         },
         err => console.error(err)
       );
}
  EliminarData(id: number){
    this.Data.delete(id, '/tipousuario')
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
      PDF.save('tipousuario.pdf');
    });
  }
}

