import { useEffect } from 'react';
import { Breadcrumbs, Typography, Link } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../../redux/store';
import { useParams } from 'react-router-dom';
import './ArticleItem.scss';
import { getArticle } from '../../redux/Article';

const ArticleItem = () => {
  const { article } = useSelector((state: RootState) => state.article);
  const { id } = useParams();
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getArticle(id || null));
  }, []);
  return (
    <div>
      <div className="work-item__section section">
        <div className="section__breadcrumb">
          <Breadcrumbs aria-label="breadcrumb" className="section__breadcrumb">
            <Link underline="hover" className="section__breadcrumb__last" color="inherit" href="/">
              Домашняя страница
            </Link>
            <Link underline="hover" className="section__breadcrumb__last" color="inherit" href="/articles">
              Статьи
            </Link>
            <Typography className="section__breadcrumb__current" color="text.primary">
              {article?.title}
            </Typography>
          </Breadcrumbs>
        </div>
        <div className="article-item__content">
          <div className="article-item__title title h2">{article?.title}</div>
          <div className="article-item__description card">
              <img className="article-item__img" src={article?.img} alt="" />
            <div className="article-item__text">
              {article?.text}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleItem;
