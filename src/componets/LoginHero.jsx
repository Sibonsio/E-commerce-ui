import './SignupHero.css'
import image from '../assets/bert-b-rhNff6hB41s-unsplash 1.png'
import See from '../assets/See.svg'
import Hide from '../assets/Hide.svg'
import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import instance from '../config/axios/axios.jsx'
import AuthHook from '../hooks/authHook.jsx'

const SigninHero = () => {
    const [isHide, setHide] = useState(false)
    //refs for the screen and error message
    const userRef = useRef()

    // states for a email 
    const [email, setEmail] = useState('')
    // and password
    const [password, setPassword] = useState('')

    // and error message
    const [errMsg, setErrMsg] = useState('')
    const [showError, setShowError] = useState(false)

    //auth hook
    const { setAuth } = AuthHook()
    const handleHide = () => {
        setHide((prev) => {
            return !prev
        })
    }
    //useEffect for email focus
    useEffect(() => {
        userRef.current.focus()
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const response = await instance.post('/login', JSON.stringify({ email, password }),
                { headers: { 'Content-Type': 'application/json' }, withCredentials: true })
            setEmail('')
            setPassword('')
            setAuth(response.data)
        } catch (error) {
            if (error?.response) {
                setShowError(true)
                setErrMsg('Server Error')
            }
            else if (error?.response?.status === 400) {
                setShowError(true)
                setErrMsg('Invalid email or passord')
            }
            else {
                setShowError(true)
                setErrMsg(error.message)
            }

        }

    }

    return (<section className='signupHero'>
        <div className='signupHeroContainer'>
            <div className='imageContainer'>
                <img className='image' alt='image' src={image} />
            </div>
            <div className='textContainer'>
                <div className='text'>
                    {showError && <p className='errMessage'>{errMsg}</p>}
                    <h1 className='title'>Sign In</h1>
                </div>
                <form className='form' onSubmit={handleSubmit}>
                    <div className='emailContainer'>
                        <label htmlFor='email'>
                            Email Address
                        </label>
                        <input
                            ref={userRef}
                            id='email'
                            required
                            autoComplete='off'
                            type='text'
                            onChange={(e) => { setEmail(e.target.value) }}
                            value={email}
                        />
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
                        <input type={!isHide ? 'password' : 'text'}
                            id='password'
                            required
                            onChange={(e) => { setPassword(e.target.value) }}
                            value={password} />
                    </div>
                    <div className='buttonContainer'>
                        <button className={!password || !email ? 'disabled' : 'submitbtn'} disabled={!password || !email} >Sign In  {/*isWidth*/}</button>
                        <p className='loginText'>Don't have an account? <Link to={'/signup'}>Sign Up</Link></p>
                    </div>
                </form>
            </div>
        </div>
    </section>)
}
export default SigninHero