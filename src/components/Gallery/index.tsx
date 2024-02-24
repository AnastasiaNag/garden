import './Gallery.scss';
import { goods } from './utils'

const Gallery = () => {
    return (<div className="gallery__section">
        {/* <div className="gallery__title h2">Товары</div>
        <div className="gallery__carousel">
            <div className="gallery__carousel-title">Наши товары</div>
            <div className="gallery__carousel-items">
                    
                    {goods.map((item, index) => {
                        if (index <= 4)
                return (<div className="gallery__carousel-item">
                        <div className="item__title">{item.title}</div>
                        <div className="item__text">{item.price}</div>
                </div>)
                 if (index >5){
                    return (<div className="gallery__carousel-further"> См.далее </div>)
                    }})
            </div>
        </div> */}
    </div>)
};

export default Gallery;
