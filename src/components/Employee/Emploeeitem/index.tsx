import { Link } from 'react-router-dom';

interface Props {
  url: string;
  imgUrl: string;
  text: string;
  name: string;
}
const Emploeeitem = ({ url, imgUrl, text, name }: Props) => {
  return (
    <Link to={url} className="employee__card_item">
      <div className="employee__card">
        <div className="employee__card_profile">
          <div className="employee__card_photo">
            <img src={imgUrl} alt="" />
          </div>
          <h3 className="employee__card_name">{name}</h3>
        </div>
        <div className="employee__card_content">
          <p>{text}</p>
        </div>
      </div>
    </Link>
  );
};

export default Emploeeitem;
