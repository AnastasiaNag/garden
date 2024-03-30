import { useEffect } from 'react';
import { Breadcrumbs, Typography, Link } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../../redux/store';
import { useParams } from 'react-router-dom';
import { getGood } from '../../redux/Good';
const GoodItem = () => {
    const { good } = useSelector((state: RootState) => state.good);
    const { id } = useParams();
    const dispatch = useDispatch<AppDispatch>();
  
    useEffect(() => {
      dispatch(getGood(id || null));
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
            Товары
          </Link>
          <Typography className="section__breadcrumb__current" color="text.primary">
            {good?.title}
          </Typography>
        </Breadcrumbs>
      </div>
      <div className="work-item__content">
        <div className="work-item__title title h2">{good?.title}</div>
        <div className="work-item__text card">
          <img className="work-item__img" src={good?.img} alt="" />
          {good?.text}
          </div>
      </div>
    </div>
    </div>
     );
}
 
export default GoodItem;