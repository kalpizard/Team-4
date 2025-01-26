// 

import React, { useState } from 'react';
import { PostUsers } from '../../services/axios';
import { Link, useNavigate } from 'react-router-dom';
import { getData } from '../../services/axios';
import { AuthLayout } from '../layout/AuthLayout';

export const Register = ({ children, title = 'Registrarme' }) => {
  const navigate = useNavigate();
  const [newPassword, setnewPassword] = useState('');
  const url = 'http://localhost:3001/usuarios'
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    // Age: '',
    password: '',
    // Nationality: '',
    hora: 5
  });

  const { name, email, password } = formData;

  const FuncRegis = async (e) => {
    e.preventDefault();
  
   
    if (!name || !email || !password || !newPassword) {
      alert('Por favor, completa todos los campos.');
      return;
    }
  
    
    if (password !== newPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }
    try {

      const response = await getData(url);

      const users = response.data;
      
      const usuarioExiste = users.find((user) => user.email === email);
      if (usuarioExiste) {
        alert('Ya existe un usuario con este correo.');
        return;
      }
  
      
      await PostUsers('http://localhost:3001/usuarios', formData);
      alert('Registro exitoso');
      navigate('/login');
    } catch (error) {
      
      alert(error.response?.data?.error || 'Hubo un problema con el registro');
    }
  };
  

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (

    <AuthLayout>
      <form onSubmit={FuncRegis}>
        <div className="mb-8">
          <h3 className="text-3xl font-extrabold text-gray-800">Registro</h3>
        </div>
     
        <div className="space-y-4">
          <div>
            <label className="text-gray-800 text-sm mb-2 block">Nombre</label>
            <input
              id="name"
              name="name"
              type="text"
              value={name}
              onChange={handleChange}
              placeholder="Escriba su nombre"
              className="w-full text-sm text-gray-800 border border-gray-300 px-4 py-3 rounded-md outline-blue-600"
              required
            />
          </div>

          <div>
            <label className="text-gray-800 text-sm mb-2 block">Correo</label>
            <input
              id="email"
              name="email"
              type="email"
              value={email}
              onChange={handleChange}
              placeholder="Escriba su correo"
              className="w-full text-sm text-gray-800 border border-gray-300 px-4 py-3 rounded-md outline-blue-600"
              required
            />
          </div>
          <div>
            <label className="text-gray-800 text-sm mb-2 block">Contraseña</label>
            <input
              id="password"
              name="password"
              type="password"
              value={password}
              onChange={handleChange}
              placeholder="Escriba su contraseña"
              className="w-full text-sm text-gray-800 border border-gray-300 px-4 py-3 rounded-md outline-blue-600"
              required
            />
          </div>

          <div>
            <label className="text-gray-800 text-sm mb-2 block">Confirmar contraseña</label>
            <input
              id="ConfirmarPassword"
              name="password"
              type="password"
              value={newPassword}
              onChange={(e) => setnewPassword(e.target.value)}
              placeholder="Confimar su contraseña"
              className="w-full text-sm text-gray-800 border border-gray-300 px-4 py-3 rounded-md outline-blue-600"
              required
            />
          </div>
        </div>

        <div className="mt-8">
          <button
            type="submit"
            className="w-full shadow-xl py-2.5 px-4 text-sm font-semibold rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
          >
            Register
          </button>
        </div>

        <p className="text-sm mt-6 text-center text-gray-800">
          Ya tienes una cuenta?{' '}
          <Link
            className="text-blue-600 font-semibold hover:underline ml-1"
            to="/login"
          >
            Crear cuenta
          </Link>
        </p>
      </form>


    </AuthLayout >


  );
}


