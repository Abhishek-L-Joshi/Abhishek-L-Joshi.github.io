import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Patient } from './Patient';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  patientLogin(patient: Patient) : Observable<Patient> {
    return <Observable<Patient>>this.http.post('http://localhost:3333/Cancer/patientAPI/patientLogin', patient);
  }
}
