import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { Patient } from './Patient';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  patient: Patient;
  successMessage: String;
  errorMessage: string;
  patientLoginForm: FormGroup;

  constructor(private fb:FormBuilder, private service:LoginService,private router:Router) {

  }

  ngOnInit(): void {
    this.patient=new Patient();
    this.patientLoginForm = this.fb.group({
      patientEmailid: ['', [Validators.required], null],
      patientPassword: ['', [Validators.required], null]
  });
  }

  patientLogin() {
    // console.log("ABCS")
    this.successMessage=null;
    this.errorMessage=null;
    // this.patient=this.patientLoginForm.value as Patient;
    this.service.patientLogin(this.patientLoginForm.value).subscribe(
      
      (response)=>this.successMessage="Login successful"+response.patientName,
      // this.router.navigate['display']},
        (error)=>this.errorMessage=error.error.message
    )
  }

}



// patientlogin()


// this.successMessage=null;
// this.errorMessage=null;
// console.log(this.successMessage);
// this.service.patientLogin(this.patientLoginForm.value).subscribe(
//   (response) => {
//     this.successMessage = response;
//     console.log("success");
//   },
//  (error) =>{ this.errorMessage = error.error.text;  console.log(this.errorMessage);}
// )

// ngonInit

// this.patientLoginForm = this.fb.group({
//   patientEmailid: ['',Validators.required],
//   patientPassword: ['',Validators.required]
// })