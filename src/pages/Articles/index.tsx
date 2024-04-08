import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getArticles } from '../../redux/Article';
import { RootState, AppDispatch } from '../../redux/store';
import { Breadcrumbs, Typography, Link } from '@mui/material';
import { IArticle } from '../../redux/Article/types';

const Articles = () => {
  const { articles } = useSelector((state: RootState) => state.article);
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    const getArticle = async () => {
      dispatch(getArticles());
    };
    getArticle();
  }, [dispatch]);

  const handleItemClick = (id: any) => {
    navigate(id);
  };
  return (
      <div className="item-list__section section">
      <div className="item-list__section__breadcrumb section__breadcrumb">
        <Breadcrumbs aria-label="breadcrumb" className="section__breadcrumb">
          <Link underline="hover" className="section__breadcrumb__last" color="inherit" href="/">
            Домашняя страница
          </Link>
          <Typography className="section__breadcrumb__current" color="text.primary">
            Статьи
          </Typography>
        </Breadcrumbs>
      </div>
      <div className="article__cards">
        {articles.map((article: IArticle) => {
            return (
              <div className="article__card card" style={{ backgroundImage: `url(${article.img})` }}onClick={() => handleItemClick(article.id)}>
                <div className="article__card__title h3">{article.title}</div>
              </div>
            );
        })}
      </div>
    </div>
  );
};

export default Articles;
