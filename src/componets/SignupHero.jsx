import './SignupHero.css'
import image from '../assets/image.png'
import See from '../assets/See.svg'
import Hide from '../assets/Hide.svg'
import { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import instance from '../config/axios/axios.jsx'



const SignupHero = () => {
    const [isHide, setHide] = useState(false)

    const EMAIL_REGEX = /^(?=.{5,50}$)[^\s@]+@[^\s@]+\.[^\s@]+$/
    const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    const NAME_REGEX = /^(?=.{1,60}$)[\p{L}]+(?:[ '-][\p{L}]+)+$/u


    //refs for the screen and error message
    const userRef = useRef()



    //states for firstname
    const [fullname, setFirstname] = useState('')
    const [validFirstname, setValidFirstname] = useState(false)
    const [onFirstnameFocus, setFirstnameFocus] = useState(false)
    // states for a email 
    const [email, setEmail] = useState('')
    const [validEmail, setValidEmail] = useState(false)
    const [onEmailFocus, setEmailFocus] = useState(false)
    // and password
    const [password, setPassword] = useState('')
    const [validPassword, setValidPassword] = useState(false)
    const [onPasswordFocus, setPasswordFocus] = useState(false)
    //state for checkboxes
    const [terms, setTerms] = useState(false)
    const [subscribe, setSubs] = useState(false)
    // and error message
    const [errMsg, setErrMsg] = useState('')
    const [showError, setShowError] = useState(false)

    const navigate = useNavigate()


    const handleHide = () => {
        setHide((prev) => {
            return !prev
        })
    }
    //useEffect for email focus
    useEffect(() => {
        userRef.current.focus()
    }, [])
    //useEffect for valid firstname
    useEffect(() => {
        const results = NAME_REGEX.test(fullname)
        setValidFirstname(results)
    }, [fullname])
    //useEffect for valid email
    useEffect(() => {
        const results = EMAIL_REGEX.test(email)
        setValidEmail(results)
    }, [email])
    //useEffect for valid password
    useEffect(() => {
        const results = PASSWORD_REGEX.test(password)
        setValidPassword(results)
    }, [password])
    //error message
    useEffect(() => {
        setShowError(false)
        setErrMsg('')
    }, [fullname, email, password])
    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const response = await instance.post('/register', JSON.stringify({ fullname, email, password, terms, subscribe }),
                { headers: { 'Content-Type': 'application/json' }, withCredentials: true })
            setEmail('')
            setPassword('')
            setTerms(false)
            setSubs(false)
            navigate('/signin', { replace: true })
            console.log(response.data)
        } catch (error) {

            if (!error?.response) {
                setShowError(true)
                setErrMsg('Server Error')
            }
            else if (error?.response?.status === 400) {
                setShowError(true)
                setErrMsg('Email already exists')
                console.log(error.response)
            }
            else {
                setShowError(true)
                setErrMsg(error.message)
                console.log(error.response)
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
                    <h1 className='title'>Sign Up</h1>
                    <p className='subtitle'>Sign up for free to accesss to in any of our products</p>
                </div>
                <form className='form' onSubmit={handleSubmit}>
                    <div className='nameContainer'>
                        <label htmlFor='firstname'>
                            Fullname
                        </label>
                        <input
                            ref={userRef}
                            id='firstname'
                            required
                            autoComplete='off'
                            type='text'
                            onChange={(e) => { setFirstname(e.target.value) }}
                            value={fullname}
                            aria-invalid={validFirstname ? true : false}
                            aria-describedby='nameError'
                            onFocus={() => { setFirstnameFocus(true) }}
                            onBlur={() => { setFirstnameFocus(false) }} />
                        <p id='nameError'>{fullname && !validFirstname && onFirstnameFocus && 'Invalid email fullname'}</p>
                    </div>
                    <div className='emailContainer'>
                        <label htmlFor='email'>
                            Email Address
                        </label>
                        <input
                            id='email'
                            required
                            autoComplete='off'
                            type='text'
                            onChange={(e) => { setEmail((e.target.value).toLocaleLowerCase()) }}
                            value={email}
                            aria-invalid={validEmail ? true : false}
                            aria-describedby='emailError'
                            onFocus={() => { setEmailFocus(true) }}
                            onBlur={() => { setEmailFocus(false) }} />
                        <p id='emailError'>{email && !validEmail && onEmailFocus && 'Invalid email address'}</p>
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
                            value={password}
                            aria-invalid={validPassword ? true : false}
                            aria-describedby='passwordError'
                            onFocus={() => { setPasswordFocus(true) }}
                            onBlur={() => { setPasswordFocus(false) }} />

                        <p id='passwordError'>{onPasswordFocus && !validPassword && 'Use 8 or more characters with a mix of at least one small letter, one capital letter, number & symbol'}</p>
                    </div>
                    <div className='checkboxContainer'>
                        <div className='checkbox1'>
                            <input id='checkbox1'
                                type='checkbox'
                                required
                                onChange={(e) => {
                                    setTerms(e.target.checked)
                                }}
                                checked={terms}
                            />
                            <p className='checkbox1Text'>Agree to our Terms of us and Privacy Policy</p>
                        </div>
                        <div className='checkbox2'>
                            <input id='checkbox2'
                                type='checkbox'
                                required
                                onChange={(e) => {
                                    setSubs(e.target.checked)
                                }}
                                checked={subscribe} />
                            <p className='checkbox2Text'>Subscibe ro our monthly newsletter</p>
                        </div>
                    </div>
                    <div className='buttonContainer'>
                        <button className={!fullname || !password || !email || !validEmail || !validPassword || !terms || !subscribe || !validFirstname ? 'disabled' : 'submitbtn'} disabled={!fullname || !validFirstname || !password || !email || !validEmail || !validPassword || !terms || !subscribe} >Sign Up  {/*isWidth*/}</button>
                        <p className='loginText'>Already have an account? <Link to={'/signin'} >Log in</Link></p>
                    </div>
                </form>
            </div>
        </div>
    </section>)
}
export default SignupHero