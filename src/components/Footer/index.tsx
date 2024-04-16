import './Footer.scss';


const Footer = () => {


  return (
<div className="footer__section section">
            <div className="footer__horiz">
                <div className="footer__info">
                    <div className="footer__text h5">КОНТАКТЫ:</div>
                    <a href="tel:+420722579584">
                        <div className="footer__text">+420 722 579 584</div>
                    </a>
                    <a href="mailto:vlad@webref.ru">
                        <div className="footer__text">serenitymassagecz@gmail.com</div>
                    </a>
                    <a href="https://maps.app.goo.gl/A9r9N88hjq196snM7">
                        <div className="footer__text">Mala Štěpánská 9, 12000 Praha</div>
                    </a>
                </div>
                <div className="footer__info footer__info__logo h5">
                    <div className="footer__logo">
                        <img className="footer__logo" src={require('./logo.png')} alt="" />
                    </div>
                    <div className="footer__text__opening">
                    <div className="footer__text h6">ЧАСЫ РАБОТЫ:</div>
                    <div className="footer__text h6"> пн-вс: 9-18</div>
                    </div>
                    <div className="footer__text">ВСЕ ДЛЯ САДОВОДСТВА</div>
                </div>
            <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1528.4627430191779!2d14.421102906778366!3d50.07646823132497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b94f36a92dabd%3A0x1af05284b0cce6b0!2zTWFsw6EgxaB0xJtww6Fuc2vDoSAxOTI5LzksIDEyMCAwMCBOb3bDqSBNxJtzdG8sINCn0LXRhdC40Y8!5e0!3m2!1sru!2sru!4v1710491433237!5m2!1sru!2sru" width="200" height="150"   loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
  );
};

export default Footer;
