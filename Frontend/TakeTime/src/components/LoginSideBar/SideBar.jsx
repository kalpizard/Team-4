
// import { useAuthContext } from "../../contexts/AuthContext.jsx";
// import { useState, useEffect } from "react";
// import ServiceForm from "./components/ServiceForm";
// import { useServices } from "../../contexts/ServicesContext.jsx";
// import axios from "axios";

// export const SideBar = () => {
//   const {userSession} = useAuthContext()
//   const [modalCreateService, setModalCreateService] = useState(false);
//   const [habilidadSeleccionada, setHabilidadSeleccionada] = useState("");
//   const [ubicacion, setUbicacion] = useState("");
//   const [nombreServicio, setNombreServicio] = useState("");
//   const [modalidad, setModalidad] = useState("");
//   const [horasDisponibles, setHorasDisponibles] = useState(1);
//   const [habilidades, setHabilidades] = useState([]);
//   const [filteredUbicaciones, setFilteredUbicaciones] = useState([]);
//   const { addService } = useServices();

//   useEffect(() => {
//     const fetchHabilidades = async () => {
//       try {
//         const response = await axios.get("http://localhost:3001/habilidades");
//         setHabilidades(response.data);
//       } catch (error) {
//         console.error("Error al obtener las habilidades:", error);
//       }
//     };

//     const fetchUbicaciones = async () => {
//       try {
//         const response = await axios.get("http://localhost:3002/provincias/");
//         setFilteredUbicaciones(response.data);
//       } catch (error) {
//         console.error("Error al obtener las provincias:", error);
//       }
//     };

//     fetchHabilidades();
//     fetchUbicaciones();
//   }, []);

//   const createService = () => {
//     setModalCreateService(!modalCreateService);
//   };

//   const handleSubmit = () => {
//     if (!userSession) {
//       return;
//     }

//     if (!nombreServicio || !habilidadSeleccionada || !ubicacion || !modalidad || !horasDisponibles) {
//       alert("Por favor, complete todos los campos.");
//       return;
//     }

//     const newService = {
//       idUsuario: userSession.id,
//       nameUser: userSession.name,
//       nombreServicio,
//       habilidad: habilidadSeleccionada,
//       ubicacion,
//       modalidad,
//       horasDisponibles,
//     };

//     addService(newService);

//     setNombreServicio("");
//     setHabilidadSeleccionada("");
//     setUbicacion("");
//     setModalidad("");
//     setHorasDisponibles(1);
//     setModalCreateService(false);
//   };

//   return (
//     <div>
//       <input onClick={createService} type="button" value="Crear servicio" />
//       {modalCreateService && (
//         <div>
//           <h2>Crear Nuevo Servicio</h2>
//           <ServiceForm
//             nombreServicio={nombreServicio}
//             setNombreServicio={setNombreServicio}
//             habilidadSeleccionada={habilidadSeleccionada}
//             setHabilidadSeleccionada={setHabilidadSeleccionada}
//             habilidades={habilidades}
//             filteredUbicaciones={filteredUbicaciones}
//             ubicacion={ubicacion}
//             setUbicacion={setUbicacion}
//             modalidad={modalidad}
//             setModalidad={setModalidad}
//             horasDisponibles={horasDisponibles}
//             setHorasDisponibles={setHorasDisponibles}
//           />
//           <button onClick={handleSubmit}>Crear Servicio</button>
//           <button onClick={createService}>Cerrar Modal</button>
//         </div>
//       )}
//     </div>
//   );
// };
import { useAuthContext } from "../../contexts/AuthContext.jsx";
import { useState, useEffect } from "react";
import ServiceForm from "./components/ServiceForm";
import { useServices } from "../../contexts/ServicesContext.jsx";
import axios from "axios";

export const SideBar = () => {
  const { userSession } = useAuthContext();
  const [modalCreateService, setModalCreateService] = useState(false);
  const [habilidadSeleccionada, setHabilidadSeleccionada] = useState("");
  const [ubicacion, setUbicacion] = useState("");
  const [nombreServicio, setNombreServicio] = useState("");
  const [modalidad, setModalidad] = useState("");
  const [horasDisponibles, setHorasDisponibles] = useState(1);
  const [tipoServicio, setTipoServicio] = useState(""); // Nuevo estado para tipo de usuario
  const [habilidades, setHabilidades] = useState([]);
  const [filteredUbicaciones, setFilteredUbicaciones] = useState([]);
  const { addService } = useServices();

  useEffect(() => {
    const fetchHabilidades = async () => {
      try {
        const response = await axios.get("http://localhost:3001/habilidades");
        setHabilidades(response.data);
      } catch (error) {
        console.error("Error al obtener las habilidades:", error);
      }
    };

    const fetchUbicaciones = async () => {
      try {
        const response = await axios.get("http://localhost:3002/provincias/");
        setFilteredUbicaciones(response.data);
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

  const handleSubmit = () => {
    if (!userSession) {
      return;
    }

    if (!nombreServicio || !habilidadSeleccionada || !ubicacion || !modalidad || !horasDisponibles || !tipoServicio) {
      alert("Por favor, complete todos los campos.");
      return;
    }

    const newService = {
      idUsuario: userSession.id,
      nameUser: userSession.name,
      nombreServicio,
      habilidad: habilidadSeleccionada,
      ubicacion,
      modalidad,
      horasDisponibles,
      tipoServicio, // Aquí agregamos el tipo de servicio (Donador o Normal)
    };

    addService(newService);

    // Reset de campos
    setNombreServicio("");
    setHabilidadSeleccionada("");
    setUbicacion("");
    setModalidad("");
    setHorasDisponibles(1);
    setTipoServicio(""); // Reseteamos tipo de servicio
    setModalCreateService(false);
  };

  return (
    <div>
      <input onClick={createService} type="button" value="Crear servicio" />
      {modalCreateService && (
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
            modalidad={modalidad}
            setModalidad={setModalidad}
            horasDisponibles={horasDisponibles}
            setHorasDisponibles={setHorasDisponibles}
            tipoServicio={tipoServicio} // Pasamos tipo de servicio
            setTipoServicio={setTipoServicio} // Pasamos setTipoServicio
          />
          <button onClick={handleSubmit}>Crear Servicio</button>
          <button onClick={createService}>Cerrar Modal</button>
        </div>
      )}
    </div>
  );
};
