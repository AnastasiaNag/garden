import Header from '../../components/Header';
import WorksList from '../../components/WorksList';
import Footer from '../../components/Footer';
import './Works.scss';


const Works = () => {
    return ( 
        <div>
            <div>
                <Header />
            </div>
            <div>
                <WorksList />
            </div>

            <div>
                <Footer />
            </div>
        </div> );
}
 
export default Works;