import { Card, CardActionArea } from '@mui/material';
import GalleryItem from './GalleryItem';
import './GallerySection.scss'

const GallerySection = ({title, items, type, handleClick, handleItemClick}: any) => {
    return (
        <div className={`gallery__section__${type} gallery__section`}>
            <div className="gallery__title h2">{title}</div>
            <div className="gallery__carousel">
                <Card onClick={handleClick} className="gallery__carousel__title start">
                    <CardActionArea>
                        <div className="item__text">Наши {title}</div>
                    </CardActionArea>
                </Card>
                <div className="gallery__carousel-items">
                    <GalleryItem items={items} handleClick={handleClick} handleItemClick={handleItemClick}/>
                </div>
            </div>
        </div>
    );
};

export default GallerySection;
