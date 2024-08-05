import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrl: './singup.component.css'
})
export class SingupComponent implements OnInit{

  public user={
    username : '',
    password : '',
    nombre : '',
    apellido : '',
    email : '',
    telefono : ''
  }

  constructor(private userService:UserService){}

  ngOnInit(): void {
  }

  formSubmit(){
    console.log(this.user);
    if(this.user.username == '' || this.user.username == null){
      alert('el nombre de usuario es reqierido');
      return;
    }
    this.userService.añadirUsuario(this.user).subscribe(
      (data)=>{
        console.log(data);
        alert('usuario guardado con exito');
      },(error)=>{
        console.log(error);
        alert('a ocurrido un error')

      }
    )

  }
}
