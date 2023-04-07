import React from 'react'

const Switch_theme_color = () => {
    return (
        <div className="dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <i className="bi bi-brightness-high-fill me-1" />
                Tema
            </a>
            <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#"><i className="bi bi-brightness-high-fill me-2" />Claro</a></li>
                <li><a className="dropdown-item" href="#"><i className="bi bi-moon-stars-fill me-2"></i>Oscuro</a></li>
            </ul>
        </div>
    )
}

export default Switch_theme_color