import './GoodMax.scss'
import AddShoppingCartRoundedIcon from '@mui/icons-material/AddShoppingCartRounded';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface Props {
  good: any;
  isSwapped?: boolean;
}

const GoodMax = ({ good, isSwapped }: Props ) => {
  const [isAdded, setIsAdded] = useState(false);
    const navigate = useNavigate()
    
    const handleClick = (e: any) => {
        e.stopPropagation();
        setIsAdded(!isAdded);
      };
      const handleRedirect = (e: any) => {
        e.stopPropagation();
        navigate('/goods');
      };

  return (
    <div className="max-item__content card">
        <img style={isSwapped ? { order: 1 } : {}} className="max-item__img" src={good?.img} alt="" />
        <div className="max-item__description">
          <div className="max-item__title h4">{good?.title}</div>
          <div className="max-item__text h7">{good?.text}</div>
          <div className="max-item__price h4">{good?.price},-</div>
          <div className="max-item__btns">
          <button className="max-item__btn__buy btn h6" onClick={handleClick}> Купить  {isAdded ? <ShoppingCartRoundedIcon /> : <AddShoppingCartRoundedIcon />}</button>
          <button className="max-item__btn__all btn btn__all h6" onClick={handleRedirect}> Посмотреть все</button>
          </div>
        </div>
      </div>
  );
};

export default GoodMax;
