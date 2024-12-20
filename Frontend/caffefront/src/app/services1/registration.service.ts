import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Registration } from '../models/registration';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
serverurl="http://localhost:9009/registration"
  constructor(private http:HttpClient) { }

  getAll():Observable<Registration[]>{
   return this.http.get<Registration[]>(this.serverurl+"/registrations")
  }
  save(r:Registration):Observable<Registration>
  {
    return this.http.post<Registration>(this.serverurl+"/addreg",r)
  }
   
}
