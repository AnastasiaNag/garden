import Header from '../../components/Header';
import Gallery from '../../components/Gallery';

import Footer from '../../components/Footer';
import './Home.scss';

const Home = () => {
    return (
        <div className="main">
            <div>
                <Header />
            </div>
            <div>
                <Gallery />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
};

export default Home;
