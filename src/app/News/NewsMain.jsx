import NewsItems from '../../components/News/NewsItems/NewsItems';
import { MainLayout } from '../main/Main.styles';

const getNewsItems = ({ newsItems }) => {
  if (newsItems && newsItems.length !== 0) {
    return <NewsItems NewsData={newsItems.articles} />;
  }
};

const NewsMain = ({ children, newsItems }) => {
  return (
    <MainLayout>
      {children}
      {getNewsItems({ newsItems })}
    </MainLayout>
  );
};

export default NewsMain;
