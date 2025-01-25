// import { useEffect, useState } from "react";
// import { getData } from "../../services/axios";
// export const ListServices = () => {
//   const [services, setServices] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchServices = async () => {
//       try {
//         const url = "http://localhost:3001/servicios"; // Reemplaza con tu URL
//         const response = await getData(url) 
//         setServices(response.data);
//       } catch (err) {
//         setError(err.message);
//       }
//     };

//     fetchServices(); // Llama a la función asíncrona
//   }, []); // [] asegura que el efecto solo se ejecute una vez al montar el componente

//   return (
//     <div>
//       <h1>Lista de Servicios</h1>
//       {error && <p style={{ color: "red" }}>Error: {error}</p>}
//       <ul>
//         {services.length > 0 ? (
//           services.map((service) => (
//             <li key={service.id}>{service.nombreServicio}</li> // Ajusta según los campos de tu API
//           ))
//         ) : (
//           <p>No hay servicios disponibles</p>
//         )}
//       </ul>
      
//     </div>
//   );
// };
import { useServices } from "../../contexts/ServicesContext.jsx";

export const ListServices = () => {
  const { services, error } = useServices();

  return (
    <div>
      <h1>Lista de Servicios</h1>
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
      <ul>
        {services.length > 0 ? (
          services.map((service) => (
            <li key={service.id}>{service.nombreServicio}</li>
          ))
        ) : (
          <p>No hay servicios disponibles</p>
        )}
      </ul>
    </div>
  );
};
