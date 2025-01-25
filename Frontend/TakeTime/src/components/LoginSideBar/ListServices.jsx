// import { useState } from 'react';
// import { useServices } from '../../contexts/ServicesContext.jsx';
// import Modal from '../ui/Modal.jsx';
// import { useAuthContext } from '../../contexts/AuthContext.jsx';

// export const ListServices = () => {
//   const { userSession } = useAuthContext();
//   const { services, error } = useServices();
//   const [openDonateModal, setOpenDonateModal] = useState(false);
//   const [openTradeModal, setOpenTradeModal] = useState(false);

//   const donarHoras = async (serviceId) => {
//     setOpenDonateModal(!openDonateModal);
//     console.log(serviceId, userSession, 1);
//   };
//   const intercambiarHoras = async (serviceId) => {
//     setOpenTradeModal(!openTradeModal);
//     console.log(serviceId, userSession);
//   };
//   return (
//     <>
//       <div>
//         <h1>Lista de Servicios</h1>
//         {error && <p style={{ color: 'red' }}>Error: {error}</p>}
//         <ul>
//           {services.length > 0 ? (
//             services.map((service) => (
//               <li key={service.id}>
//                 <br />
//                 <h1>Nombre del servicio: {service.nombreServicio}</h1>
//                 <h1>Habilidad: {service.habilidad}</h1>
//                 <h2>Ubicacion: {service.ubicacion}</h2>
//                 <h3>Modalidad: {service.modalidad}</h3>
//                 <h5>Horas Disponibles: {service.horasDisponibles}</h5>
//                 <hr />
//                 <input
//                   onClick={() => donarHoras(service)}
//                   type='button'
//                   value='Donar horas'
//                 />{' '}
//                 <h1>77</h1>
//                 <input
//                   onClick={() => intercambiarHoras(service)}
//                   type='button'
//                   value='Intercambiar horas'
//                 />
//               </li>
//             ))
//           ) : (
//             <p>No hay servicios disponibles</p>
//           )}
//         </ul>
//       </div>

//       <Modal
//         Open={openDonateModal}
//         Close={() => setOpenDonateModal(!openDonateModal)}
//       >
//         <h1>Hola mundo</h1>
//         <p>donar</p>
//         <button>Confirmar</button>
//       </Modal>

//       <Modal
//         Open={openTradeModal}
//         Close={() => setOpenTradeModal(!openTradeModal)}
//       >
//         <p>Intercambiar</p>
//       </Modal>
//     </>
//   );
// };
import { useState } from "react";
import { useServices } from "../../contexts/ServicesContext.jsx";
import Modal from "../ui/Modal.jsx";
import { useAuthContext } from "../../contexts/AuthContext.jsx";
import { postTransaction } from "../../services/axios.js"; // Agregar servicio para transacciones

export const ListServices = () => {
  const { userSession } = useAuthContext();
  const { services, error, fetchServices } = useServices(); // fetchServices para actualizar después de cambios
  const [openTradeModal, setOpenTradeModal] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [hours, setHours] = useState(0);
  const url = "http://localhost:3001/tratos"

  const handleTrade = async () => {
    if (!selectedService || hours <= 0) return alert("Ingresa horas válidas");
    console.log(selectedService);
    
    const data = {
      serviceId: selectedService.id,
      buyerId: userSession.id,
      buyerName: userSession.name,
      sellerId: selectedService.idUsuario, // Ajusta según tu estructura
      sellerName: selectedService.nameUser, // Ajusta según tu estructura
      hours: hours,
      type: "trade",
    }
    try {
      await postTransaction(url, data);
      alert("Intercambio realizado exitosamente");
      setOpenTradeModal(false);
    } catch (error) {
      alert("Error al intercambiar horas: " + error.message);
    }
  };

  const openTrade = (service) => {
    setSelectedService(service);
    setOpenTradeModal(true);
  };

  return (
    <>
      <div>
        <h1>Lista de Servicios</h1>
        {error && <p style={{ color: "red" }}>Error: {error}</p>}
        <ul>
          {services.length > 0 ? (
            services.map((service) => (
              <li key={service.id}>
                <h1>Nombre del servicio: {service.nombreServicio}</h1>
                <h1>Habilidad: {service.habilidad}</h1>
                <h2>Ubicacion: {service.ubicacion}</h2>
                <h3>Modalidad: {service.modalidad}</h3>
                <h5>Horas Disponibles: {service.horasDisponibles}</h5>
                <hr />
                <button
                  className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600"
                  onClick={() => openTrade(service)}
                >
                  Realizar trato
                </button>
              </li>
            ))
          ) : (
            <p>No hay servicios disponibles</p>
          )}
        </ul>
      </div>

      {/* Modal para intercambio */}
      <Modal
        Open={openTradeModal}
        Close={() => setOpenTradeModal(false)}
      >
        <h2 className="text-xl font-bold">Intercambiar Horas</h2>
        <p>Servicio: {selectedService?.nombreServicio}</p>
        <p>Horas disponibles: {selectedService?.horasDisponibles}</p>
        <input
          type="number"
          className="border rounded p-2 mt-2 w-full"
          placeholder="Horas a intercambiar"
          value={hours}
          onChange={(e) => setHours(Number(e.target.value))}
        />
        <button
          className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 mt-4"
          onClick={handleTrade}
        >
          Confirmar
        </button>
      </Modal>
    </>
  );
};
