import { Children, createContext, useContext, useState } from "react";

export const createContext = createContext({});
export const useContextProvider = () => useContext(createContext);

const contextProvider = () =>{
    const [lenguage, setLenguage] = useState();

    return (
        <contextProvider.Provider value={{
            lenguage
        }}>
            {Children}
        </contextProvider.Provider>
    )
}