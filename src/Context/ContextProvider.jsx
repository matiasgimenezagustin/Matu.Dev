import {  createContext, useContext, useState } from "react";

export const ContextLeng = createContext({});
export const useContextProvider = () => useContext(ContextLeng);

const ContextLengProvider = ({children}) =>{

    const [lenguages, setLenguages] = useState(true);

    lenguages === false ? 
    setLenguages(false) : console.log("hola")

    return (
        <ContextLeng.Provider value={{
            lenguages
        }}>
            {children}
        </ContextLeng.Provider>
    )
    
}
export default ContextLengProvider;