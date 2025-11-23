import './SignupBar.css'
import image from '../assets/Logo.svg'
import { Link } from 'react-router-dom'

const SignupBar = () => {
    return (
        <section className='signupBar'>
            <div className='signupContainer'>
                <div className='search'>
                    <img className='logo' alt='logo' src={image} />
                    <input className='input' type='text' placeholder='Search' />
                </div>
                <div className='login'>
                    <p className='language'>{`English (United States)`}</p>
                    <nav className='buttons'>
                        <button className='loginbtn'><Link className='link-item1' to={'/signin'}>Login</Link></button>
                        <button className='signupbtn'><Link className='link-item2' to={'/signup'}>Sign Up</Link></button>
                    </nav>
                </div>
            </div>
        </section>
    )
}
export default SignupBar