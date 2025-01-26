import { SideBar } from '../../components/LoginSideBar/SideBar';
import { ListServices } from '../../components/LoginSideBar/ListServices';

export const PrincipalPage = () => {
  return (
  <div className="flex w-screen h-screen">
      {/* Sidebar a la izquierda */}
      <div className="w-2/6 bg-sky-100 flex justify-center items-center">
        <SideBar />
      </div>

      {/* Contenido principal */}
      <div className="flex-1 bg-lime-300 relative">
        {/* Contenedor posicionado */}
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-white text-white overflow-auto">
          <ListServices />
        </div>
      </div>

      {/* Otro contenido a la derecha */}
      <div className="w-2/6 bg-sky-100 text-white">
       
      </div>
    </div>
  );
};
