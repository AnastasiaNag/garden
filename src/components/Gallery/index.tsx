import { Card, CardActionArea } from '@mui/material';
import GalleryItem from './GallerySection/GalleryItem';
import './Gallery.scss';
import { AppDispatch, RootState } from '../../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { getGoods } from '../../redux/Good';
import { getWorks } from '../../redux/Work';
import { useEffect } from 'react';
import GallerySection from './GallerySection';
import { IGood } from '../../redux/Good/types';

const Gallery = () => {
    const { goods } = useSelector((state: RootState) => state.good);
    const { works } = useSelector((state: RootState) => state.work);
    useEffect(() => {
        getGood();
        getWork();
    }, []);
    const dispatch = useDispatch<AppDispatch>();
    
    const getGood = async () => {
        dispatch(getGoods());
    };
    const getWork = async () => {
        dispatch(getWorks());
    };
    const handleClick = (page: string) => {
        window.open(`/${page}`)
    }
    const handleItemClick = (id: string) => {
        window.open(`/works/${id}`);
    };
    return (
        <>
            <GallerySection type={'goods'} title={'товары'} items={goods} handleClick={() => handleClick('goods')}/>
            <GallerySection type={'works'} title={'услуги'} items={works} handleClick={() => handleClick('works')} handleItemClick={() => handleItemClick}/>
        </>
    );
};

export default Gallery;
