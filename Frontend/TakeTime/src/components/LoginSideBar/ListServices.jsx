import { useState } from "react";
import { useServices } from "../../contexts/ServicesContext.jsx";
import Modal from "../ui/Modal.jsx";
import { useAuthContext } from "../../contexts/AuthContext.jsx";
import { deleteData, getData, postTransaction } from "../../services/axios.js"; // Agregar servicio para transacciones
import { putData } from "../../services/axios.js";

export const ListServices = () => {
  const { userSession, update,setUpdate } = useAuthContext();
  const { services, error, fetchServices, updateService, setUpdateService  } = useServices(); // fetchServices para actualizar después de cambios
  const [openTradeModal, setOpenTradeModal] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [hours, setHours] = useState(0);
  const url = "http://localhost:3001/tratos"
  const urlusers = "http://localhost:3001/usuarios"
  const urlservices = 'http://localhost:3001/servicios'

  // const handleTrade = async () => {
    
  //   if (!selectedService || hours <= 0 || selectedService.hora <= 0 )  return alert("No tienes horas disponibles");
  //   try {
      
  //     const data = {
  //       serviceId: selectedService.id,
  //       buyerId: userSession.id,
  //       buyerName: userSession.name,
  //       sellerId: userSession.id, // Ajusta según tu estructura
  //       sellerName: selectedService.nameUser, // Ajusta según tu estructura
  //       hours: hours,
  //       type: "trade",
  //     }
  //     await postTransaction(url, data);
  //     alert("Intercambio realizado exitosamente");
  

  //     const userBuy = {
    
  //         buyerId: userSession.id,
  //         name: userSession.name,
  //         email: userSession.email,
  //         password: userSession.password,
  //         hora: userSession.hora - hours
  //     }
  //     await putData(urlusers, userSession.id, userBuy)
  //     setUpdate(update+1)
      
      
  //     //suma las horas al vendedor
  //     // await putData(urluserSeller,)

      
  //     const d = await getData(`${urlusers}/${userSession.id}`)
  //     const usuarioData = d.data
  //     console.log(usuarioData);
  //     const datosUpdateUsersData = {
  //       id: usuarioData.id,
  //       name: usuarioData.name ,
  //       email: usuarioData.email,
  //       password: usuarioData.password,
  //       hora: usuarioData.hora + hours
  //     }
  //     await putData(url, userSession.id, datosUpdateUsersData)
      
      

  //     // decrementan las horas de el servicio
  //     // await putData(urlusers, selectedService.id)
  //     const servicioUpdate = {
  //       habilidad: selectedService.habilidad,
  //       horasDisponibles: selectedService.horasDisponibles - hours,
  //       id: selectedService.id,
  //       idUsuario: selectedService.idUsuario,
  //       modalidad: selectedService.modalidad,
  //       nameUser: selectedService.nameUser,
  //       nombreServicio: selectedService.nombreServicio,
  //       ubicacion: selectedService.ubicacion
  
  //     }
  //     await putData(urlservices, selectedService.id, servicioUpdate)
  //     console.log(selectedService.horasDisponibles - hours);
      
  //       if(selectedService.horasDisponibles - hours <= 0){
  //         await deleteData(urlservices, selectedService.id)
  //       }
  //     setUpdateService(updateService+1)
      

  //     setOpenTradeModal(false);
  //   } catch (error) {
  //     alert("Error al intercambiar horas: " + error.message);
  //   }
  // };
  const handleTrade = async () => {
    if (!selectedService || hours <= 0 || selectedService.horasDisponibles <= 0) {
      return alert("No tienes horas disponibles o el servicio seleccionado no tiene horas suficientes.");
    }
  
    try {
      // Datos para el trato
      const data = {
        serviceId: selectedService.id,
        buyerId: userSession.id,
        buyerName: userSession.name,
        sellerId: selectedService.idUsuario,  // El vendedor es el dueño del servicio
        sellerName: selectedService.nameUser,
        hours: hours,
        type: "trade"
      };
      await postTransaction(url, data);  // Realiza el trato
  
      alert("Intercambio realizado exitosamente");
  
      // Actualización del comprador (restar horas)
      const userBuy = {
        ...userSession,
        hora: userSession.hora - hours
      };
      await putData(urlusers, userSession.id, userBuy);
  
      setUpdate(update + 1);  // Actualiza el estado
  
      // Actualización del vendedor (sumar horas)
      const sellerData = await getData(`${urlusers}/${selectedService.idUsuario}`);
      const seller = sellerData.data;
      const updatedSeller = {
        ...seller,
        hora: seller.hora + hours
      };
      await putData(urlusers, selectedService.idUsuario, updatedSeller);
  
      // Actualización del servicio (restar horas)
      const servicioUpdate = {
        ...selectedService,
        horasDisponibles: selectedService.horasDisponibles - hours
      };
      await putData(urlservices, selectedService.id, servicioUpdate);
  
      // Si el servicio ya no tiene horas disponibles, eliminarlo
      if (servicioUpdate.horasDisponibles <= 0) {
        await deleteData(urlservices, selectedService.id);
      }
  
      setUpdateService(updateService + 1);  // Forzar la actualización de la lista de servicios
      setOpenTradeModal(false);  // Cerrar el modal
  
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
    
      <div className="bg-white p-4 text-black ">
      
        {error && <p style={{ color: "red" }}>Error: {error}</p>}
        <ul className="">
          {services.length > 0 ? (
            services.map((service) => (
              <li key={service.id}>
                <h1 className="font-black">Creado por: {service.nameUser}</h1>
                <h1 className="font-semibold">Nombre del servicio: {service.nombreServicio}</h1>
                <h1 className="font-semibold">Habilidad: {service.habilidad}</h1>
                <h2 className="font-semibold" >Ubicacion: {service.ubicacion}</h2>
                <h3 className="font-semibold">Modalidad: {service.modalidad}</h3>
                <h5 className="font-semibold">Horas Disponibles: {service.horasDisponibles}</h5>
                
                <button
                class="focus:outline-none my bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
                  onClick={() => openTrade(service)}
                >
                  Realizar trato
                </button>
               <div className="py-2">
               <hr />
               </div>
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
        <h2 className="text-xl text-black font-bold">Intercambiar Horas</h2>
        <p className="text-black ">Servicio: {selectedService?.nombreServicio}</p>
        <p>Horas disponibles: {selectedService?.horasDisponibles}</p>
        <input
          type="number"
          className="border rounded text-black  p-2 mt-2 w-full"
          placeholder="Horas a intercambiar"
          value={hours}
          onChange={(e) => setHours(Number(e.target.value))}
        />
        <button
          className="bg-green-500 py-2 px-4 rounded-lg hover:bg-green-600 mt-4"
          onClick={handleTrade}
        >
          Confirmar
        </button>
      </Modal>


    </>
  );
};
