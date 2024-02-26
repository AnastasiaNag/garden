import './GalleryItem.scss';
import { posts } from './utils';
import Card from '@mui/material/Card';
import { CardActionArea, colors } from '@mui/material';

import { Navigation, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { useRef } from 'react';
import { Swiper as SwiperCore } from 'swiper/types';

const GalleryItem = () => {
    const swiperRef = useRef<SwiperCore>();
    return (
        <>
        <button onClick={() => swiperRef.current?.slidePrev()}>Prev</button>
            <Swiper
                modules={[Navigation, A11y]}
                spaceBetween={50}
                slidesPerView={3}
                onBeforeInit={(swiper: any) => {
                    swiperRef.current = swiper;
                }}
            >
                {posts.map((item, index) => {
                    if (index <= 4) {
                        return (
                            <SwiperSlide>
                                <Card className="gallery__carousel-item">
                                    <CardActionArea>
                                        <div className="item__title h4">{item.title}</div>
                                        <div className="item__text h6">{item.text}</div>
                                    </CardActionArea>
                                </Card>
                            </SwiperSlide>
                        );
                    } else if (index === 5) {
                        return (
                            <SwiperSlide>
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
            <button onClick={() => swiperRef.current?.slideNext()}>Next</button>
        </>
    );
};

export default GalleryItem;
