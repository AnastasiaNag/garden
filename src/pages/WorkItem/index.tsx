import Header from '../../components/Header';
import WorkCurrentItem from '../../components/WorkCurrentItem';
import Footer from '../../components/Footer';
import './Works.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const Works = () => {
    return (
        <div>
            <div>
                <Header />
            </div>
            <Router>
                <Routes>
                    <Route path="/works/:id" element={<WorkCurrentItem />} />
                </Routes>
            </Router>
            <div>
                <Footer />
            </div>
        </div>
    );
};

export default Works;
