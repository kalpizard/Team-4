const LocationSearch = ({ ubicacion, setUbicacion, filteredUbicaciones }) => {
  return (
    <div>
      <label>Ubicación:</label>
      <input
        type="text"
        value={ubicacion}
        onChange={(e) => setUbicacion(e.target.value)}
        placeholder="Escribe la ubicación"
      />

      <div>
        <label>Selecciona la ubicación:</label>
        <select value={ubicacion} onChange={(e) => setUbicacion(e.target.value)}>
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
