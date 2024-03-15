import { Link } from 'react-router-dom';
import './Article.scss';
import ArticleItem from './ArticleItem';

const Article = () => {
  return (
    <section className="article">
      <h2 className="article__title">Cтатьи</h2>
      <div className="article__cards">
        <ArticleItem
          url="https://www.google.ru/"
          imgUrl="https://img.razrisyika.ru/kart/64/252759-gornyy-peyzazh-5.jpg"
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis eveniet itaque sapiente nisi numquam saepe quidem perferendis deserunt? Distinctio beatae nisi quas adipisci neque labore qui iusto molestias nam"
        />
        <ArticleItem
          url="https://www.google.ru/"
          imgUrl="https://img.razrisyika.ru/kart/64/252759-gornyy-peyzazh-5.jpg"
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis eveniet itaque sapiente nisi numquam saepe quidem perferendis deserunt? Distinctio beatae nisi quas adipisci neque labore qui iusto molestias nam"
        />
        <ArticleItem
          url="https://www.google.ru/"
          imgUrl="https://img.razrisyika.ru/kart/64/252759-gornyy-peyzazh-5.jpg"
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis eveniet itaque sapiente nisi numquam saepe quidem perferendis deserunt? Distinctio beatae nisi quas adipisci neque labore qui iusto molestias nam"
        />
      </div>
    </section>
  );
};
export default Article;
