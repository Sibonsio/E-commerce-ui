import './Carousel.css'
import { ChevronRight, ChevronLeft } from 'lucide-react';
import image1 from '../assets/image1.jpeg'
import image2 from '../assets/image2.jpeg'
import image3 from '../assets/image3.png'
import { useState, useEffect } from 'react';



const Carousel = () => {
    let interval = 3000;
    const images = [image2, image1, image3];
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
            <button className='errowbtn left' onClick={prevImage}><ChevronLeft className='lefterrow' /></button>
            <div className='carouselContainer'>
                <img className='carouselImage' src={images[currentIndex]} />
            </div>
            <button className='errowbtn right' onClick={nextImage}><ChevronRight className='righterrow' /></button>
            <div className='dots'>{images.map((_, index) => {
                return <button key={index} className={`circle ${currentIndex === index && 'active'}`} onClick={() => { setCurrentIndex(index) }} ></button>
            })}</div>
        </div>
    )
}
export default Carousel