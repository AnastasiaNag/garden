import { Outlet } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';


const MainPages = () => {
  return (
    <div className="main">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainPages;
