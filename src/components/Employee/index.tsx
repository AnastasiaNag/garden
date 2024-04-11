import SliderEmploee from './Emploeeitem/SliderEmploee';
import './Employee.scss';

const Employee = () => {
  const data = [
    {
      id: '329735982723759',

      url: 'https://www.google.ru/',
      imgUrl: 'https://naturavit.ru/image/cache/catalog/images/romaska1-800x600.jpg',
      text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus, ab!',
      name: 'Bum Bum',
    },
    {
      id: '329735982723759',

      url: 'https://www.google.ru/',
      imgUrl: 'https://naturavit.ru/image/cache/catalog/images/romaska1-800x600.jpg',
      text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus, ab!',
      name: 'Bum Bum',
    },
    {
      id: '329735982723759',

      url: 'https://www.google.ru/',
      imgUrl: 'https://naturavit.ru/image/cache/catalog/images/romaska1-800x600.jpg',
      text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus, ab!',
      name: 'Bum Bum',
    },
    {
      id: '329735982723759',

      url: 'https://www.google.ru/',
      imgUrl: 'https://naturavit.ru/image/cache/catalog/images/romaska1-800x600.jpg',
      text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus, ab!',
      name: 'Bum Bum',
    },
    {
      id: '329735982723759',

      url: 'https://www.google.ru/',
      imgUrl: 'https://naturavit.ru/image/cache/catalog/images/romaska1-800x600.jpg',
      text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus, ab!',
      name: 'Bum Bum',
    },
  ];
  return (
    <section className="employee__section section">
      <h2 className="employee__title title h2">Наши сотрудники</h2>
      <div className="employee__cards">
               <SliderEmploee items={data} />
      </div>
    </section>
  );
};

export default Employee;
