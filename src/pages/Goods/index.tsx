import Header from '../../components/Header';
import GoodsList from '../../components/GoodsList';
import Footer from '../../components/Footer';
import './Goods.scss';

const Goods = () => {
    return (
        <div>
            <div>
                <Header />
            </div>
            <div>
                <GoodsList />
            </div>

            <div>
                <Footer />
            </div>
        </div>
    );
};

export default Goods;