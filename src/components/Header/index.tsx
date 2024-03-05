import './Header.scss';

const Header = () => {
  return (
    <div className="header">
      <div className="header__up">
        <div className="buttons">
          <button className="buttons__up">Рязановский</button>
          <button className="buttons__up">Помощь покупателям</button>
          <button className="buttons__up">Система скидок</button>
          <button className="buttons__up">Вакансии</button>
          <button className="buttons__up">Бесплатная доставка</button>
        </div>
        <div className="number">8 (800) 555 35-35</div>
      </div>
      <div className="header__down">
        <img src="/img/poro.jpg" alt="poro" className="header__down-img" />
        <nav className="header__nav">
          <div className="header__nav-btn">ОЗЕЛЕНЕНИЕ УЧАСТКА</div>
          <div className="header__nav-btn">УСЛУГИ САДОВНИКА</div>
          <div className="header__nav-btn">ИНТЕРЬЕРНЫЕ РАСТЕНИЯ</div>
          <div className="header__nav-btn">О КОМПАНИИ</div>
          <div className="header__nav-btn">КОНТАКТЫ</div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
