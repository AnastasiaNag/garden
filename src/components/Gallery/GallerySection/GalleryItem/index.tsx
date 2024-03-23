import './GalleryItem.scss';
import { IGood } from '../../../../redux/Good/types';
import { Navigation, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { useRef } from 'react';
import { Swiper as SwiperCore } from 'swiper/types';
import { IWork } from '../../../../redux/Work/types';
import ItemCard from '../../../ItemCard';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const GalleryItem = ({ items, handleClick, handleItemClick }: any) => {
  const swiperRef = useRef<SwiperCore>();

  return (
    <>
      <button className="gallery__btn__prev gallery__btn" onClick={() => swiperRef.current?.slidePrev()}>
        <ArrowBackIosNewIcon />
      </button>
      <Swiper style={{ padding: "20px" }}
        modules={[Navigation, A11y]}
        spaceBetween={25}
        slidesPerView={3}
        onBeforeInit={(swiper: any) => {
          swiperRef.current = swiper;
        }}
      >
        {items.map((item: IGood | IWork, index: number) => {
          if (index <= 4) {
            return (
              <SwiperSlide>
                <ItemCard item ={item} handleItemClick={handleItemClick}/>
              </SwiperSlide>
            );
          } else if (index === 5) {
            return (
              <SwiperSlide onClick={handleClick}>
                    <div className="item__text">См. далее</div>
              </SwiperSlide>
            );
          }
          return null;
        })}
      </Swiper>
      <button className="gallery__btn__next gallery__btn" onClick={() => swiperRef.current?.slideNext()}>
        <ArrowForwardIosIcon />
      </button>
    </>
  );
};

export default GalleryItem;
