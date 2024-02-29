import './GalleryItem.scss';
import Card from '@mui/material/Card';
import { CardActionArea, colors } from '@mui/material';
import { IGood } from '../../../../redux/Good/types';
import { Navigation, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { useRef } from 'react';
import { Swiper as SwiperCore } from 'swiper/types';
import { IWork } from '../../../../redux/Work/types';

const GalleryItem = ({ items, handleClick, handleItemClick }: any) => {
    const swiperRef = useRef<SwiperCore>();
    

    return (
        <>
            <button className='gallery__btn__prev gallery__btn' onClick={() => swiperRef.current?.slidePrev()}>Prev</button>
            <Swiper
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
                                <Card onClick={handleItemClick} className="gallery__carousel-item">
                                    <CardActionArea>
                                        <div className="item__title h4">{item.title}</div>
                                        <div className="item__text h6">{item.text}</div>
                                    </CardActionArea>
                                </Card>
                            </SwiperSlide>
                        );
                    } else if (index === 5) {
                        return (
                            <SwiperSlide onClick={handleClick}>
                                <Card className="gallery__carousel-item further">
                                    <CardActionArea>
                                        <div className="item__text">См. далее</div>
                                    </CardActionArea>
                                </Card>
                            </SwiperSlide>
                        );
                    } else if (index > 5) {
                        return;
                    }
                })}
            </Swiper>
            <button className='gallery__btn__next gallery__btn' onClick={() => swiperRef.current?.slideNext()}>Next</button>
        </>
    );
};

export default GalleryItem;
