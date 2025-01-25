import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const ServicesContext = createContext();

export const ServicesProvider = ({ children }) => {
  const [updateService, setUpdateService] = useState(0)
  const [services, setServices] = useState([]);
  const [error, setError] = useState(null);
  const url = "http://localhost:3001/servicios";

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get(url);
        setServices(response.data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchServices();
  }, []);

  const addService = async (newService) => {
    try {
      const response = await axios.post(url, newService);
      setServices((prev) => [...prev, response.data]);
    } catch (err) {
      console.error("Error al agregar el servicio:", err);
    }
  };

  return (
    <ServicesContext.Provider value={{ services, error, addService, updateService, setUpdateService }}>
      {children}
    </ServicesContext.Provider>
  );
};

export const useServices = () => useContext(ServicesContext);
