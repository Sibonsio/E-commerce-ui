import './SectionHeading.css'

const SectionHeading = ({ heading }) => {
    return (
        <header className='headerContainer'>
            <div className='purpleLine'></div>
            <h2 className='headerHeading'>{heading}</h2>
        </header>
    )
}
export default SectionHeading