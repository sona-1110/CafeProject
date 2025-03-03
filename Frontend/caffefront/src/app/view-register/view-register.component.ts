import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../services1/registration.service';
import { Registration } from '../models/registration';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-view-register',
  imports: [CommonModule],
  templateUrl: './view-register.component.html',
  styleUrl: './view-register.component.css'
})
export class ViewRegisterComponent implements OnInit{
  rarr:Registration[]=[]
  constructor(private rserv:RegistrationService)
  {

  }
  ngOnInit(): void {
    this.rserv.getAll().subscribe(data=>{
      if(data.length>0)
        this.rarr=data
    })
    }
    
  }


