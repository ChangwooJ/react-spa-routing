import { News } from '../News/News';
import useGetNewsItems from '../../hooks/News/useGetNewsItems';
import NewsMain from '../News/NewsMain';

const Main = () => {
  const { error, loading, newsItems } = useGetNewsItems();

  return (
    <NewsMain newsItems={newsItems}>
      {loading && <News.Loading />}
      {error && <News.Error>{error.message}</News.Error>}
      {newsItems && newsItems.length !== 0 && (
        <News.Items NewsData={newsItems.articles} />
      )}
    </NewsMain>
  );
};

export default Main;
