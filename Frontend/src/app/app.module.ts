import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateComponent } from './create/create.component';
import { UserService } from './user.service';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AlluserComponent } from './alluser/alluser.component';
import { ShowDataComponent } from './show-data/show-data.component';
import { SigninComponent } from './signin/signin.component';
import { RequestlistComponent } from './requestlist/requestlist.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    AlluserComponent,
    ShowDataComponent,
    SigninComponent,
    RequestlistComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
