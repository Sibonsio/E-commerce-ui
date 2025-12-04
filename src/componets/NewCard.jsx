import './NewCard.css'


const NewCard = ({ image, heading }) => {
    return (<section className='cardContainer'>
        <div className='imageCardContainer'>
            <img className='imagearrival' src={image} />
        </div>
        <h2 className='cardarrivalheading'>{heading}</h2>
    </section>)
}
export default NewCard