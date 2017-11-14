import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-json',
  templateUrl: './json.component.html',
  styleUrls: ['./json.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class JsonComponent implements OnInit, OnChanges {
  @Input('src') public src: string;
  @Input('map') public map: any;
  public mapfn: any;
  public value: Object;

  constructor(public http: HttpClient) { }

  ngOnInit() {
    if (!this.map) {
      this.map = 'value => value';
    }
    this.mapfn = eval(this.map);
    this.http.get(this.src)
    .map(this.mapfn)
    .subscribe(value => this.value = value);
  }
  ngOnChanges() {
  }
}
