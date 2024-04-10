import { height } from '@mui/system';
import './Header.scss';
import { scroller } from 'react-scroll';
import Cart from '../Cart'
import { Link } from '@mui/material';



const Header = () => {
  
  return (
    <div className="header">
        <div onClick={() => scroller.scrollTo('Main', {duration: 800, smooth: true})} className="logo">
            <div className="logo__img">
                <img src="img/logo (1).png" alt="logo" />
            </div>
            <div className="logo__name">Planto.</div>
        </div>
        <div className="main-menu">
            <Link underline="hover" className="main-menu__home" color="inherit" href="/">
              Главная
            </Link>
            <Link underline="hover" className="main-menu__plantstype" color="inherit" href="/works">
              Услуги
            </Link>
            <Link underline="hover" className="main-menu__more" color="inherit" href="/goods">
              Товары
            </Link>
            <button className="main-menu__contact">Статьи</button>
            <button onClick={() => scroller.scrollTo('Footer', {duration: 800, smooth: true})} className="main-menu__contact">Контакты</button>
        </div>
        <div className="right-menu">
        
            <Cart />
            {/* <img src="img/poloska.png" alt="" className="right-menu__burgermenu" /> */}
            
        </div>
    </div>
  )
};
export default Header;
