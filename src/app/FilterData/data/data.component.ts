import { Component, OnInit } from '@angular/core';
import { RecordService } from '../record.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  records: any;
  firstname: any;
  key: any = 'id';
  reverse: boolean = false;
  pno: number = 1;

  constructor(
    private service: RecordService
  ) { }

  ngOnInit(): void {
    this.getDetails();
  }

  getDetails() {
    this.service.getDetails().subscribe((response: any) => {
      console.log(response);
      this.records = response;
    })
  }

  searchValue() {
    if (this.firstname == '') {
      this.ngOnInit();
    } else {
      this.records = this.records.filter((res: any) => {
        return res.firstname.toLocaleLowerCase().match(this.firstname.toLocaleLowerCase())
      })
    }
  }

  sortRecords(key: any) {
    this.key = key;
    this.reverse = !this.reverse;
  }
}
