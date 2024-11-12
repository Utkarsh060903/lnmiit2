import { createContext, useState } from "react";

export const myContext = createContext()

export const MyProvider = ({children}) => {
    const [info, setInfo] = useState([])

    return (
        <myContext.Provider value={{ info, setInfo }}>
            {children}
        </myContext.Provider>
    )
}