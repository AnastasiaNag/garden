import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ItemList from '../../components/ItemList';
import { getWorks } from '../../redux/Work';
import { RootState, AppDispatch } from '../../redux/store';

const Works = () => {
  const { works } = useSelector((state: RootState) => state.work);
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    const getWork = async () => {
      dispatch(getWorks());
    };
    getWork();
  }, [dispatch]);

  const handleItemClick = (id: string) => {
    console.log(id);
    navigate(id);
  };
  return (
    <div>
      <div>
        <ItemList text={'Услуги'} items={works} handleItemClick={handleItemClick} isGood={false} />
      </div>
    </div>
  );
};

export default Works;
