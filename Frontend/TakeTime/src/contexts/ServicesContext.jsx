import { createContext, useContext, useState, useEffect, useRef } from 'react';
import axios from 'axios';

const ServicesContext = createContext();

export const ServicesProvider = ({ children }) => {
  const searchTerm = useRef();
  const [updateService, setUpdateService] = useState(0);
  const [services, setServices] = useState([]);
  const [error, setError] = useState(null);
  const url = 'http://localhost:3001/servicios';

  const fetchServices = async () => {
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    fetchServices().then((e) => {
      let filtered = e.filter((i) =>
        i.nombreServicio
          .toLowerCase()
          .includes(searchTerm.current.value.toLowerCase())
      );
      setServices(filtered);
    });
  }, [updateService]);

  const addService = async (newService) => {
    try {
      const response = await axios.post(url, newService);
      setServices((prev) => [...prev, response.data]);
    } catch (err) {
      console.error('Error al agregar el servicio:', err);
    }
  };

  return (
    <ServicesContext.Provider
      value={{
        services,
        error,
        addService,
        updateService,
        setUpdateService,
        searchTerm,
      }}
    >
      {children}
    </ServicesContext.Provider>
  );
};

export const useServices = () => useContext(ServicesContext);
