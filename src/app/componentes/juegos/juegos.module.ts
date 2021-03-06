import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Routing
import { JuegosRoutingModule } from './juegos-routing.module';

// Componentes del modulos Juegos
import { PptComponent } from './ppt/ppt.component';
import { SalaJuegosComponent } from './sala-juegos/sala-juegos.component';
import { TatetiComponent } from './tateti/tateti.component';
import { NavbarMenuModule } from '../navbar-menu/navbar-menu.module';
import { FooterModule } from '../footer/footer.module';
import { ChatModule } from '../chat/chat.module';
import { MiJuegoComponent } from './mi-juego/mi-juego.component';
import { MemotestComponent } from './memotest/memotest.component';
import { ListadoComponent } from './listado/listado.component';
import { ListadoService } from 'src/app/servicios/listado.service';
import { EncuestaComponent } from './encuesta/encuesta.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PptComponent,
    SalaJuegosComponent,
    TatetiComponent,
    MiJuegoComponent,
    MemotestComponent,
    ListadoComponent,
    EncuestaComponent
  ],
  imports: [
    CommonModule,
    JuegosRoutingModule,
    NavbarMenuModule,
    FooterModule,
    ChatModule,
    ReactiveFormsModule
  ],
  providers: [
    ListadoService
  ]
})
export class JuegosModule { }
