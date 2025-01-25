import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import {Login} from '../auth/pages/Login'
import { PrincipalPage } from '../TakeTime/pages/PrincipalPage'
import Register from '../auth/pages/Register'

export const Routing = () =>{
  return (
    <div id='root'>

          <Routes>
           <Route path="/" element={<PrincipalPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/home" element={<PrincipalPage />} />
          </Routes>

    </div>
  )
}