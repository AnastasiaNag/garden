import Gallery from '../../components/Gallery';
import Employee from '../../components/Employee';
import './Home.scss';
import Article from '../../components/Article';
import { Element } from 'react-scroll';

const Home = () => {
    return (
        <div className="main">
            <div>
                <Gallery />
            </div>
            <div>
                <Employee />
            </div>
            <div>
                <Article />
            </div>
        </div>
    );
};

export default Home;
