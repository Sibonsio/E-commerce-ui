import './SignupBar.css'
import image from '../assets/Logo.svg'
import user from '../assets/user.svg'
import cart from '../assets/shopping-cart.svg'
import heart from '../assets/heart.svg'
import { Link, useLocation } from 'react-router-dom'

const SignupBar = () => {
    const location = useLocation()
    return (
        <section className='signupBar'>
            <div className='signupContainer'>
                <div className='search'>
                    <img className='logo' alt='logo' src={image} />
                    <nav className={`navbar ${location.pathname === '/signin' && 'remove' || location.pathname === '/signup' && 'remove'} `}>
                        <ul className='navItemContainer'>
                            <li className='nav-items'><Link className='navLinkItems'>Shop</Link></li>
                            <li className='nav-items'><Link className='navLinkItems'>Men</Link></li>
                            <li className='nav-items'><Link className='navLinkItems'>Women</Link></li>
                            <li className='nav-items'><Link className='navLinkItems'>Combos</Link></li>
                            <li className='nav-items'><Link className='navLinkItems'>Joggers</Link></li>
                        </ul>
                    </nav>
                </div>
                <div className='login'>
                    <input className='input' type='text' placeholder='Search' />
                    <div className='buttons'>
                        <div className={`usercartContainer ${location.pathname === '/signin' && 'remove' || location.pathname === '/signup' && 'remove'}`}><img className='usercartLogo' src={heart} /></div>
                        <div className={`usercartContainer ${location.pathname === '/signin' && 'remove' || location.pathname === '/signup' && 'remove'}`}><img className='usercartLogo' src={user} /></div>
                        <div className={`usercartContainer ${location.pathname === '/signin' && 'remove' || location.pathname === '/signup' && 'remove'}`}><img className='usercartLogo' src={cart} /></div>
                        <button className={location.pathname === '/signin' && `signupbtn` || location.pathname === '/signup' && `loginbtn` || location.pathname !== '/signin' && location.pathname !== '/signup' && 'remove'}><Link className={location.pathname === '/signin' ? 'link-item2' : 'link-item1'} to={'/signin'}>Login</Link></button>
                        <button className={location.pathname === '/signup' && `signupbtn` || location.pathname === '/signin' && `loginbtn` || location.pathname !== '/signin' && location.pathname !== '/signup' && 'remove'}><Link className={location.pathname === '/signup' ? 'link-item2' : 'link-item1'} to={'/signup'}>Sign Up</Link></button>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default SignupBar