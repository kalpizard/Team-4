import { Routing } from '../src/router/Routing.jsx';
// import Footer from './components/Footer.jsx';
import { Header } from './components/Header.jsx';
import { AuthProvider } from './contexts/AuthContext.jsx';
import { ServicesProvider } from './contexts/ServicesContext.jsx';

export function TakeTime() {
  return (
    <AuthProvider>
      <ServicesProvider>
        <Header />
        <Routing />
        {/* <Footer /> */}
      </ServicesProvider>
    </AuthProvider>
  );
}
