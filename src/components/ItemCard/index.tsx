import './ItemCard.scss';
const ItemCard = ({ item, handleItemClick }: any) => {
  return (
    <div onClick={() => handleItemClick(item.id)} className="item__card card">
      <img className="item__img" src={require('../../img/item.png')} alt={item.title} />
      <div className="item__description">
        <div className="item__title h5">{item.title}</div>
        <div className="item__text h6">{item.text}</div>
      </div>
    </div>
  );
};


export default ItemCard;
