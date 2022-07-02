import {  createContext, useContext, useState } from "react";

export const ContextLeng = createContext({});
export const useContextProvider = () => useContext(ContextLeng);

const ContextLengProvider = ({children}) =>{

    const [lenguages, setLenguages] = useState(false);
    const [theme, setTheme] = useState(false);

    const switchLenguage = (value) =>{
        setLenguages(value);
    }
    const switchThemes = (value) =>{
        setTheme(value);

    }

    return (
        <ContextLeng.Provider value={{
            lenguages,
            theme,
            switchLenguage,
            switchThemes
        }}>
            {children}
        </ContextLeng.Provider>
    )
    
}
export default ContextLengProvider;