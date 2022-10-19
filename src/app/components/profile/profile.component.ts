import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  all_data: any;
  constructor(private dataPorfolio: DataService) { }

  ngOnInit(): void {
    this.dataPorfolio.get_data().subscribe(data => {
      console.log(data);
      this.all_data = data;
    });
  }
}
