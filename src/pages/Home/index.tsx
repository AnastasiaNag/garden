import Header from '../../components/Header';
import Gallery from '../../components/Gallery';
import Employee from '../../components/Employee';
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
                <Employee />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
};

export default Home;
