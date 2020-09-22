import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

interface DataModel {
  letter: string;
  frequency: number;
}

@Component({
  selector: 'app-d3-page',
  templateUrl: './d3-page.component.html',
  styleUrls: ['./d3-page.component.scss']
})
export class D3PageComponent {
  data: Observable<DataModel>;

  constructor(private http: HttpClient) {
    this.data = this.http.get<DataModel>('../assets/d3data.json');
  }

}
