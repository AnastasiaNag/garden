import Gallery from '../../components/Gallery';
import Employee from '../../components/Employee';
import Main from '../../components/Main';
import './Home.scss';
import Article from '../../components/Article';
import { useRef } from 'react';
import Footer from '../../components/Footer';

const Home = () => {
    const galleryRef = useRef<HTMLDivElement | null>(null);
    return (
        <div className="main">
            <div>
            <Main anchor={galleryRef} />
            </div>
            <div ref={galleryRef}>
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
