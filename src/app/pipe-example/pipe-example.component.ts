import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-example',
  templateUrl: './pipe-example.component.html',
  styleUrls: ['./pipe-example.component.css']
})
export class PipeExampleComponent implements OnInit {


  dateToday : string;
  name: string;
  today: number;

  constructor() { }

  ngOnInit(): void {

    this.today = Date.now();
    this.dateToday = new Date().toString();
    this.name = "Shubham";
  }

}
