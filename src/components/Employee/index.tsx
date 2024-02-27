import './Employee.scss';

const Employee = () => {
    return (
        <section className="employee">
            <h2 className="employee__title">Наши сотрудники</h2>
            <div className="employee__cards">
                <div className="employee__card">
                    <div className="employee__card_profile">
                        <div className="employee__card_photo">
                            <img src="https://naturavit.ru/image/cache/catalog/images/romaska1-800x600.jpg" alt="" />
                        </div>
                        <h3 className="employee__card_name">Bum Bum</h3>
                    </div>
                    <div className="employee__card_content">
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus, ab!</p>
                    </div>
                </div>
                <div className="employee__card">
                    <div className="employee__card_profile">
                        <div className="employee__card_photo">
                            <img src="https://naturavit.ru/image/cache/catalog/images/romaska1-800x600.jpg" alt="" />
                        </div>
                        <h3 className="employee__card_name">Bum Bum</h3>
                    </div>
                    <div className="employee__card_content">
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus, ab!</p>
                    </div>
                </div>
                <div className="employee__card">
                    <div className="employee__card_profile">
                        <div className="employee__card_photo">
                            <img src="https://naturavit.ru/image/cache/catalog/images/romaska1-800x600.jpg" alt="" />
                        </div>
                        <h3 className="employee__card_name">Bum Bum</h3>
                    </div>
                    <div className="employee__card_content">
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus, ab!</p>
                    </div>
                </div>
                <div className="employee__card">
                    <div className="employee__card_profile">
                        <div className="employee__card_photo">
                            <img src="https://naturavit.ru/image/cache/catalog/images/romaska1-800x600.jpg" alt="" />
                        </div>
                        <h3 className="employee__card_name">Bum Bum</h3>
                    </div>
                    <div className="employee__card_content">
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus, ab!</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Employee;
