import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { TrayectoService } from 'src/app/services/trayecto.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  all_data: any;
  constructor(private trayectoPorfolio: TrayectoService) { }

  ngOnInit(): void {
   
  }
}
