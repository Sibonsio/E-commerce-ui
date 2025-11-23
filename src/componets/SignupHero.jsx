import './SignupHero.css'
import image from '../assets/image.png'
import See from '../assets/See.svg'
import Hide from '../assets/Hide.svg'
import { useEffect, useRef, useState } from 'react'


const SignupHero = () => {
    const [isHide, setHide] = useState(false)
    const handleHide = () => {
        setHide((prev) => {
            return !prev
        })
    }
    return (<section className='signupHero'>
        <div className='signupHeroContainer'>
            <div className='imageContainer'>
                <img className='image' alt='image' src={image} />
            </div>
            <div className='textContainer'>
                <div className='text'>
                    <h1 className='title'>Sign Up</h1>
                    <p className='subtitle'>Sign up for free to accesss to in any of our products</p>
                </div>
                <form className='form'>
                    <div className='emailContainer'>
                        <label htmlFor='email'>
                            Email Address
                        </label>
                        <input id='email' />
                        <p id='emailError'>Invalid email address</p>
                    </div>
                    <div className='passwordContainer'>
                        <div className='eye'>
                            <label htmlFor='password'>
                                Password
                            </label>
                            <div className='showeye'>
                                <img onClick={handleHide} className='see' src={!isHide ? See : Hide} />
                                <p>{!isHide ? 'Show' : 'Hide'}</p>
                            </div>
                        </div>
                        <input type={!isHide ? 'password' : 'text'} id='password' />
                        <p id='passwordError'>Use 8 or more characters with a mix of letters, numbers & symbols</p>
                    </div>
                    <div className='checkboxContainer'>
                        <div className='checkbox1'>
                            <input id='checkbox1' type='checkbox' />
                            <p className='checkbox1Text'>Agree to our Terms of us and Privacy Policy</p>
                        </div>
                        <div className='checkbox2'>
                            <input id='checkbox2' type='checkbox' />
                            <p className='checkbox2Text'>Subscibe ro our monthly newsletter</p>
                        </div>
                    </div>
                    <div className='buttonContainer'>
                        <button className='submitbtn' >Sign Up</button>
                        <p className='loginText'>Already have an account? Log in</p>
                    </div>
                </form>
            </div>
        </div>
    </section>)
}
export default SignupHero