import React from 'react';
import './styles.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faMedium, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    return (
        <>
            <Link to="/portfolio">
                <div className="header">
                    <div className="headshot">
                        <img src="https://res.cloudinary.com/dble8dnul/image/upload/v1592183016/portfolio/headshot_gsc42z.png"></img>
                    </div>
                    <div>
                        <div className="name">Wesley Caldas</div>
                        <div className="tagline">Desenvolvedor Front-End | Full-Stack | Mobile</div>
                    </div>
                </div>
            </Link>
            <div className="social">
                <a href="https://github.com/wscld" target="_blank">
                    <FontAwesomeIcon className="icon" icon={faGithub} />
                </a>
                <a href="https://medium.com/@wscld" target="_blank">
                    <FontAwesomeIcon className="icon" icon={faMedium} />
                </a>
                <a href="https://linkedin.com/in/wscld" target="_blank">
                    <FontAwesomeIcon className="icon" icon={faLinkedin} />
                </a>
                <a href="mailto:weslcld@gmail.com" target="_blank">
                    <FontAwesomeIcon className="icon" icon={faEnvelope} />
                </a>
            </div>
        </>
    )
}

export default Header;