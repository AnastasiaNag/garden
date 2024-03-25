import { Link } from 'react-router-dom';

interface Props {
  url: string;
  imgUrl: string;
  text: string;
}
const ArticleItem = ({ url, imgUrl, text }: Props) => {
  return (
    <Link to={url} className="article__card">
      <div className="article__card_img">
        <img src={imgUrl} alt="" />
      </div>
      <div className="article__text">{text}</div>
    </Link>
  );
};

export default ArticleItem;
