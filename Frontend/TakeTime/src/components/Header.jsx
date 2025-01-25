import { Link, useNavigate } from 'react-router-dom';
import { useAuthContext } from '../contexts/AuthContext';
export const Header = () => {
  const { userSession, update, setUpdate } = useAuthContext()
  const pagesList = [
    { path: '/home', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/faq', label: 'Faq' },
  ];

  const navigate = useNavigate();

  const handleLogout = () => {
    document.cookie = 'refresh_token=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    document.cookie = 'access_token=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    setUpdate(update + 1)
    navigate('/login');
  };

  return (
    <header className="flex items-center justify-between bg-nav h-16 px-4 shadow-md ">
      {/* Logo */}
      <div className="flex items-center">
        <div className="px-4 py-2 text-lg font-semibold">
          TakeTime
        </div>
      </div>

      {/* Navegación */}
      <nav className="flex-1 flex justify-center">
        <ul className="flex space-x-6">
          {pagesList.map((e) => (
            <li key={e.path}>
              <Link
                to={e.path}
                className="text-gray-700 hover:text-rose-500 transition-colors duration-200"
              >
                {e.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {userSession ? (
        <>
          {/* Menú de usuario y Logout */}
          <div className="flex items-center space-x-4">
            {/* Menú desplegable */}
            <div className="relative group">
              <button
                id="user-menu-button"
                className="px-4 py-2 bg-gray-200 rounded-md text-gray-700 hover:bg-gray-300 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              <div
                className="hidden flex-col group-hover:flex absolute top-30 right-[2] bottom-0 z-10 mt-2 w-36 h-36 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 focus:outline-none"
                role="menu"
                aria-orientation="vertical"
              >
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  role="menuitem"
                >
                  Nombre: {userSession.name}
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  role="menuitem"
                >
                  Horas: {userSession.hora}
                </a>
              </div>
            </div>

            {/* Botón de logout */}
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-rose-500 text-white rounded-md hover:bg-rose-600 transition-colors"
            >
              Logout
            </button>
          </div>
        </>) : (
        <>

          <Link to={"/login"}>Login</Link>
          <Link to={"/register"}>Resgister</Link>
        </>
      )}
    </header>
  );
};
