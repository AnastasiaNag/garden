import { Link } from 'react-router-dom';
import './Article.scss';
import ArticleItem from './ArticleItem';
import SliderArticle from './ArticleItem/SliderArticle';

const Article = () => {
  const data = [
    {
      id: '329735982723759',

      url: 'https://www.google.ru/',
      imgUrl: 'https://img.razrisyika.ru/kart/64/252759-gornyy-peyzazh-5.jpg',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis eveniet itaque sapiente nisi numquam saepe quidem perferendis deserunt? Distinctio beatae nisi quas adipisci neque labore qui iusto molestias nam',
    },
    {
      id: '2370272087502',

      url: 'https://www.google.ru/',
      imgUrl: 'https://img.razrisyika.ru/kart/64/252759-gornyy-peyzazh-5.jpg',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis eveniet itaque sapiente nisi numquam saepe quidem perferendis deserunt? Distinctio beatae nisi quas adipisci neque labore qui iusto molestias nam',
    },
    {
      id: '723057238723',

      url: 'https://www.google.ru/',
      imgUrl: 'https://img.razrisyika.ru/kart/64/252759-gornyy-peyzazh-5.jpg',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis eveniet itaque sapiente nisi numquam saepe quidem perferendis deserunt? Distinctio beatae nisi quas adipisci neque labore qui iusto molestias nam',
    },
    {
      id: '9823752735',

      url: 'https://www.google.ru/',
      imgUrl: 'https://img.razrisyika.ru/kart/64/252759-gornyy-peyzazh-5.jpg',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis eveniet itaque sapiente nisi numquam saepe quidem perferendis deserunt? Distinctio beatae nisi quas adipisci neque labore qui iusto molestias nam',
    },
    {
      id: '9923582392',

      url: 'https://www.google.ru/',
      imgUrl: 'https://img.razrisyika.ru/kart/64/252759-gornyy-peyzazh-5.jpg',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis eveniet itaque sapiente nisi numquam saepe quidem perferendis deserunt? Distinctio beatae nisi quas adipisci neque labore qui iusto molestias nam',
    },
  ];
  return (
    <section className="article">
      <h2 className="article__title">Cтатьи</h2>
      <div className="article__cards">
        {/* <ArticleItem
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
        <ArticleItem
          url="https://www.google.ru/"
          imgUrl="https://img.razrisyika.ru/kart/64/252759-gornyy-peyzazh-5.jpg"
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis eveniet itaque sapiente nisi numquam saepe quidem perferendis deserunt? Distinctio beatae nisi quas adipisci neque labore qui iusto molestias nam"
        /> */}
      </div>
      <SliderArticle items={data} />
    </section>
  );
};
export default Article;
