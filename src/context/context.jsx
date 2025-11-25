import { createContext, useState } from "react";

export const context = createContext({});

const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({})
    return (<context.Provider value={{ auth, setAuth }}>
        {children}
    </context.Provider>)
}
export default AuthProvider