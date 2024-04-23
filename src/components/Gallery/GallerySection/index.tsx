import { IGood } from '../../../redux/Good/types';
import { IWork } from '../../../redux/Work/types';
import ItemCard from '../../ItemCard';
import GalleryItem from './GalleryItem';
import './GallerySection.scss';

const GallerySection = ({ title, items, type, handleClick, handleItemClick, isGood }: any) => {
  return (
    <div className={`gallery__section__${type}`}>
      <div className="gallery__carousel">
        <div onClick={handleClick} className="gallery__carousel__title start">
          <div className="gallery__carousel__title__text h3">Наши {title}</div>
        </div>
        <div className="gallery__carousel-items">
          <GalleryItem items={items} handleClick={handleClick} handleItemClick={handleItemClick} isGood={isGood} />
        </div>
      </div>
      <div className="gallery__media">
        <div onClick={handleClick} className="gallery__media__title">
          <div className="gallery__media__title__text h3">Наши {title}</div>
        </div>
        <div className="gallery__media__items">
          {items.map((item: IGood | IWork, index: number) =>{
            if (index <= 3) {
            return (
              <ItemCard item={item} handleItemClick={handleItemClick} isGood={isGood}/>
            )}
          })}
        </div>
        <button className="btn btn__all h6" onClick={handleClick}> Посмотреть все</button>
      </div>
    </div>
  );
};

export default GallerySection;
