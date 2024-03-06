import { Link } from 'react-router-dom';
import './Footer.scss';

const Footer = () => {
    return (
        <div className="footer__section section">
            <div className="footer__admin">
                <Link to="/admin">
                    <button>Go to Admin</button>
                </Link>
            </div>
        </div>
    );
};

export default Footer;