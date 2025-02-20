import {useEffect, useState} from 'react';
import './App.css'
import MyCard from "@/components/Card.jsx";
import {ThemeProvider} from "@/context/theme.js";
import {Toggle} from "@/components/ui/toggle.jsx";
import { Sun,Moon } from 'lucide-react';
import Navbar from "@/components/NavBar.jsx";
import Bg from "@/components/Bg.jsx"
import Profile from "@/components/profile-template/Profile.jsx";


function App() {
  return (
    <>
        <Profile/>
    </>
  );
}

export default App
