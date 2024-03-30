// import './GalleryItem.scss';
import { Navigation, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Swiper from 'swiper';
import Emploeeitem from '..';
type IEmploee = {
  url: string,
  imgUrl: string,
  text: string,
  id: string,
  name: string,
};
const SliderEmploee = ({ items }: any) => {
  const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 3,
    spaceBetween: 50,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    modules: [Navigation, A11y],
  });

  return (
    <>
      <div className="swiper" style={{ padding: '0 40px', backgroundColor: '#1B2316' }}>
        <div className="swiper-wrapper">
          {items.map((item: IEmploee, index: number) => {
            if (index <= items.length - 1) {
              return (
                <div className="swiper-slide">
                  <Emploeeitem url={item.url} imgUrl={item.imgUrl} text={item.text} name={item.name} />
                </div>
              );
            }
            return null;
          })}
        </div>
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </div>
    </>
  );
};

export default SliderEmploee;
