import './ItemList.scss';
import { Breadcrumbs, Typography, Link } from '@mui/material';
import ItemCard from '../ItemCard';
import { IWork } from '../../redux/Work/types';
import { IGood } from '../../redux/Good/types';

const ItemList = ({ text, items, handleItemClick}: any) => {
  return (
    <div className="item-list__section section">
      <div className="item-list__section__breadcrumb section__breadcrumb">
        <Breadcrumbs aria-label="breadcrumb" className="section__breadcrumb">
          <Link underline="hover" className="section__breadcrumb__last" color="inherit" href="/">
            Домашняя страница
          </Link>
          <Typography className="section__breadcrumb__current" color="text.primary">
            {text}
          </Typography>
        </Breadcrumbs>
      </div>
      <div className="item-list__section__title title h2"> {text}</div>
      <div className="item-list__section__cards">
        {items.map((item: IWork | IGood) => {
          return <ItemCard item={item} handleItemClick={handleItemClick} />;
        })}
      </div>
    </div>
  );
};

export default ItemList;
