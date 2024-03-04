import { Link } from 'react-router-dom';
import './Article.scss';

const Article = () => {
    return (
        <section className="article">
            <h2 className="article__title">Cтатьи</h2>
            <div className="article__cards">
                <Link to="https://www.google.ru/" className="article__card">
                    <div className="article__card_img">
                        <img src="https://img.razrisyika.ru/kart/64/252759-gornyy-peyzazh-5.jpg" alt="" />
                    </div>
                    <div className="article__text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis eveniet itaque sapiente nisi numquam saepe quidem perferendis
                        deserunt? Distinctio beatae nisi quas adipisci neque labore qui iusto molestias nam corrupti!
                    </div>
                </Link>
                <Link to="https://www.google.ru/" className="article__card">
                    <div className="article__card_img">
                        <img src="https://img.razrisyika.ru/kart/64/252759-gornyy-peyzazh-5.jpg" alt="" />
                    </div>
                    <div className="article__text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis eveniet itaque sapiente nisi numquam saepe quidem perferendis
                        deserunt? Distinctio beatae nisi quas adipisci neque labore qui iusto molestias nam corrupti!
                    </div>
                </Link>
                <Link to="https://www.google.ru/" className="article__card">
                    <div className="article__card_img">
                        <img src="https://img.razrisyika.ru/kart/64/252759-gornyy-peyzazh-5.jpg" alt="" />
                    </div>
                    <div className="article__text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis eveniet itaque sapiente nisi numquam saepe quidem perferendis
                        deserunt? Distinctio beatae nisi quas adipisci neque labore qui iusto molestias nam corrupti!
                    </div>
                </Link>
            </div>
        </section>
    );
};
export default Article;
