import './GrassSection.css'
import image from '../assets/image.png'
import { Link } from 'react-router-dom'

const GrassSection = () => {
    return (<section className='grassSection'>
        <div className='grassTextSection'>
            <div className='grassTextContainer'>
                <h2 className='grassHeading'>WE MADE YOUR EVERYDAY FASHION BETTER!</h2>
                <p className='grassSubheading'>In our journey to improve everyday fashion, euphoria presents EVERYDAY wear range - Comfortable & Affordable fashion 24/7</p>
                <button className={`grassBtn`}><Link className='shoplinkbtn' to='#'>Shop Now</Link></button>
            </div>
        </div>
        <div className='grassimageSection'>
            <img className='grassimage' src={image} />
        </div>
    </section>)
}
export default GrassSection