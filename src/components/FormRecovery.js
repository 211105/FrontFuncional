import '../stylesheets/FormRecovery.css'
import { useForm } from 'react-hook-form';
import React, { useState, useEffect } from "react";
import Swal from 'sweetalert2'



const FormRecovery = () => {
  const [messageP, setMessageP] = useState("")

  const querystring = window.location.search
const params = new URLSearchParams(querystring)

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = value => {


    if (value.password1 === value.password2 && value.password2 === value.password1) {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify({
        "email": params.get('email'),
        "password": value.password1
      });

      var requestOptions = {
        method: 'PUT',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };

      fetch("http://localhost:3001/api/user/update", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
      Swal.fire({
        title: 'contraseña restablecida!',
        text: 'Listo se a restablecido tu contraseña',
        icon: 'success',
        confirmButtonText: 'OK'
      })
    } else {
      Swal.fire({
        title: 'error!',
        text: 'las contraseñas no coinciden intenta de nuevo',
        icon: 'error',
        confirmButtonText: 'OK'
      })
    }

  }

  return (
    <div className="container-FormRecovery">
      <div className="container-FormRecovery">
        <div className="title-FormRecovery">
          <h1>Recupera tu cuenta</h1>
        </div>
        <form className="form-FormRecovery" onSubmit={handleSubmit(onSubmit)}>


          <div className="input-email-FormRecovery">
            <input type="password" name="password1" placeholder="Contraseña"
              {...register("password1", {
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
            <div className="error-input-password">{errors.password1 && <p>{errors.password1.message}</p>}</div>
            <input type="password" name="password2" placeholder="Contraseña"
              {...register("password2", {
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
                },
                pattern: {
                  value: /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=\S+$).{6,}$/i,
                  message: "debe de contener mayusculas, numeros y algun caracter especial "
                }
              })}
            />

            <div className="error-input-password">{errors.password2 && <p>{errors.password2.message}</p>}<p>{messageP}</p></div>
          </div>
          <div className="button-FormRecovery">
            <button>Recovery</button>
          </div>

        </form>
      </div>
    </div>
  )
}

export default FormRecovery