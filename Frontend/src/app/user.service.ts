import { User } from './user.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { Signin } from './signin';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  getAccount(mno: string, email: string) {
    throw new Error('Method not implemented.');
  }

  private baseUrl = 'http://localhost:8080/api/user/'; 
  constructor(private http: HttpClient) { }

  public addUser(user: User): Observable<User>{
    // debugger;
    return this.http.post<User>(this.baseUrl, user);
  }

  getData(name:string)  : Observable<User[]>
  {  
    let url = this.baseUrl + `get/${name}`;  
    return this.http.get<User[]>(url);  
  }

  getSignInDetails(mno:string,email:string): Observable<Signin>
  {
    let url = this.baseUrl + `getmobileno/${mno}/getemail/${email}`;  
    return this.http.get<Signin>(url);
  }


  private handleError(httpError: HttpErrorResponse) {
    if (httpError.error instanceof ErrorEvent) {
      
      console.error('An error occurred:', httpError.error.message);
    } else {
      
      console.error(
        `Backend returned code ${httpError.status}, ` +
        `body was: ${httpError.error}`);
    }
    
    return throwError('Something bad happened; please try again later.');
  }


  addConnection(token:string,email:string):Observable<Request>
  {
    let url = this.baseUrl + `token/${token}/email/${email}`;  
    return this.http.get<Request>(url);
  }

 
}