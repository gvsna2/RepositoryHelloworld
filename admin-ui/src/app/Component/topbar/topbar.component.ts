import { Component, OnInit } from '@angular/core';
import{AllServicesService} from '../../Service/AllServices/all-services.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  constructor(private service : AllServicesService,private router:Router) { }

  ngOnInit(): void {
  }

}
