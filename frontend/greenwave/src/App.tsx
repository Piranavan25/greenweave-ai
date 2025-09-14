
import './App.css'
import LoginScreen from './pages/LoginScreen'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignupScreen from "./pages/SignupScreen/SignupScreen";

function App() {
  

  return (
    <>
      <Router>
      <Routes>
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/signup" element={<SignupScreen />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
