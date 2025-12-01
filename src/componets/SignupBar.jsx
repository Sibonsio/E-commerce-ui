import './SignupBar.css'
import image from '../assets/Logo.svg'
import user from '../assets/user.svg'
import cart from '../assets/shopping-cart.svg'
import heart from '../assets/heart.svg'
import search from '../assets/search.svg'
import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Menu } from 'lucide-react';

const SignupBar = () => {
    const [isWidth, setWidth] = useState(window.innerWidth);
    useEffect(() => {
        const handleWidth = () => {
            setWidth(window.innerWidth)
        };
        window.addEventListener('resize', handleWidth);

        return () => {
            window.removeEventListener('resize', handleWidth)
        }
    }, [isWidth])
    const location = useLocation()
    return (
        <section className='signupBar'>
            <div className='signupContainer'>
                <div className={`search ${location.pathname !== '/signin' && location.pathname !== '/signup' && 'increaseWidth'}`}>
                    <div className='logoContainer'><img className='logo' alt='logo' src={image} /></div>
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
                <div className={`login ${location.pathname !== '/signin' && location.pathname !== '/signup' && 'reduceWidth'}`}>
                    <input className='input' type='text' placeholder='Search' />
                    <div className='buttons'>
                        <p>{isWidth}</p>
                        <button className={`usercartContainer searchbtncolor ${isWidth > 1266 && 'searchbtn'} ${location.pathname === '/signin' && 'remove' || location.pathname === '/signup' && 'remove'}`}><img className='usercartLogo' src={search} /></button>
                        <button className={`usercartContainer ${location.pathname === '/signin' && 'remove' || location.pathname === '/signup' && 'remove'}`}><img className='usercartLogo' src={heart} /></button>
                        <button className={`usercartContainer ${location.pathname === '/signin' && 'remove' || location.pathname === '/signup' && 'remove'}`}><img className='usercartLogo' src={user} /></button>
                        <button className={`usercartContainer ${location.pathname === '/signin' && 'remove' || location.pathname === '/signup' && 'remove'}`}><img className='usercartLogo' src={cart} /></button>
                        <button className={location.pathname === '/signin' && `signupbtn` || location.pathname === '/signup' && `loginbtn` || location.pathname !== '/signin' && location.pathname !== '/signup' && 'remove'}><Link className={location.pathname === '/signin' ? 'link-item2' : 'link-item1'} to={'/signin'}>Login</Link></button>
                        <button className={location.pathname === '/signup' && `signupbtn` || location.pathname === '/signin' && `loginbtn` || location.pathname !== '/signin' && location.pathname !== '/signup' && 'remove'}><Link className={location.pathname === '/signup' ? 'link-item2' : 'link-item1'} to={'/signup'}>Sign Up</Link></button>
                        <Menu className={`menu ${isWidth > 1090 && 'hidemenu'}`} />
                    </div>
                </div>
            </div>
        </section>
    )
}
export default SignupBar