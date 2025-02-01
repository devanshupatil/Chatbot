import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './Auth/Login'
import Signup from './Auth/Signup'
import ForgotPass from './Auth/ForgotPass'
import ResetPassword from './Auth/ResetPassword'
import OrganisationStep from './Pages/OrganisationStep'
import { Toaster } from 'react-hot-toast'
import Navbar from './component/Navbar'
import { ChatbotIntegration } from './Pages/ChatbotIntegration'
import Details from './component/Details'
// import { useParams } from 'react-router-dom'

function App() {

  return (
    <div>
      <Toaster position="top-right" reverseOrder={false} />
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPass />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/" element={<><OrganisationStep /> <Navbar/></>}/>
          <Route path="/chatbot-integration/:index" element={<><ChatbotIntegration /> <Navbar/></>}/>
          <Route path="/company-details/:index" element={<><Details /> <Navbar/></>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
