import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PptComponent } from './ppt/ppt.component';
import { SalaJuegosComponent } from './sala-juegos/sala-juegos.component';
import { TatetiComponent } from './tateti/tateti.component';

const routes: Routes = [
  {path:'',
    children:[
     {path:'sala-juegos', component: SalaJuegosComponent},
     {path:'ppt', component: PptComponent},
     {path:'tateti', component: TatetiComponent},
     {path:'**', redirectTo:'sala-juegos'},
    ]
   }
 ];
 

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JuegosRoutingModule { }
