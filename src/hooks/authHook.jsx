import { context } from "../context/context.jsx";
import { useContext } from "react";

const AuthHook = () => {
    const myContext = useContext(context)
    if (!myContext) throw new Error('AuthHook must be used within AuthProvider')
    return myContext
}
export default AuthHook