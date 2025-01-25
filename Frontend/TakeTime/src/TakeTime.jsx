import { Routing } from '../src/router/Routing.jsx';
import Footer from './components/Footer.jsx';
import { Header } from './components/Header.jsx';
import { AuthProvider } from './contexts/AuthContext.jsx';

export function TakeTime() {
  return (
    <AuthProvider>
      <Header />
      <Routing />
      {/* <Footer /> */}
    </AuthProvider>
  );
}
