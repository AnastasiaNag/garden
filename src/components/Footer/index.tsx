import './Footer.scss';

import AdminPage from '../AdminPage';

const Footer = () => {


  return (
    <div className="footer__section section">
      <div className="footer__admin">
        <AdminPage/>
      </div>
    </div>
  );
};

export default Footer;
