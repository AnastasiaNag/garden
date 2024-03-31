import axios from 'axios';
import GoodMax from '../GoodMax';
import './Main.scss';
import { useState, useEffect } from 'react';
const Main = ({ancor}: any) => {
    const [good1, setGood1] = useState<any>(null);
    const [good2, setGood2] = useState<any>(null);

    useEffect(() => {
      const fetchGood = async () => {
        const response1 = await axios.get(`http://localhost:3001/goods/c2320d`);
        const response2 = await axios.get(`http://localhost:3001/goods/bcarg5b`);
          setGood1(response1.data);
          setGood2(response2.data);
        }   
      fetchGood();
    }, []);

  const handleScroll = () => {
    if (ancor.current) {
      ancor.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="main section">
      <div className="main__content">
        <div className="main__content__description">
          <div className="main__content__title h1">Lorem Lorem</div>
          <div className="main__content__text h5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum nam nostrum id,</div>
          <button onClick={handleScroll} className="btn__all btn h5 "> Смотреть</button>
        </div>
      </div>
      <div className="main__items">
        <GoodMax good={good1}/>
        <GoodMax good={good2} isSwapped={true}/>
      </div>
    </div>
  );
};

export default Main;
