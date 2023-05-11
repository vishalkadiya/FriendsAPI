import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { UserService } from '../user.service';
import { FormGroup,FormControl } from '@angular/forms';
@Component({
  selector: 'app-show-data',
  templateUrl: './show-data.component.html',
  styleUrls: ['./show-data.component.css']
})
export class ShowDataComponent implements OnInit {

  private user = new User();
  public data : any;
  token! : string;
  email! : string;
  constructor(private userService:UserService) { }

  ngOnInit() {
  var array = document.cookie.split("=");
    this.token = array[1];
    console.log(this.token)
  }
  
  form = new FormGroup({  
    
    firstname: new FormControl(),  
    lastname: new FormControl(),  
    address: new FormControl(),  
    image: new FormControl(),  
    mobilenum: new FormControl(),  
    email: new FormControl()
  });  

  getData(fname: string)  
  {  
      this.userService.getData(fname).subscribe(  
        response => {  
          this.data = response;  
        }
      );  
  }  
  
  searchForm(searchInfo:any)  
  {  
        this.user.firstname = searchInfo;
        this.getData(this.user.firstname);  
  } 
  sendRequest()
  {
    
    this.userService.addConnection(this.token,this.email  )
    alert(this.token);
  }
}
