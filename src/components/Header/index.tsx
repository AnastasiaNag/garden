import { height } from '@mui/system';
import './Header.scss';
import { scroller } from 'react-scroll';

const Header = () => {
  return (
    <div className="header">
        <div className="logo">
            <div className="logo__img">
                <img src="img/logo (1).png" alt="logo" />
            </div>
            <div className="logo__name">Planto.</div>
        </div>
        <div className="main-menu">
            <button onClick={() => scroller.scrollTo('Footer', {duration: 800, smooth: true})} className="main-menu__home">Home</button>
            <button onClick={() => scroller.scrollTo('Footer', {duration: 800, smooth: true})} className="main-menu__plantstype">Plants Type</button>
            <button onClick={() => scroller.scrollTo('Footer', {duration: 800, smooth: true})} className="main-menu__more">More</button>
            <button onClick={() => scroller.scrollTo('Footer', {duration: 800, smooth: true})} className="main-menu__contact">Contact</button>
        </div>
        <div className="right-menu">
            <img src="img/lupa.png" alt="" className="right-menu__search" />
            <img src="img/sumka.png" alt="" className="right-menu__cart" />
            <img src="img/poloska.png" alt="" className="right-menu__burgermenu" />
        </div>
    </div>
  )
};
export default Header;
