// import { useState, useEffect } from "react";
// import axios from "axios";

// export const SideBar = () => {
//   // Estados para el modal y los datos
//   const [modalCreateService, setModalCreateService] = useState(false);
//   const [habilidadSeleccionada, setHabilidadSeleccionada] = useState("");
//   const [ubicacion, setUbicacion] = useState("");
//   const [nombreServicio, setNombreServicio] = useState(""); // Estado para el nombre del servicio
//   const [modalidad, setModalidad] = useState(""); // "presencial" o "virtual"
//   const [horasDisponibles, setHorasDisponibles] = useState(1);
//   const [habilidades, setHabilidades] = useState([]);
//   const [ubicaciones, setUbicaciones] = useState([]);
//   const [filteredUbicaciones, setFilteredUbicaciones] = useState([]);

//   // Usar useEffect para obtener habilidades y ubicaciones
//   useEffect(() => {
//     const fetchHabilidades = async () => {
//       try {
//         const response = await axios.get('http://localhost:3001/habilidades');
//         setHabilidades(response.data); // Asigna los datos obtenidos al estado habilidades
//       } catch (error) {
//         console.error("Error al obtener las habilidades:", error);
//       }
//     };

//     const fetchUbicaciones = async () => {
//       try {
//         const response = await axios.get("http://localhost:3002/provincias/");
        
//         // Verifica la respuesta para asegurarte de que estamos recibiendo los datos correctamente
//         console.log("Respuesta de provincias:", response.data);

//         // Si la respuesta es un array de ubicaciones
//         if (Array.isArray(response.data)) {
//           setUbicaciones(response.data); // Simplemente asignamos el array al estado
//           setFilteredUbicaciones(response.data); // Inicializamos las ubicaciones filtradas
//         } else {
//           console.error("La respuesta no es un array o no tiene la estructura esperada.");
//         }
//       } catch (error) {
//         console.error("Error al obtener las provincias:", error);
//       }
//     };

//     fetchHabilidades();
//     fetchUbicaciones();
//   }, []);

//   // Función para filtrar ubicaciones según la búsqueda
//   const handleSearchUbicacion = (event) => {
//     const searchTerm = event.target.value.toLowerCase();
//     setUbicacion(searchTerm);

//     // Filtra las ubicaciones por provincia, canton y distrito
//     const filtered = ubicaciones.filter(ubicacion =>
//       ubicacion.provincia.toLowerCase().includes(searchTerm) ||
//       ubicacion.canton.toLowerCase().includes(searchTerm) ||
//       ubicacion.distrito.toLowerCase().includes(searchTerm) ||
//       `${ubicacion.provincia} - ${ubicacion.canton} - ${ubicacion.distrito}`.toLowerCase().includes(searchTerm)
//     );

//     setFilteredUbicaciones(filtered); // Actualiza las ubicaciones filtradas
//   };

//   const createService = () => {
//     setModalCreateService(!modalCreateService);
//   };

//   const handleHabilidadChange = (event) => {
//     setHabilidadSeleccionada(event.target.value);
//   };

//   const handleUbicacionChange = (event) => {
//     setUbicacion(event.target.value);
//   };

//   const handleNombreServicioChange = (event) => {
//     setNombreServicio(event.target.value); // Actualiza el nombre del servicio
//   };

//   const handleModalidadChange = (tipo) => {
//     setModalidad(tipo); // Cambia a presencial o virtual
//   };

//   const handleHorasChange = (event) => {
//     setHorasDisponibles(event.target.value);
//   };

//   const handleSubmit = () => {
//     const servicio = {
//       nombreServicio, // Incluye el nombre del servicio
//       habilidad: habilidadSeleccionada,
//       ubicacion: ubicacion,
//       modalidad: modalidad,
//       horasDisponibles: horasDisponibles,
//     };
//     console.log("Servicio creado: ", servicio);
//     setModalCreateService(false); // Cerrar modal después de crear el servicio
//   };

//   return (
//     <div>
//       {/* Botón para abrir o cerrar el modal */}
//       <input onClick={createService} type="button" value="Crear servicio" />

//       {/* Modal que se muestra o se oculta dependiendo de modalCreateService */}
//       {modalCreateService && (
//         <div>
//           <div>
//             <h2>Crear Nuevo Servicio</h2>

//             {/* Input para el nombre del servicio */}
//             <div>
//               <label>Nombre del Servicio:</label>
//               <input
//                 type="text"
//                 value={nombreServicio}
//                 onChange={handleNombreServicioChange}
//                 placeholder="Escribe el nombre del servicio"
//               />
//             </div>

//             {/* Selección de habilidad (obtenida desde el JSON) */}
//             <div>
//               <label>Nombre de la habilidad:</label>
//               <select value={habilidadSeleccionada} onChange={handleHabilidadChange}>
//                 <option value="">Selecciona una habilidad</option>
//                 {habilidades.map((habilidad) => (
//                   <option key={habilidad.id} value={habilidad.nombre}>
//                     {habilidad.nombre}
//                   </option>
//                 ))}
//               </select>
//             </div>

