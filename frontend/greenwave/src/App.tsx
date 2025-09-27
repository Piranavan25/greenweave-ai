
import './App.css'
import LoginScreen from './pages/LoginScreen'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignupScreen from "./pages/SignupScreen/SignupScreen";
import HomeScreen from "./pages/HomeScreen/HomeScreen";

import Layout from "./pages/Layout/Layout";


function App() {

  return (
    <>
      <Router>
      <Routes>
        <Route 
        path="/" 
        element={
        <Layout>
          <HomeScreen />
        </Layout>
        
      } 
        />
        
        <Route path="/signup" element={<SignupScreen />} />
        <Route path="/login" element={<LoginScreen />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
