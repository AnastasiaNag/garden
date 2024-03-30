import './GalleryItem.scss';
import { IGood } from '../../../../redux/Good/types';
import { Navigation, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Swiper from 'swiper';
import { IWork } from '../../../../redux/Work/types';
import ItemCard from '../../../ItemCard';
const GalleryItem = ({ items, handleClick, handleItemClick, isGood }: any) => {
  const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: false,
    slidesPerView: 3,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    modules: [Navigation, A11y],
  });

  return (
    <>
      <div className="swiper" style={{ padding: '0 15px', backgroundColor: '#1B2316' }}>
        <div className="swiper-wrapper">
          {items.map((item: IGood | IWork, index: number) => {
            if (index <= 4) {
              return (
                <div className="swiper-slide">
                  <ItemCard item={item} handleItemClick={handleItemClick} isGood={isGood}/>
                </div>
              );
            } else if (index === 5) {
              return (
                <div className="swiper-slide swiper-slide__further" style={{width: '150px', justifyContent:'flex-start'}} onClick={handleClick}>
                  <div className="gallery__further__text">См. далее</div>
                </div>
              );
            }
            return null;
          })}
        </div>
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </div>
    </>
  );
};

export default GalleryItem;