//             {/* Input de búsqueda de ubicación */}
//             <div>
//               <label>Ubicación:</label>
//               <input
//                 type="text"
//                 value={ubicacion}
//                 onChange={handleSearchUbicacion}
//                 placeholder="Escribe la ubicación"
//               />
//             </div>

//             {/* Lista de ubicaciones filtradas */}
//             <div>
//               <label>Selecciona la ubicación:</label>
//               <select value={ubicacion} onChange={handleUbicacionChange}>
//                 <option value="">Selecciona una ubicación</option>
//                 {filteredUbicaciones.map((ubicacion) => (
//                   <option key={ubicacion.id} value={ubicacion.fullName}>
//                     {ubicacion.provincia} - {ubicacion.canton} - {ubicacion.distrito}
//                   </option>
//                 ))}
//               </select>
//             </div>

//             {/* Botones de modalidad */}
//             <div>
//               <label>Modalidad:</label>
//               <button onClick={() => handleModalidadChange("presencial")}>Presencial</button>
//               <button onClick={() => handleModalidadChange("virtual")}>Virtual</button>
//             </div>

//             {/* Rango de horas disponibles */}
//             <div>
//               <label>Horas Disponibles:</label>
//               <select value={horasDisponibles} onChange={handleHorasChange}>
//                 {[1, 2, 3, 4, 5].map((hora) => (
//                   <option key={hora} value={hora}>
//                     {hora}
//                   </option>
//                 ))}
//                 <option value={10}>10</option>
//                 <option value={15}>15</option>
//                 <option value={20}>20</option>
//               </select>
//             </div>

//             {/* Botón de enviar */}
//             <div>
//               <button onClick={handleSubmit}>Crear Servicio</button>
//               <button onClick={createService}>Cerrar Modal</button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };
import { useState, useEffect } from "react";
import axios from "axios";
import ServiceForm from "./components/ServiceForm"; // Componente para el formulario
import LocationSearch from "./components/LocationSearch"; // Componente para la búsqueda de ubicación
import { PostUsers } from "../../services/axios";

export const SideBar = () => {
    const [modalCreateService, setModalCreateService] = useState(false);
    const [habilidadSeleccionada, setHabilidadSeleccionada] = useState("");
    const [ubicacion, setUbicacion] = useState("");
    const [nombreServicio, setNombreServicio] = useState("");
    const [modalidad, setModalidad] = useState("");
    const [horasDisponibles, setHorasDisponibles] = useState(1);
    const [habilidades, setHabilidades] = useState([]);
    const [ubicaciones, setUbicaciones] = useState([]);
    const [filteredUbicaciones, setFilteredUbicaciones] = useState([]);
    const url = "http://localhost:3001/servicios"
  
    useEffect(() => {
      const fetchHabilidades = async () => {
        try {
          const response = await axios.get('http://localhost:3001/habilidades');
          setHabilidades(response.data);
        } catch (error) {
          console.error("Error al obtener las habilidades:", error);
        }
      };
  
      const fetchUbicaciones = async () => {
        try {
          const response = await axios.get("http://localhost:3002/provincias/");
          if (Array.isArray(response.data)) {
            setUbicaciones(response.data);
            setFilteredUbicaciones(response.data);
          }
        } catch (error) {
          console.error("Error al obtener las provincias:", error);
        }
      };
  
      fetchHabilidades();
      fetchUbicaciones();
    }, []);
  
    const createService = () => {
      setModalCreateService(!modalCreateService);
    };
  
    const handleModalidadChange = (tipo) => {
      setModalidad(tipo);
    };
  
    const handleHorasChange = (event) => {
      setHorasDisponibles(event.target.value);
    };
  
    const handleSubmit = async () => {
      if (!nombreServicio || !habilidadSeleccionada || !ubicacion || !modalidad || !horasDisponibles) {
        alert("Por favor, complete todos los campos.");
        return;
      }
  
      const servicio = {
        nombreServicio,
        habilidad: habilidadSeleccionada,
        ubicacion,
        modalidad,
        horasDisponibles,
      };
      PostUsers(url,servicio)
  
      console.log("Servicio creado: ", servicio);
  
      // Limpiar los campos después de enviar el servicio
      setNombreServicio("");
      setHabilidadSeleccionada("");
      setUbicacion("");
      setModalidad("");
      setHorasDisponibles(1);
  
      setModalCreateService(false); // Cerrar modal después de crear el servicio
    };
  
    return (
      <div>
        <input onClick={createService} type="button" value="Crear servicio" />
  
        {modalCreateService && (
          <div>
            <div>
              <h2>Crear Nuevo Servicio</h2>
              <ServiceForm
                nombreServicio={nombreServicio}
                setNombreServicio={setNombreServicio}
                habilidadSeleccionada={habilidadSeleccionada}
                setHabilidadSeleccionada={setHabilidadSeleccionada}
                habilidades={habilidades}
                filteredUbicaciones={filteredUbicaciones}
                ubicacion={ubicacion}
                setUbicacion={setUbicacion}
                setModalidad={handleModalidadChange}
                modalidad={modalidad}
                horasDisponibles={horasDisponibles}
                setHorasDisponibles={setHorasDisponibles}
              />
              <div>
                <button onClick={handleSubmit}>Crear Servicio</button>
                <button onClick={createService}>Cerrar Modal</button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };