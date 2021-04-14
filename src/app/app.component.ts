import { Component, VERSION, ViewChild } from "@angular/core";
import { GlobvarService } from "./globvar.service";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular " + VERSION.major;

  nama = "";
  tanggal: string = "";

  dataid = 0;

  constructor(private variabelglobal: GlobvarService) {
    this.datadariglob = this.variabelglobal.getData();
  }

  clear() {
    this.nama = "";
    this.tanggal = "";
  }

  addData(nama, tgl) {
    this.variabelglobal.addData(nama, tgl);
    this.clear();
  }
  datadariglob: any;

  ngOnInit() {
    this.datadariglob = this.variabelglobal.getData();
  }

  update(data) {
    this.nama = data.name;
    this.tanggal = data.reminder;
    this.dataid = data.id;
  }
  updateClick() {
    this.datadariglob[this.dataid - 1].name = this.nama;
    this.datadariglob[this.dataid - 1].reminder = this.tanggal;
    this.clear();
  }
}
