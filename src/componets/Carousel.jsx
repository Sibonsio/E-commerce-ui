import './Carousel.css'
import { ChevronRight, ChevronLeft } from 'lucide-react';
import image1 from '../assets/image1.png'
import image2 from '../assets/image2.jpeg'
import image3 from '../assets/image3.png'
import image4 from '../assets/image4.jpeg'
import image6 from '../assets/image6.png'
import carouselData from '../carouselData.json'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';



const Carousel = () => {
    let interval = 3000;
    const images = [image1, image2, image3, image4, image6];
    const [currentIndex, setCurrentIndex] = useState(0);
    const nextImage = () => {
        setCurrentIndex((prev) => {
            return prev === images.length - 1 ? 0 : prev + 1
        })
    }
    const prevImage = () => {
        setCurrentIndex((prev) => {
            return prev === 0 ? images.length - 1 : prev - 1
        })
    }
    useEffect(() => {
        const timer = setInterval(nextImage, interval)
        return () => {
            clearInterval(timer)
        }
    }, [currentIndex, interval])
    return (
        <div className='carousel'>

            <section className='carouselContainer'>
                <img className='carouselImage' src={images[currentIndex]} />
                <article className='textCarousel'>
                    <h1 className='heading'>{carouselData[currentIndex].heading}</h1>
                    <p className='subHeading'>{carouselData[currentIndex].subHeading}</p>
                    <button className='shopbtn'><Link className='shoplinkbtn' to='#'>Shop Now</Link></button>
                </article>
            </section>
            <button className='errowbtn left' onClick={prevImage}><ChevronLeft className='lefterrow' /></button>
            <button className='errowbtn right' onClick={nextImage}><ChevronRight className='righterrow' /></button>
            <div className='dots'>{images.map((_, index) => {
                return <button key={index} className={`circle ${currentIndex === index && 'active'}`} onClick={() => { setCurrentIndex(index) }} ></button>
            })}</div>
        </div>
    )
}
export default Carousel