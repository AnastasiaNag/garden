import { AppDispatch, RootState } from '../../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { getGoods } from '../../redux/Good';
import { getWorks } from '../../redux/Work';
import { useEffect } from 'react';
import GallerySection from './GallerySection';
import { useNavigate } from 'react-router-dom';
import './Gallery.scss'

const Gallery = () => {
  const { goods } = useSelector((state: RootState) => state.good);
  const { works } = useSelector((state: RootState) => state.work);
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    const getGood = async () => {
      dispatch(getGoods());
    };
    const getMultWork = async () => {
      dispatch(getWorks());
    };
    getGood();
    getMultWork();
  }, [dispatch]);

  const handleClick = (page: string) => {
    window.open(page, '_self');
  };
  const handleWorksClick = (id: string) => {
    navigate('works/' + id);
  };
  const handleGoodsClick = (id: string) => {
    navigate('goods/' + id);
  };
  return (
    <>
      <div className="gallery__section section">
        <div className="gallery__section__title title h2">Мы предлагаем</div>
      <GallerySection type={'works'} title={'услуги'} items={works} handleClick={() => handleClick('works')} handleItemClick={handleWorksClick} />
      <GallerySection type={'goods'} title={'товары'} items={goods} handleClick={() => handleClick('goods')} handleItemClick={handleGoodsClick} />
      </div>
    </>
  );
};

export default Gallery;
