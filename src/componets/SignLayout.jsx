import { Outlet } from "react-router-dom"
import SignupBar from "./SignupBar.jsx"

const SignLayout = () => {

    return (<section>
        <SignupBar />
        <Outlet />
    </section>)

}
export default SignLayout