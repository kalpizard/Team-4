import { SideBar } from '../../components/LoginSideBar/SideBar';
import { ListServices } from '../../components/LoginSideBar/ListServices';

export const PrincipalPage = () => {
  return (
    <div className="flex w-screen h-screen">
      {/* Sidebar a la izquierda */}
      
      <div className="w-1/4 bg-sky-50  flex justify-center items-center">
   
        <SideBar />
      </div>

      {/* Contenido principal a la derecha */}
      <div className="flex-1 bg-lime-300 flex flex-col">
        <div className="h-full bg-black text-white p-4">
         
        <ListServices />
        </div>
     
      </div>
      <div className="w-1/4 bg-sky-50   bg-gray-800 text-white">
   ffff
   
 </div>
    </div>
  );
};
