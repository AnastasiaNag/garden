import Gallery from '../../components/Gallery';
import Employee from '../../components/Employee';
import Main from '../../components/Main';
import './Home.scss';
import Article from '../../components/Article';
import { useRef } from 'react';

const Home = () => {
  const galleryRef = useRef<HTMLDivElement | null>(null);
  return (
    <div className="main">
      <Main anchor={galleryRef} />

      <Gallery ref={galleryRef} />

      <Employee />

      <Article />
    </div>
  );
};

export default Home;
