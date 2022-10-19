import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
all_data : any;
  constructor(private dataPortfolio:DataService) { }

  ngOnInit(): void {
    this.dataPortfolio.get_data().subscribe(data => {
      this.all_data = data;
    })
  }

}
