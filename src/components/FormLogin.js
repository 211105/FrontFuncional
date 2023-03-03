import '../stylesheets/FormLogin.css'
import iconUser from '../stylesheets/icon/user.png'
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'

const FormLogin = () => {

const [status, setStatus] = useState("")


  const navigate = useNavigate()
  const { register, handleSubmit, formState: { errors } } = useForm();


  const onSubmit = value => {
    const data = value;

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "email": value.email,
      "password": value.password
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("http://localhost:3001/api/user/login", requestOptions)
      .then(response => response.json())
      .then(result => {
        switch (result.error) {
          case "Usuario no encontrado":
            Swal.fire({
              title: 'Error!',
              text: 'Usuario no encontrado',
              icon: 'error',
              confirmButtonText: 'Cool'
            })
            break;
          case "Usuario no verificado":
            Swal.fire({
              title: 'Error!',
              text: 'Usuario no verificado',
              icon: 'error',
              confirmButtonText: 'Cool'
            })
          break;
          case "contraseña no válida":
            Swal.fire({
              title: 'Error!',
              text: 'contraseña no válida',
              icon: 'error',
              confirmButtonText: 'Cool'
            })
          break;

          default:
            navigate('/dashboard');
            break;
        }
    })
      .catch(error => console.error);

  }


  return (
    <div className="container-FormLogin">
      <div className="icon-FormLogin"><img src={iconUser}></img></div>

      <form className="form-FormLogin" onSubmit={handleSubmit(onSubmit)}>
        <div className="input-email-FormLogin">
          <input type="email" autoComplete="off" name="email" placeholder="ejemplo@gmail.com"
            {...register("email", {
              required: {
                value: true,
                message: "Necesitas este campo"
              },
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "El formato no es correcto"
              }
            })}
          />
          <div className="error-input-email">{errors.email && <p>{errors.email.message}</p>}</div>
        </div>
        <div className="input-password-FormLogin" >
          <input type="password" name="password" placeholder="Contraseña"
            {...register("password", {
              required: {
                value: true,
                message: "El campo es requerido"
              },
              minLength: {
                value: 8,
                message: "La contraseña debe tener al menos 8 caracteres"
              },
              pattern: {
                value: /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=\S+$).{6,}$/i,
                message: "debe de contener mayusculas, numeros y algun caracter especial "
              }
            })}
          />
          <div className="error-input-password">{errors.password && <p>{errors.password.message}</p>}</div>
        </div>
        <div className="container-buttons-FormLogin">
          <div className="button-FormLogin">
            <button type='submit' >Login</button>
          </div>
          <div className="button-FormLogin">
            <Link to={"/sigin"}><button type='button'>Sigin</button></Link>

          </div>
        </div>

      </form>

      <div className='link-forgotpassword-Formlogin'>
        <div className='linka-div'><Link className='linka' to={"/forgetpassword"}>Forget the password</Link></div>
      </div>
    </div>
  )
}

export default FormLogin






