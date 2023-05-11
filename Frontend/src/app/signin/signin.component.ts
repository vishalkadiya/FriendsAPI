import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { UserService } from '../user.service';
import { FormGroup,FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  private user = new User();
  public data : any;
  token! :string;
  constructor(private userService:UserService) { }

  ngOnInit(){
  }

  form = new FormGroup({  
    mobilenum: new FormControl('', [Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),  
    email: new FormControl('', [Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')])
  }); 

  getAccount(mno: string,email:string)  
  {  
    this.userService.getSignInDetails(mno,email).subscribe(  
      response => {  
        this.data = response; 
        console.log(response); 
        document.cookie="logincookie="+response.token;
        alert(document.cookie);
      }
    );  
      // this.userService.getMobile(mno).subscribe(  
      //   response => {  
      //     this.data = response;  
      //   }
      // );  
      // this.userService.getEmail(email).subscribe(  
      //   response => {  
      //     this.data = response;  
      //   }
      // );  
  } 

  searchForm(searchInfo:any)  
  {  
        this.user.mobilenum = searchInfo;
        this.user.email = searchInfo;
        this.getAccount(this.user.mobilenum,this.user.email);  
  } 

}
