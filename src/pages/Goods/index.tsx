import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ItemList from '../../components/ItemList';
import { RootState, AppDispatch } from '../../redux/store';
import './Goods.scss';
import { getGoods } from '../../redux/Good';

const Goods = () => {
    const { goods } = useSelector((state: RootState) => state.good);
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();
    useEffect(() => {
      const getGood = async () => {
        dispatch(getGoods());
      };
      getGood();
    }, [dispatch]);
  
    const handleItemClick = (id: string) => {
      console.log(id);
      navigate(id);
    };
    return (
        <div>

            <div>
            <ItemList text={'Товары'} items={goods} handleItemClick={handleItemClick} isGood={true} />
            </div>
        </div>
    );
};

export default Goods;