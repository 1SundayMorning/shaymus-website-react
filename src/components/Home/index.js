import "./index.scss";
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Home = () => {
    return  (
        <div className="home-page">
            <h1>Shaymus Alwan</h1>
            <div className="button-container">
                <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/1SundayMorning">
                    <FontAwesomeIcon icon= {faGithub} color="#4d4d4e"/>
                </a>
                <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.linkedin.com/in/shaymus-alwan">
                    <FontAwesomeIcon icon= {faLinkedin} color="#4d4d4e"/>
                </a>
            </div>
        </div>
    );
}

export default Home;
