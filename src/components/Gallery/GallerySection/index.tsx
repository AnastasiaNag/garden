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
    </div>
  );
};

export default GallerySection;
