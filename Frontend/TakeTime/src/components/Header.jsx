import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const pagesList = [
    {
      path: '/home',
      label: 'Home',
    },
    {
      path: '/about',
      label: 'About',
    },
    {
      path: '/faq',
      label: 'Faq',
    },
  ];

  const navigate = useNavigate();

  const handleLogout = () => {
    document.cookie = 'refresh_token=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    document.cookie = 'access_token=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    navigate('/home');
  };

  return (
    <header>
      <div>
        <div>Take Time</div>
        <button onClick={() => handleLogout()}>Logout</button>
      </div>
      <div>
        <ul>
          {pagesList.map((e) => (
            <li key={e.path}>
              <Link to={e.path}>{e.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
