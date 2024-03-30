import './ItemList.scss';
import { Breadcrumbs, Typography, Link } from '@mui/material';
import ItemCard from '../ItemCard';
import { IWork } from '../../redux/Work/types';
import { IGood } from '../../redux/Good/types';
import { useState } from 'react';

const ItemList = ({ text, items, handleItemClick, isGood }: any) => {
  const [value, setValue] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const filteredItems = value ? items.filter((item: IWork | IGood) =>
      item.title.toLowerCase().includes(value.toLowerCase())
    )
  : items;
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setSearchValue(value);
    }
  };

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
      {isGood ? (
        <input className="item-list__search" autoFocus placeholder="Поиск" value={value} onChange={handleInputChange} onKeyDown={handleKeyDown} />
        
      ) : null}
      <div className="item-list__section__cards">
        {filteredItems.length > 0 ? (
          filteredItems.map((item: IWork | IGood) => {
            return <ItemCard item={item} handleItemClick={handleItemClick} isGood={isGood} />;
          })
        ) : (
          <div className='h5'>Ничего не найдено</div>
        )}
      </div>
    </div>
  );
};

export default ItemList;
