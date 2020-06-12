import { Component, OnInit } from '@angular/core';

import {NgbCalendar, NgbDate, NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import {Router} from '@angular/router';


import {Client} from '../../models/client';

@Component({
  selector: 'app-testecron',
  templateUrl: './testecron.component.html',
  styles: [`
    .custom-day {
      text-align: center;
      padding: 0.185rem 0.25rem;
      border-radius: 0.25rem;
      display: inline-block;
      width: 2rem;
    }
    .custom-day:hover, .custom-day.focused {
      background-color: #e6e6e6;
    }
    .weekend {
      background-color: #f0ad4e;
      border-radius: 1rem;
      color: white;
    }
    .hidden {
      display: none;
    }
  `]
})
export class TestecronComponent implements OnInit  {
  model: NgbDateStruct;
  model2: NgbDateStruct;
  date: NgbDateStruct;
  searchInput;
  public show: boolean = false;
  public buttonName: any = 'Show';

  ListClients: Client[];
  constructor(private calendar: NgbCalendar , private router: Router) {
  }

  ngOnInit() {
    //this.testecronService.getAllClients().subscribe(data => {
      //console.log(data);
      //this.ListClients = data;
   // }, error => console.log(error) );

  }




  isDisabled = (date: NgbDate, current: {month: number, year: number}) => date.month !== current.month;
  isWeekend = (date: NgbDate) =>  this.calendar.getWeekday(date) >= 6;
  toggle() {
    this.show = !this.show;

    // CHANGE THE NAME OF THE BUTTON.
    if(this.show)
      this.buttonName = "Hide";
    else
      this.buttonName = "Show";
  }
}
