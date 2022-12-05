import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/trayecto.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
all_data : any;
  constructor() { }

  ngOnInit(): void {
  
  }

}
