// import React from "react";
// import LocationSearch from "./LocationSearch";

// const ServiceForm = ({
//   nombreServicio, 
//   setNombreServicio, 
//   habilidadSeleccionada, 
//   setHabilidadSeleccionada, 
//   habilidades, 
//   filteredUbicaciones, 
//   ubicacion, 
//   setUbicacion, 
//   setModalidad, 
//   modalidad, 
//   horasDisponibles, 
//   setHorasDisponibles
// }) => {
//   return (
//     <div>
//       {/* Nombre del servicio */}
//       <div>
//         <label>Nombre del Servicio:</label>
//         <input
//           type="text"
//           value={nombreServicio}
//           onChange={(e) => setNombreServicio(e.target.value)}
//           placeholder="Escribe el nombre del servicio"
//         />
//       </div>

//       {/* Habilidad */}
//       <div>
//         <label>Nombre de la habilidad:</label>
//         <select value={habilidadSeleccionada} onChange={(e) => setHabilidadSeleccionada(e.target.value)}>
//           <option value="">Selecciona una habilidad</option>
//           {habilidades.map((habilidad) => (
//             <option key={habilidad.id} value={habilidad.nombre}>
//               {habilidad.nombre}
//             </option>
//           ))}
//         </select>
//       </div>

//       {/* Ubicación */}
//       <LocationSearch 
//         ubicacion={ubicacion}
//         setUbicacion={setUbicacion}
//         filteredUbicaciones={filteredUbicaciones}
//       />

//       {/* Modalidad */}
//       <div>
//         <label>Modalidad:</label>
//         <button onClick={() => setModalidad("presencial")}>Presencial</button>
//         <button onClick={() => setModalidad("virtual")}>Virtual</button>
//       </div>

//       {/* Horas disponibles */}
//       <div>
//         <label>Horas Disponibles:</label>
//         <select value={horasDisponibles} onChange={(e) => setHorasDisponibles(e.target.value)}>
//           {[1, 2, 3, 4, 5,6,7,8,9,10].map((hora) => (
//             <option key={hora} value={hora}>{hora}</option>
//           ))}
//         </select>
//       </div>
//     </div>
//   );
// };

// export default ServiceForm;
import React from "react";
import LocationSearch from "./LocationSearch";

const ServiceForm = ({
  nombreServicio,
  setNombreServicio,
  habilidadSeleccionada,
  setHabilidadSeleccionada,
  habilidades,
  filteredUbicaciones,
  ubicacion,
  setUbicacion,
  setModalidad,
  modalidad,
  horasDisponibles,
  setHorasDisponibles,
  tipoServicio, // Recibimos tipoServicio
  setTipoServicio, // Recibimos setTipoServicio
}) => {
  return (
    <div>
      {/* Nombre del servicio */}
      <div>
        <label>Nombre del Servicio:</label>
        <input
          type="text"
          value={nombreServicio}
          onChange={(e) => setNombreServicio(e.target.value)}
          placeholder="Escribe el nombre del servicio"
        />
      </div>

      {/* Habilidad */}
      <div>
        <label>Nombre de la habilidad:</label>
        <select value={habilidadSeleccionada} onChange={(e) => setHabilidadSeleccionada(e.target.value)}>
          <option value="">Selecciona una habilidad</option>
          {habilidades.map((habilidad) => (
            <option key={habilidad.id} value={habilidad.nombre}>
              {habilidad.nombre}
            </option>
          ))}
        </select>
      </div>

      {/* Ubicación */}
      <LocationSearch
        ubicacion={ubicacion}
        setUbicacion={setUbicacion}
        filteredUbicaciones={filteredUbicaciones}
      />

      {/* Modalidad */}
      <div>
        <label>Modalidad:</label>
        <button onClick={() => setModalidad("presencial")}>Presencial</button>
        <button onClick={() => setModalidad("virtual")}>Virtual</button>
      </div>

      {/* Tipo de servicio */}
      <div>
        <label>Tipo de Usuario:</label>
        <button onClick={() => setTipoServicio("donador")}>Donador</button>
        <button onClick={() => setTipoServicio("normal")}>Normal</button>
      </div>

      {/* Horas disponibles */}
      <div>
        <label>Horas Disponibles:</label>
        <select value={horasDisponibles} onChange={(e) => setHorasDisponibles(e.target.value)}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((hora) => (
            <option key={hora} value={hora}>
              {hora}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ServiceForm;
