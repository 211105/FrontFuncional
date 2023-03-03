import '../stylesheets/FormSigin.css'
import { Link } from "react-router-dom";
import iconUser from '../stylesheets/icon/user.png'
import { useForm } from 'react-hook-form';
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'


const FormSigin = () => {

  const navigate = useNavigate()
  


  const { register, handleSubmit, formState: { errors } } = useForm();

  const sendValiud = (value) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "email": value.email
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("http://localhost:3001/api/user/valid", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));

  }

  const onSubmit = value => {

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "name": value.name,
      "email": value.email,
      "password": value.password
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("http://localhost:3001/api/user/create", requestOptions)
      .then(response => response.text())
      .then(result => {
        if (result === "creado") {
          Swal.fire({
            title: 'registrado',
            text: "se a registrado con exito solo verifique su cuenta le llegara un correo a su correo para confirmar",
            icon: 'success',
            confirmButtonText: 'OK'
          })
        }
      })
      .catch(error => {
        Swal.fire({
          title: 'Error!',
          text: "sucedio un error inesperado regrersa mas tarde",
          icon: 'error',
          confirmButtonText: 'Cool'
        })
      });
      sendValiud(value)
    navigate('/');
  }



  return (
    <div className="container-FormSigin">
      <div className="icon-FormSigin"><img src={iconUser}></img></div>
      <form className="form-FormSigin" onSubmit={handleSubmit(onSubmit)}>
        <div className="input-email-FormSigin">
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
          <div className='error-input-email'>{errors.email && <p>{errors.email.message}</p>}</div>
        </div>
        <div className="input-name-FormSigin">
          <input type="text" autoComplete="off" name="name" placeholder="name"
            {...register("name", {
              required: {
                value: true,
                message: "Necesitas este campo"
              }
            })}
          />
          <div className='error-input-name'>{errors.name && <p>{errors.name.message}</p>}</div>
        </div>
        <div className="input-password-FormSigin">
          <input type="password" name="password" placeholder="password"
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
          <div className='error-input-password'>{errors.password && <p>{errors.password.message}</p>}</div>
        </div>
        <div className="container-buttons-FormSigin">
          <div className="button-FormSigin">
            <button type='submit'>Sigin</button>
          </div>
          <Link to={"/"}>
            <div className='Link-FormSigin'>
              Cancelar
            </div>
          </Link>

        </div>
      </form>
    </div>
  )
}


export default FormSigin 