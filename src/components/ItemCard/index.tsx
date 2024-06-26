import './ItemCard.scss';
import AddShoppingCartRoundedIcon from '@mui/icons-material/AddShoppingCartRounded';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import { useState } from 'react';
import axios from 'axios';



const ItemCard = ({ item, handleItemClick, isGood }: any) => {
  const [isAdded, setIsAdded] = useState(false);

  const handleClick = (e: any) => {
    e.stopPropagation();
    setIsAdded(!isAdded);
    

    const newItem = {
      id: item.id,
      category: item.category,
      title: item.title,
      text: item.text,
      img: item.img,
      price: item.price,
    };
    axios.post('http://localhost:3001/cartitems', newItem);
  };

  return (
    <div className="item__card card">
      <div className="item__card__content" onClick={() => handleItemClick(item.id)}>
        <img className="item__img" src={item.img} alt={item.title} />
        <div className="item__description">
          <div className={`item__title ${isGood ? 'h6' : 'h5'}`}>{item.title}</div>
          {isGood ? (
            <div className="item__price h7 " onClick={handleClick}>
              <div className="item__price__text">{item?.price}</div>
              {isAdded ? <ShoppingCartRoundedIcon /> : <AddShoppingCartRoundedIcon />}
            </div>
          ) : (
            ''
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
