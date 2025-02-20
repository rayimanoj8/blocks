import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Profile from "@/components/profile-template/Profile.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
        <Routes>
            <Route path="" element={<Profile />}/>
        </Routes>
    </BrowserRouter>
  </StrictMode>,
)
