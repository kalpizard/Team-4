import { useState } from "react";
import { useServices } from "../../contexts/ServicesContext.jsx";

export const ListServices = () => {
  const { services, error } = useServices();
  const [DonarHoras, setDonarHoras] = useState('')

  const donarHoras = async() => {
    console.log(DonarHoras);
    
  };
  const IntercambiarHoras = async () => {
    console.log(DonarHoras);
    
  };
  return (
    <div>
      <h1>Lista de Servicios</h1>
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
      <ul>
        {services.length > 0 ? (
          services.map((service) => (
            
            <li key={service.id}>
              <br />
              <h1>Nombre del servicio: {service.nombreServicio}</h1>
              <h1>Habilidad: {service.habilidad}</h1>
              <h2>Ubicacion: {service.ubicacion}</h2>
              <h3>Modalidad: {service.modalidad}</h3>
              <h5>Horas Disponibles: {service.horasDisponibles}</h5>
            <hr />
            <input onClick={donarHoras} type="button" value="Donar horas" /> <h1>77</h1>
            <input onClick={IntercambiarHoras} type="button" value="Intercambiar horas" />
            </li>
            
          ))
        ) : (
          <p>No hay servicios disponibles</p>
        )}
      </ul>
    </div>
  );
};
