import { UsrActualService } from './../servicios/usr-actual.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-admin',
  templateUrl: './menu-admin.component.html',
  styleUrls: ['./menu-admin.component.css']
})
export class MenuAdminComponent implements OnInit {

  constructor(public usuario: UsrActualService) { }

  ngOnInit(): void {
  }

}
