import './Gallery.scss';
import { AppDispatch, RootState } from '../../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { getGoods } from '../../redux/Good';
import { getWorks } from '../../redux/Work';
import { getWork } from '../../redux/Work';
import { useEffect } from 'react';
import GallerySection from './GallerySection';

const Gallery = () => {
    const { goods } = useSelector((state: RootState) => state.good);
    const { works } = useSelector((state: RootState) => state.work);
    const { work } = useSelector((state: RootState) => state.work);
    useEffect(() => {
        getGood();
        getMultWork();
        getOneWork();
    }, []);
    const dispatch = useDispatch<AppDispatch>();

    const getGood = async () => {
        dispatch(getGoods());
    };
    const getMultWork = async () => {
        dispatch(getWorks());
    };
    const getOneWork = async () => {
        dispatch(getWork());
    };
    const handleClick = (page: string) => {
        window.open(page, '_self');
    };
    const handleItemClick = (id: string) => {
        console.log(id);
        window.open('works/' + id);
    };
    return (
        <>
            <GallerySection type={'works'} title={'услуги'} items={works} handleClick={() => handleClick('works')} handleItemClick={handleItemClick} />
            <GallerySection type={'goods'} title={'товары'} items={goods} handleClick={() => handleClick('goods')} />
        </>
    );
};

export default Gallery;
