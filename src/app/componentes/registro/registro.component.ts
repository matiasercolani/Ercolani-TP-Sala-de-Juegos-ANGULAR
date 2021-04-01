import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';


import { UsuarioModel } from 'src/app/models/usuario.model';
import { AuthService } from 'src/app/servicios/auth.service';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  usuario: UsuarioModel;
  recordarme = false;

  constructor(private auth: AuthService,
              private router: Router) { }

  ngOnInit(){
    this.usuario = new UsuarioModel();
  }

  onSubmit(form:NgForm){
    if(form.invalid){
      return;
    }

    //* Sweetalert
    Swal.fire({  
      allowOutsideClick: false, 
      icon: 'info', 
      text: 'Espera por Favor..'
    }); 
    
    Swal.showLoading();
  

    this.auth.nuevoUsuario(this.usuario).subscribe(resp=>{
  
    console.log(resp);
    Swal.close();

    if(this.recordarme){
      localStorage.setItem('email', this.usuario.email);
    }

    this.router.navigateByUrl('/home');
  
  }, (err) => {
    // console.log(err.error.error.message);
    Swal.fire({  
      icon: 'error', 
      title: 'Error al autenticar',
      text: err.error.error.message
    }); 
    });
  }

}
