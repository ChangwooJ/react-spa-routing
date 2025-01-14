import NewsHeader from '../NewsHeader/NewsHeader';
import NewsImage from '../NewsImageContainer/NewsImage';
import { NewsCardContainer } from './NewsCard.styles';

const NewsCard = ({ news }) => {
  return (
    <NewsCardContainer>
      <NewsImage imageUrl={news.urlToImage} />
      <NewsHeader newsContent={news} />
    </NewsCardContainer>
  );
};

export default NewsCard;
