import './SignupBar.css'
import image from '../assets/Logo.svg'
import { Link, useLocation } from 'react-router-dom'

const SignupBar = () => {
    const location = useLocation()
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
                        <button className={location.pathname === '/' ? `signupbtn` : `loginbtn`}><Link className={location.pathname === '/' ? 'link-item2' : 'link-item1'} to={'/'}>Login</Link></button>
                        <button className={location.pathname === '/signup' ? `signupbtn` : `loginbtn`}><Link className={location.pathname === '/signup' ? 'link-item2' : 'link-item1'} to={'/signup'}>Sign Up</Link></button>
                    </nav>
                </div>
            </div>
        </section>
    )
}
export default SignupBar