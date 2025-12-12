import './BigSavingZone.css'
import GridCard from './GridCard.jsx'
import data from '../bigSavingZoneData.json'
import dataTwo from '../bigSavingZoneDataTwo.json'
import SectionHeading from './SectionHeading.jsx'
import GridCardTwo from './GridCardTwo'
const BigSavingZone = () => {
    return (<section className='gridItems'>
        <SectionHeading heading='Big Saving Zone' />
        <div className='flexGrid'>
            <div className='flexContainerOne'>
                {data.map((item) => {
                    return (<GridCard key={item.id} color={item.color} boarderColor={item.boaderColor} heading={item.heading} upto={item.upto}
                        subheading={item.subheading} image={item.image} textSide={item.textSide} padding={item.padding} />)
                })}
            </div>
            <div className='flexContainerTwo'>
                {dataTwo.map((item) => {
                    return (<GridCardTwo key={item.id} color={item.color} boarderColor={item.boaderColor} heading={item.heading} upto={item.upto}
                        subheading={item.subheading} image={item.image} textSide={item.textSide} padding={item.padding} />)
                })}
            </div>
        </div>
    </section>)
}
export default BigSavingZone