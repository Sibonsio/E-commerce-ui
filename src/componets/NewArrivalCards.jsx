import './NewArrivalCards.css'
import NewCard from './NewCard.jsx'
import newArrivalData from '../newArrivalData.json'
import SectionHeading from './SectionHeading.jsx'
import { useRef } from 'react'
import { ChevronRight, ChevronLeft } from 'lucide-react';

const NewArrivalCards = () => {
    const scrollRef = useRef()
    const leftScroll = () => {
        scrollRef.current.scrollBy({
            left: -300,
            behavior: 'smooth'
        })
    }
    const rightScroll = () => {
        scrollRef.current.scrollBy({
            left: 300,
            behavior: 'smooth'
        })
    }
    return (
        <section className='cardsSectionContainer'>
            <SectionHeading heading='New Arrival' />
            <div className='cardBtnContainer'>
                <button className='nextBtn' onClick={leftScroll}><ChevronLeft className='clickNextBtn' /></button>
                <div ref={scrollRef} className='newarrivalcards'>
                    {newArrivalData.map((data) => {
                        return <NewCard key={data.id} image={data.image} heading={data.heading} />
                    })}
                </div>
                <button className='nextBtn' onClick={rightScroll}><ChevronRight className='clickNextBtn' /></button>
            </div>
        </section>
    )
}
export default NewArrivalCards