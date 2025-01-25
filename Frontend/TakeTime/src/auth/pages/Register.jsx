import React, { useState } from 'react';
import { PostUsers } from '../../services/axios'; 
import { useNavigate } from 'react-router-dom';
import { getUsers } from '../../services/axios';

function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    Age: '',
    password: '',
    Nationality: '',
    hora: 10
  });

  const { name, email, Age, password, Nationality } = formData;

  const FuncRegis = async (e) => {
    e.preventDefault();

    if (!name || !email || !Age || !password || !Nationality) {
      alert('Por favor, completa todos los campos.');
      return;
    }

    try {
     
      const response = await getUsers();
      const users = response.data;

    
      const usuarioExiste = users.find(user => user.email === email);
      if (usuarioExiste) {
        alert('Ya existe un usuario con este correo');
        return;
      }

   
      await PostUsers("http://localhost:3001/usuarios", formData);
      alert('¡Registro exitoso!');
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
    <div>
      <form onSubmit={FuncRegis}>
        <input id="name" name="name" type="text" value={name} onChange={handleChange} placeholder="Name" required />
        <input id="email" name="email" type="email" value={email} onChange={handleChange} placeholder="Gmail" required />
        <input id="Age" name="Age" type="text" value={Age} onChange={handleChange} placeholder="Age" required />
        <input id="password" name="password" type="password" value={password} onChange={handleChange} placeholder="Password" required />
        <input id="Nationality" name="Nationality" type="text" value={Nationality} onChange={handleChange} placeholder="Nationality" required />
        <button type="submit" className="btn">Register</button>
      </form>
    </div>
  );
}

export default Register;
