import { Injectable } from "@angular/core";

@Injectable()
export class GlobvarService {
  constructor() {}
  void = 1;
  datatambah: any;

  private Data = [
    {
      id: 1,
      name: "sadsd",
      is_complete: false,
      reminder: "2020-12-07T12:40:00Z"
    },
    {
      id: 2,
      name: "aksdajk",
      is_complete: true,
      reminder: "2020-12-07T12:46:00Z"
    },
    {
      id: 3,
      name: "lalala",
      is_complete: false,
      reminder: null
    },
    {
      id: 4,
      name: "lalala",
      is_complete: false,
      reminder: null
    },
    {
      id: 5,
      name: "tes1",
      is_complete: false,
      reminder: null
    },
    {
      id: 6,
      name: "tes2",
      is_complete: false,
      reminder: "2020-12-12T10:58:00Z"
    },
    {
      id: 7,
      name: "tes5",
      is_complete: false,
      reminder: null
    },
    {
      id: 8,
      name: "tes5",
      is_complete: false,
      reminder: null
    },
    {
      id: 9,
      name: "tes5",
      is_complete: false,
      reminder: null
    },
    {
      id: 10,
      name: "tes5",
      is_complete: false,
      reminder: null
    },
    {
      id: 11,
      name: "tes5",
      is_complete: false,
      reminder: null
    },
    {
      id: 12,
      name: "qqq",
      is_complete: true,
      reminder: "2021-01-15T11:35:00Z"
    },
    {
      id: 13,
      name: "rw",
      is_complete: false,
      reminder: "2021-01-20T11:43:00Z"
    },
    {
      id: 14,
      name: "rw",
      is_complete: false,
      reminder: "2021-01-20T11:43:00Z"
    },
    {
      id: 15,
      name: "qqq",
      is_complete: true,
      reminder: "2021-01-15T11:35:00Z"
    },
    {
      id: 16,
      name: "test_api 1",
      is_complete: false,
      reminder: "2021-01-28T12:05:00Z"
    }
  ];

  public getData() {
    return this.Data;
  }

  public addData(pnama, ptanggal) {
    this.datatambah = {
      id: this.void,
      name: pnama,
      is_completed: false,
      reminder: ptanggal
    };
    this.Data.push(this.datatambah);
    this.void++;
  }

  public updateData(dataupdate) {
    this.Data = dataupdate;
  }
}
