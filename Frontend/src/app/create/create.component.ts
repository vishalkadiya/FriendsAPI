import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../user.model';
import { UserService } from '../user.service';
// import { UserService } from '../user.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers:  [ UserService ]
})
export class CreateComponent implements OnInit {

  firstname: any;
  lastname: any;
  address:any;
  image:any;
  mobilenum: any;
  email:any;
  user: User = new User();
  isAdded = false;
  constructor(private userService:UserService,private router:Router){}
  userForm!: FormGroup;          
  
  ngOnInit() {
    this.userForm = new FormGroup({
      userType: new FormControl(),
      firstname: new FormControl('', [Validators.required]),
      lastname: new FormControl('', [Validators.required]),     
      address: new FormControl('', [Validators.required]),
      image: new FormControl('', [Validators.required]),
      mobilenum: new FormControl('', [Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
      email: new FormControl('', [Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
    });
  }

  onSubmit(firstname:string,lastname:string,address:string,image:string,mobilenum:string,email:string){

    this.user.firstname = this.firstname;
    this.user.lastname = this.lastname;
    this.user.address = this.address;
    this.user.image = this.image;
    this.user.mobilenum = this.mobilenum;
    this.user.email = this.email;
    this.save();
   
  }

  save(){
    this.userService.addUser(this.user)
                    .subscribe(user=> {console.log(user);
                      this.isAdded = true;
                    }, error=>console.log(error))

                    alert("DATA SAVED SUCCESSFULLY");
                    this.router.navigateByUrl("/signin");

  }
  resetUserForm(){
    this.isAdded = false;
    this.userForm.reset();
  }

}
