import './SignupBar.css'
import image from '../assets/Logo.svg'

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
                        <button className='loginbtn'>Login</button>
                        <button className='signupbtn'>Sign Up</button>
                    </nav>
                </div>
            </div>
        </section>
    )
}
export default SignupBar