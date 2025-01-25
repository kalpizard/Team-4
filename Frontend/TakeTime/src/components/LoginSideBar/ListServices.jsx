import { useState } from 'react';
import { useServices } from '../../contexts/ServicesContext.jsx';
import Modal from '../ui/Modal.jsx';
import { useAuthContext } from '../../contexts/AuthContext.jsx';

export const ListServices = () => {
  const { userSession } = useAuthContext();
  const { services, error } = useServices();
  const [openDonateModal, setOpenDonateModal] = useState(false);
  const [openTradeModal, setOpenTradeModal] = useState(false);

  const donarHoras = async (serviceId) => {
    setOpenDonateModal(!openDonateModal);
    console.log(serviceId, userSession, 1);
  };
  const intercambiarHoras = async (serviceId) => {
    setOpenTradeModal(!openTradeModal);
    console.log(serviceId, userSession);
  };
  return (
    <>
      <div>
        <h1>Lista de Servicios</h1>
        {error && <p style={{ color: 'red' }}>Error: {error}</p>}
        <ul>
          {services.length > 0 ? (
            services.map((service) => (
              <li key={service.id}>
                <br />
                <h1>Nombre del servicio: {service.nombreServicio}</h1>
                <h1>Habilidad: {service.habilidad}</h1>
                <h2>Ubicacion: {service.ubicacion}</h2>
                <h3>Modalidad: {service.modalidad}</h3>
                <h5>Horas Disponibles: {service.horasDisponibles}</h5>
                <hr />
                <input
                  onClick={() => donarHoras(service.id)}
                  type='button'
                  value='Donar horas'
                />{' '}
                <h1>77</h1>
                <input
                  onClick={() => intercambiarHoras(service.id)}
                  type='button'
                  value='Intercambiar horas'
                />
              </li>
            ))
          ) : (
            <p>No hay servicios disponibles</p>
          )}
        </ul>
      </div>

      <Modal
        Open={openDonateModal}
        Close={() => setOpenDonateModal(!openDonateModal)}
      >
        <p>donar</p>
      </Modal>

      <Modal
        Open={openTradeModal}
        Close={() => setOpenTradeModal(!openTradeModal)}
      >
        <p>Intercambiar</p>
      </Modal>
    </>
  );
};
