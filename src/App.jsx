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
    const [theme, setTheme] = useState("light");
    const toggleTheme = () => {
        if(theme === "light") setTheme("dark");
        else setTheme("light");
    }

    useEffect(() => {
        document.querySelector("html").classList.remove("light","dark");
        document.querySelector("html").classList.add(theme);
    }, [theme]);
  return (
    <>
        <Profile/>
    </>
  );
}

export default App
