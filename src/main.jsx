import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Profile from "@/components/profile-template/Profile.jsx";
import {ChatGPT} from "./chatgpt/ChatGPT.jsx";
import {Home} from "./components/template/Home.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <BrowserRouter>
          <Routes>
              <Route path="/chatgpt"  element={<ChatGPT/>}/>
              <Route path="/whatsapp"  element={<Home/>}/>
              <Route path="/profile"  element={<Profile/>}/>
          </Routes>
      </BrowserRouter>
  </StrictMode>,
)
