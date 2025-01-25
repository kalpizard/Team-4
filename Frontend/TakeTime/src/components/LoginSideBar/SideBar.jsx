
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