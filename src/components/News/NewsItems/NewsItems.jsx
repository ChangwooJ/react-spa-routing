import NewsCard from '../NewsCard/NewsCard';
import { NewsItemsContainer } from './NewsItmes.styled';

const NewsItems = ({ NewsData }) => {
  return (
    <NewsItemsContainer>
      <h3>Business</h3>
      {NewsData.map((news) => {
        return <NewsCard key={news.source.name} news={news} />;
      })}
    </NewsItemsContainer>
  );
};

export default NewsItems;
