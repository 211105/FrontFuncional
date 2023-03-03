import { type } from '@testing-library/user-event/dist/type'
import React, { useState } from 'react';
import FormAddProduct from '../components/FormAddProduct';
import NavbarDashboard from '../components/NavbarDashboard'
import ProductCart from '../components/ProductCard'
import '../stylesheets/Dashboard.css'



const Dasboard = () => {

  
  const productos = [
    {
      titulo:"amlo",
      descripccion:"grande amlo",
      precio: 30,
      cantidad: 10
    },
    {
      titulo:"peña",
      descripccion:"grande peña",
      precio: 30,
      cantidad: 20
    },
    {
      titulo:"salinas",
      descripccion:"mato a colosio",
      precio: 30,
      cantidad: 30
    },
    {
      titulo:"colosio",
      descripccion:"lo balacearon los municipales",
      precio: 30,
      cantidad: 30
    },
    {
      titulo:"mendez",
      descripccion:"que pro",
      precio: 30,
      cantidad: 30
    },


  ]

const [tipo, setTipo] = useState(0);




const project = () => {
    switch(tipo) {
      case 0:   return <div className="main-products-Dashboard">
           {productos.map((producto) => (
                <ProductCart
                titulo = {producto.titulo}
                descripccion = {producto.descripccion}
                precio = {producto.precio}
                cantidad = { producto.cantidad}
                />
            ))}
      </div>;
      case 1:   return <div className="main-products-add-Dashboard"><FormAddProduct/></div>;
      default:      return <h1>No project match</h1>
    }
  }

    return(
        <div className="container-Dashboard">
            <div className="navbar-Dashboard"><NavbarDashboard tipe={setTipo}/></div>
            
                {project()}
                
            
        </div>
    )
}

export default Dasboard