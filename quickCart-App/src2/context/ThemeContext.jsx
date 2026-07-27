import { createContext, useContext , useState } from 'react';

const ThemeContext = createContext({
    darkMode : false,
    toggleTheme:() => {}
});
//const ThemeContext = createContext();
export function ThemeProvider({children}){
    const [darkMode, setDarkMode] = useState(false);
    const toggleTheme = () => {
        setDarkMode(!darkMode);
    }
    return(
        <ThemeContext.Provider value={{darkMode, toggleTheme}}>
            <div className={darkMode? "app dark-mode" : "app"}>
                {children}
            </div>
        </ThemeContext.Provider>
        
    );
}

export function useTheme(){
    return useContext(ThemeContext);
}
