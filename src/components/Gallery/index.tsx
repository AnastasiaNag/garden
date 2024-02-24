import { Card, CardActionArea } from '@mui/material';
import './Gallery.scss';
import GalleryItem from './GalleryItem';

const Gallery = () => {
    return (
        <div className="gallery__section">
            <div className="gallery__title h2">Товары</div>
            <div className="gallery__carousel">
                <Card className="gallery__carousel__title start">
                    <CardActionArea>
                        <div className="item__text">Наши услуги</div>
                    </CardActionArea>
                </Card>
                <div className="gallery__carousel-items">
                    <GalleryItem />
                </div>
            </div>
        </div>
    );
};

export default Gallery;
