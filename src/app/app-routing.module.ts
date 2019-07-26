import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeRoutingModule } from './home/home-routing.module';
import { StudentsRoutingModule } from './students/students-routing.module';

const routes: Routes = [{
  path: '',
  redirectTo: 'home',
  pathMatch: 'full'
}, {
  path: 'home',
  loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
}, {
  path: 'students',
  loadChildren: () => import('./students/students.module').then(m => m.StudentsModule)
}, {
  path: '**',
  redirectTo: '',
  pathMatch: 'full'
}];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    HomeRoutingModule,
    StudentsRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }