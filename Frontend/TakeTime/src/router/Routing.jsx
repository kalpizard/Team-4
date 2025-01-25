import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import {Login} from '../auth/pages/Login'

export const Routing = () =>{
  return (
    <div id='root'>
        <Router>
          <Routes>
            <Route path="/login" element={<Login />} />            
          </Routes>
        </Router>
    </div>
  )
}