import './GalleryItem.scss';
import { posts } from './utils';
import Card from '@mui/material/Card';
import { CardActionArea } from '@mui/material';

const GalleryItem = () => {
    return (
        <>
            {posts.map((item, index) => {
                if (index <= 4) {
                    return (
                        <>
                            <Card className="gallery__carousel-item">
                                <CardActionArea>
                                    <div className="item__title h4">{item.title}</div>
                                    <div className="item__text h6">{item.text}</div>
                                </CardActionArea>
                            </Card>
                        </>
                    );
                } else if (index === 5) {
                    return (
                        <>
                            <Card className="gallery__carousel-item further" >
                                <CardActionArea>
                                    <div className="item__text">См. далее</div>
                                </CardActionArea>
                            </Card>
                        </>
                    );
                } else if (index > 5) {
                    return;
                }
            })}
        </>
    );
};

export default GalleryItem;
