import usFlag from '../assets/united-states-flag-emoji-clipart-original.svg'
import spainFlag from '../assets/spain-flag-emoji-clipart-original.svg'
import serbianFlag from '../assets/serbia-flag-emoji-clipart-original.svg'

const Languages = () => {
    return (
        <div className="dropdown">
            <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                <img className='lang-icons me-2' src={usFlag} />
                English
            </button>
            <ul className="dropdown-menu">
                <li><a className="dropdown-item"><img className='lang-icons me-2' src={usFlag} />English</a></li>
                <li><a className="dropdown-item" href="#"><img className='lang-icons me-2' src={serbianFlag} />Српски</a></li>
                <li><a className="dropdown-item" href="#"><img className='lang-icons me-2' src={serbianFlag} />Srpski</a></li>
                <li><a className="dropdown-item" href="#"><img className='lang-icons me-2' src={spainFlag} />Español</a></li>
            </ul>
        </div>
    )
}

export default Languages