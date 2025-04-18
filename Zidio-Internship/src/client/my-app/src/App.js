 import React from "react";
 import { Routes, Route } from "react-router-dom";
 import Login from "./pages/Login";
 import Signup from "./pages/Signup";
 import UserDashboard from "./pages/UserDashboard";
 import ProtectedRoute from "./components/ProtectedRoute";
 
 function App() {
   return (
     
     <Routes>
       <Route path="/" element={<Login />} />
       <Route path="/signup" element={<Signup />} />
       <Route path="/dashboard" element={
         <ProtectedRoute>
           <UserDashboard />
         </ProtectedRoute>
       } />
     </Routes>
     
   );
 }
 
 export default App;
 