import './GridCardTwo.css'
import { ArrowDown } from 'lucide-react';

const GridCardTwo = ({ textSide, image, heading, subheading, upto, padding, color, boarderColor }) => {
    return (<section className='gridcardContainerTwo'>
        <img className='gridImage' src={image} alt='image' />
        <div className={`gridtextContainer ${textSide} ${padding} ${color}`}>
            <h2 className='gridHeading'>{heading}</h2>
            <div className='subheadingContainer'>
                <p className='gridSubheading'>{subheading}</p>
                <h3 className='gridUpto'>{upto}</h3>
            </div>
            <ArrowDown className='arrowdown' />
            <button className={`gridBtn ${color} ${boarderColor}`}>Shop Now</button>
        </div>
    </section>)
}
export default GridCardTwo