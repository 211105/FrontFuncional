import '../stylesheets/FormForgetPassword.css'
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2'






const FormForgetPassword = () => {




  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = value => {
    
    const data = value;
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "email": value.email,
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };


    fetch("http://localhost:3001/api/user/recovery_password", requestOptions)
      .then(response => response.text())
      .then(result => {
        Swal.fire({
          title: 'vaya a su correo',
          text: 'listo en su correo lo estara esperando un correo de nosotros',
          icon: 'success',
          confirmButtonText: 'OK'
        })
      })
      .catch(error => {
        Swal.fire({
          title: 'error',
          text: 'lo siento a susedido un erro regrese mas tarde',
          icon: 'error',
          confirmButtonText: 'OK'
        })
  });

  };
  return (
    <div className="container-FormForgetPassword">
      <div className="title-FormForgetPassword">
        <h1>Recupera tu cuenta</h1>
      </div>
      <form className="form-FormForgetPassword" onSubmit={handleSubmit(onSubmit)}>
        <div className="input-email-FormForgetPassword">
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
        <div className="button-FormForgetPassword">
          <button>Recovery</button>
        </div>

      </form>
    </div>
  )
}

export default FormForgetPassword