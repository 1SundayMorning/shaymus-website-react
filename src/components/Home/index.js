import "./index.scss";
import { Link } from 'react-router-dom';

const Home = () => {
    return  (
        <div className="home-page">
            <h1>Shaymus Alwan</h1>
            <p>This is the homepage of my React website.</p>
            <Link to="/contact">Contact</Link>
        </div>
    );
}

export default Home;
