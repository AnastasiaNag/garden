import { useEffect } from 'react';
import { Breadcrumbs, Typography, Link } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../../redux/store';
import { getWork } from '../../redux/Work';
import { useParams } from 'react-router-dom';
import Feedback from '../../components/Feedback'
import './WorkItem.scss';

const WorkItem = () => {
  const { work } = useSelector((state: RootState) => state.work);
  const { id } = useParams();
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getWork(id || null));
  }, []);
  return (
    <div>

<div className="work-item__section section">
      <div className="section__breadcrumb">
        <Breadcrumbs aria-label="breadcrumb" className="section__breadcrumb">
          <Link underline="hover" className="section__breadcrumb__last" color="inherit" href="/">
            Домашняя страница
          </Link>
          <Link underline="hover" className="section__breadcrumb__last" color="inherit" href="/works">
            Услуги
          </Link>
          <Typography className="section__breadcrumb__current" color="text.primary">
            {work?.title}
          </Typography>
        </Breadcrumbs>
      </div>
      <div className="work-item__content">
        <div className="work-item__title title h2">{work?.title}</div>
        <div className="work-item__text card">
          <img className="work-item__img" src={work?.img} alt="" />
          {work?.text}
          <Feedback />
          </div>
      </div>
    </div>
    </div>
  );
};

export default WorkItem;
