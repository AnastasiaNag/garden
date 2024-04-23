import {Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Swiper from 'swiper';
import './GalleryEmployee.scss';
import { IEmployee } from '../../../redux/Employees/types';
const GalleryEmploee = ({ items }: any) => {
  const swiper = new Swiper('.swiperem', {
  slidesPerView: 3,
  spaceBetween: 40,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
    slidesPerGroupSkip: 3,
    modules: [Pagination],
  });

  return (
    <div className="swiperem swiper" style={{backgroundColor: '#1B2316' }}>
      <div className="swiper-wrapper swiperem-wrapper">
        {items.map((item: IEmployee, index: number) => {
          if (index <= items.length - 1) {
            return (
              <div key={index} className="swiper-slide employee__slide "  data-swiper-autoplay="2000">
                <div className="employee__img"><img className="employee__img" src={item?.img} alt="" /></div>
                <div className="employee__description">
                <div className="employee__title h6">{item?.title}</div>
                <div className="employee__text h7">{item?.text}</div>
                </div>
              </div>
            );
          }
          return null;
        })}
      </div>
      <div className="swiper-pagination">g</div>
    </div>
  );
};

export default GalleryEmploee;
