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
<div className="relative right-0 w-full max-w-lg p-6 rounded-lg">
  {/* Nombre del servicio */}
  <div className="flex flex-col space-y-2">
    <label className="text-base text-black mt-2">Nombre del Servicio:</label>
    <input
      type="text"
      value={nombreServicio}
      onChange={(e) => setNombreServicio(e.target.value)}
      placeholder="Escribe el nombre del servicio"
      className="p-2 bg-white text-xs font-light border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
    />
  </div>

  {/* Habilidad */}
  <div className="flex flex-col space-y-2">
    <label className="text-base text-black mt-2">Nombre de la Habilidad:</label>
    <select
      value={habilidadSeleccionada}
      onChange={(e) => setHabilidadSeleccionada(e.target.value)}
      className="p-2 bg-white text-xs font-light border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
    >
      <option value="">Selecciona una habilidad</option>
      {habilidades.map((habilidad) => (
        <option key={habilidad.id} value={habilidad.nombre}>
          {habilidad.nombre}
        </option>
      ))}
    </select>
  </div>

  {/* Ubicación */}
  <div>
    <LocationSearch
      ubicacion={ubicacion}
      setUbicacion={setUbicacion}
      filteredUbicaciones={filteredUbicaciones}
    />
  </div>

  {/* Modalidad */}
  <div className="flex flex-col space-y-2">
    <label className="text-base text-black mt-2">Modalidad:</label>
    <div className="flex space-x-4">
      <button
        onClick={() => setModalidad("presencial")}
        className={`px-4 py-2 rounded-md ${
          modalidad === "presencial" ? "bg-blue-500 text-white" : "bg-gray-200"
        }`}
      >
        Presencial
      </button>
      <button
        onClick={() => setModalidad("virtual")}
        className={`px-4 py-2 rounded-md ${
          modalidad === "virtual" ? "bg-blue-500 text-white" : "bg-gray-200"
        }`}
      >
        Virtual
      </button>
    </div>
  </div>

  {/* Tipo de servicio */}
  <div className="flex flex-col">
    <label className="text-base text-black mt-2">Tipo de Usuario:</label>
    <div className="flex space-x-4">
      <button
        onClick={() => setTipoServicio("donador")}
        className={`px-4 py-2 rounded-md ${
          tipoServicio === "donador" ? "bg-green-500 text-white" : "bg-gray-200"
        }`}
      >
        Donador
      </button>
      <button
        onClick={() => setTipoServicio("normal")}
        className={`px-4 py-2 rounded-md ${
          tipoServicio === "normal" ? "bg-green-500 text-white" : "bg-gray-200"
        }`}
      >
        Normal
      </button>
    </div>
  </div>

  {/* Horas disponibles */}
  <div className="flex flex-col space-y-2">
    <label className="text-base text-black mt-2">Horas Disponibles:</label>
    <select
      value={horasDisponibles}
      onChange={(e) => setHorasDisponibles(e.target.value)}
      className="p-2 bg-white text-xs font-light border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
    >
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
