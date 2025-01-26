const LocationSearch = ({ ubicacion, setUbicacion, filteredUbicaciones }) => {
  return (
    <div>
     
     <div className="flex flex-cols my-4">

      <label className="text-base mt-2">Ubicación:</label>
      <input
      className="text-base bg-white"
        type="text"
        value={ubicacion}
        onChange={(e) => setUbicacion(e.target.value)}
        placeholder="Escribe la ubicación"
      />
     </div>

      <div>
        <label className="text-base mt-2">Selecciona la ubicación:</label>
        <select
          className="p-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300 text-base"
        value={ubicacion} onChange={(e) => setUbicacion(e.target.value)}>
          <option value="">Selecciona una ubicación</option>
          {filteredUbicaciones.map((ubicacion) => (
            <option key={ubicacion.id} value={`${ubicacion.provincia} - ${ubicacion.canton} - ${ubicacion.distrito}`}>
              {ubicacion.provincia} - {ubicacion.canton} - {ubicacion.distrito}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default LocationSearch;
