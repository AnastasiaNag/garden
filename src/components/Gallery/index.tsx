import { Card, CardActionArea } from '@mui/material';
import GalleryItem from './GalleryItem';
import './Gallery.scss';
import { AppDispatch, RootState } from '../../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { getGoods } from '../../redux/Good';
import { getWorks } from '../../redux/Work';
import { useEffect } from 'react';



const Gallery = () => {
    const { goods } = useSelector((state: RootState) => state.good);
    const { works } = useSelector((state: RootState) => state.work);
    useEffect(() => {
        getGood();
        getWork()
    }, []);
    const dispatch = useDispatch<AppDispatch>();
    const getGood = async () => {
        dispatch(getGoods());
    };
    const getWork = async () => {
        dispatch(getWorks());
    };
    return (
        <>
        <div className="gallery__section">
            <div className="gallery__title h2">Товары</div>
            <div className="gallery__carousel">
                <Card className="gallery__carousel__title start">
                    <CardActionArea>
                        <div className="item__text">Наши товары</div>
                    </CardActionArea>
                </Card>
                <div className="gallery__carousel-items">
                    <GalleryItem items={goods}/>
                </div>
            </div>
        </div>
        <div className="gallery__section">
            <div className="gallery__title h2">Цслуги</div>
            <div className="gallery__carousel">
                <Card className="gallery__carousel__title start">
                    <CardActionArea>
                        <div className="item__text">Наши услуги</div>
                    </CardActionArea>
                </Card>
                <div className="gallery__carousel-items">
                    <GalleryItem items={works}/>
                </div>
            </div>
        </div>
        </>
    );
};

export default Gallery;
