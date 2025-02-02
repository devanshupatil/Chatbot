import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './component/Auth/Login'
import Signup from './component/Auth/Signup'
import ForgotPass from './component/Auth/ForgotPass'
import ResetPassword from './component/Auth/ResetPassword'
import OrganisationStep from './component/Pages/OrganisationStep'
import { Toaster } from 'react-hot-toast'
import Navbar from './component/Navbar'
import { ChatbotIntegration } from './component/Pages/ChatbotIntegration'
import Details from './component/Details'


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
