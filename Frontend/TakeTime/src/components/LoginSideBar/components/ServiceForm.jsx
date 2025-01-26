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
  tipoServicio,
  setTipoServicio,
}) => {
  return (
    <div className="relative right-0 w-full max-w-lg p-6 rounded-lg">
      {/* Nombre del servicio */}
      <div className="flex flex-col space-y-2">
        <label className="text-base text-black mt-2">Nombre del Servicio:</label>
        <div className="relative">
          <input
            type="text"
            value={nombreServicio}
            onChange={(e) => setNombreServicio(e.target.value)}
            placeholder="Escribe el nombre del servicio"
            className="p-2 bg-white text-xs font-light border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300 w-full"
          />
          <div className="absolute z-40 right-2 top-1/2 transform -translate-y-1/2 group">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5 text-black"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0ZM8.94 6.94a.75.75 0 1 1-1.061-1.061 3 3 0 1 1 2.871 5.026v.345a.75.75 0 0 1-1.5 0v-.5c0-.72.57-1.172 1.081-1.287A1.5 1.5 0 1 0 8.94 6.94ZM10 15a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
                clipRule="evenodd"
              />
            </svg>
            <div className="absolute w-32  hidden group-hover:block bg-gray-100 text-black text-xs p-2 rounded shadow-lg">
              Ingresa el nombre del servicio que ofreces.
            </div>
          </div>
        </div>
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
        <div className="flex space-x-4 items-center">
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
          <div className="relative group">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5 text-black"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0ZM8.94 6.94a.75.75 0 1 1-1.061-1.061 3 3 0 1 1 2.871 5.026v.345a.75.75 0 0 1-1.5 0v-.5c0-.72.57-1.172 1.081-1.287A1.5 1.5 0 1 0 8.94 6.94ZM10 15a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
                clipRule="evenodd"
              />
            </svg>
            <div className="absolute z-40 w-32 hidden group-hover:block bg-gray-100 text-black text-xs p-2 rounded shadow-lg">
              Usted puede dar su servicio de forma presencial <br />
              o virtual
            </div>
          </div>
        </div>
      </div>

      {/* Tipo de servicio */}
      <div className="flex flex-col">
        <label className="text-base text-black mt-2">Tipo de Usuario:</label>
        <div className="flex space-x-4 items-center">
          <button
            onClick={() => setTipoServicio("donador")}
            className={`px-4 py-2 rounded-md ${
              tipoServicio === "donador" ? "bg-green-500 text-white" : "bg-gray-200"
            }`}
          >
            Oferente
          </button>
          <button
            onClick={() => setTipoServicio("normal")}
            className={`px-4 py-2 rounded-md ${
              tipoServicio === "normal" ? "bg-green-500 text-white" : "bg-gray-200"
            }`}
          >
            Receptor
          </button>
          <div className="relative group">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5 text-black"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0ZM8.94 6.94a.75.75 0 1 1-1.061-1.061 3 3 0 1 1 2.871 5.026v.345a.75.75 0 0 1-1.5 0v-.5c0-.72.57-1.172 1.081-1.287A1.5 1.5 0 1 0 8.94 6.94ZM10 15a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
                clipRule="evenodd"
              />
            </svg>
            <div className="absolute z-40 w-32 hidden group-hover:block bg-gray-100 text-black text-xs p-2 rounded shadow-lg">
              si desea solo dar sus servicios selecione la primera opcion
              se desea dar sus servicios y tambien recibir de otros selecione 
              la segunda opcion
            </div>
          </div>
        </div>
      </div>

      {/* Horas disponibles */}
      <div className="flex flex-col space-y-2">
        <label className="text-base text-black mt-2">Horas Disponibles:</label>
        <div className="relative">
          <select
            value={horasDisponibles}
            onChange={(e) => setHorasDisponibles(e.target.value)}
            className="p-2 bg-white text-xs font-light border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300 w-full"
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((hora) => (
              <option key={hora} value={hora}>
                {hora}
              </option>
            ))}
          </select>
          <div className="absolute right-2 top-1/2 transform -translate-y-1/2 group">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5 text-black"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0ZM8.94 6.94a.75.75 0 1 1-1.061-1.061 3 3 0 1 1 2.871 5.026v.345a.75.75 0 0 1-1.5 0v-.5c0-.72.57-1.172 1.081-1.287A1.5 1.5 0 1 0 8.94 6.94ZM10 15a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
                clipRule="evenodd"
              />
            </svg>
            <div className="absolute   hidden group-hover:block bg-gray-100 text-black text-xs p-2 rounded shadow-lg">
              Selecciona cuántas horas puedes ofrecer.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceForm