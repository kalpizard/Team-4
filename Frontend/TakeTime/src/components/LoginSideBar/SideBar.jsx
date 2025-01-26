
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
import Modal from "../ui/Modal.jsx";
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

    if (
      !nombreServicio ||
      !habilidadSeleccionada ||
      !ubicacion ||
      !modalidad ||
      !horasDisponibles ||
      !tipoServicio
    ) {
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
    <div className="flex justify-center items-center w-full py-6 bg-sky h-full hover:bg-sky-200 text-2xl font-black">
      {!modalCreateService && ( // Oculta el botón cuando el modal está abierto
        <input
          onClick={createService}
          type="button"
          value="Crear servicio"
        />
      )}
      {modalCreateService && (
      
        <div className="w-full h-full">
          
          <h2 >Crear Nuevo Servicio</h2>
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
<div className="flex justify-start items-center">



          <button className="mx-2 focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900" onClick={createService}>Cerrar Modal</button>
          <button className=" mx-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={handleSubmit}>Crear Servicio</button>
</div>

        </div>
      )}
    </div>
  );
};
