import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getArticles } from '../../redux/Article';
import { RootState, AppDispatch } from '../../redux/store';
import './Article.scss';
import { IArticle } from '../../redux/Article/types';

const Article = () => {
  const { articles } = useSelector((state: RootState) => state.article);
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    const getArticle = async () => {
      dispatch(getArticles());
    };
    getArticle();
  }, [dispatch]);
  const handleClick = (page: string) => {
    window.open(page, '_self');
  };
  const handleArticleClick = (id: string | number) => {
    navigate('articles/' + id);
  };
  return (
    <section className="article__section section">
      <h2 className="article__title title h2">Cтатьи</h2>
      <div className="article__cards-field"> 
      <div className="article__cards">
        {articles.map((article: IArticle, index: number) => {
          if (index < 3) {
            return (
              <div className="article__card card" style={{ backgroundImage: `url(${article.img})` }}onClick={() => handleArticleClick(article.id)}>
                <div className="article__card__title h3">{article.title}</div>
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
      <div className="article__further h6" onClick={() => handleClick('articles')}>См.далее</div>
      </div>
    </section>
  );
};

export default Article;
