import {  createContext, useContext, useState } from "react";

export const ContextLeng = createContext({});
export const useContextProvider = () => useContext(ContextLeng);

const ContextLengProvider = ({children}) =>{

    const [lenguages, setLenguages] = useState(false);

    const switchLenguage = (value) =>{
        setLenguages(value)
    }


    return (
        <ContextLeng.Provider value={{
            lenguages,
            switchLenguage
        }}>
            {children}
        </ContextLeng.Provider>
    )
    
}
export default ContextLengProvider;