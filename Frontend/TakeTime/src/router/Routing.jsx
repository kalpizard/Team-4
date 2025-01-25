import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import {Login} from '../auth/pages/Login'
import { PrincipalPage } from '../TakeTime/pages/PrincipalPage'

export const Routing = () =>{
  return (
    <div id='root'>
        <Router>
          <Routes>
            <Route path="/login" element={<Login />} />    
            <Route path="/home" element={<PrincipalPage />} />            
          </Routes>
        </Router>
    </div>
  )
}