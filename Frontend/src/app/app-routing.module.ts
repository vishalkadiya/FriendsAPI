import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { ShowDataComponent } from './show-data/show-data.component';
import { SigninComponent } from './signin/signin.component';

const routes: Routes = [
  {path: 'create', component: CreateComponent},
  {path: 'show', component: ShowDataComponent},
  {path: 'signin', component: SigninComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
