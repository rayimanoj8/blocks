import {createContext, useContext} from 'react'

const ThemeContext = createContext({
    theme: 'light',
    toggleTheme: () => {}
})

const ThemeProvider = ThemeContext.Provider;
function useTheme(){
    return useContext(ThemeContext);
}

export { ThemeProvider, useTheme };
