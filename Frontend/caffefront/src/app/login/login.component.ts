import { Component } from '@angular/core';
import { Registration } from '../models/registration';
import { RegistrationService } from '../services1/registration.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  reg:Registration=new Registration()

  constructor(private regserve:RegistrationService,private router:Router)
  {

  }
  submitdata()
 {
      this.regserve.login(this.reg.emailid,this.reg.password).subscribe(data=>{
        if(data.length>0)
        {
          alert("login successful")
          localStorage.setItem("emailid",this.reg.emailid)
          localStorage.setItem("usertype","user")
          this.router.navigate(["/"])
        }
        else{
          alert("invalid email or password")
        }
      })
    }
  }
  
