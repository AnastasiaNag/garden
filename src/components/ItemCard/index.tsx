import './ItemCard.scss';
import AddShoppingCartRoundedIcon from '@mui/icons-material/AddShoppingCartRounded';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import { useState } from 'react';
const ItemCard = ({ item, handleItemClick, isGood }: any) => {
  const [isAdded, setIsAdded] = useState(false);

  return (
    <div className="item__card card">
      <div className="item__card__content" onClick={() => handleItemClick(item.id)}>
        <img className="item__img" src={item.img} alt={item.title} />
        <div className="item__description">
          <div className="item__title h5 ">{item.title}</div>
        </div>
      </div>
        {isGood ? (
          <div className="item__price h7 " onClick={() => setIsAdded(true)}>
            <div>{item?.price}</div>
            {isAdded ? <ShoppingCartRoundedIcon /> : <AddShoppingCartRoundedIcon />}
          </div>
        ) : (
          ''
        )}
    </div>
  );
};

export default ItemCard;
