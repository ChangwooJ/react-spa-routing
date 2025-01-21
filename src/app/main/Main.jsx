import NewsItems from '../../components/News/NewsItems/NewsItems';
import { MainLayout } from './Main.styles';
import useGetNewsItems from '../../hooks/News/useGetNewsItems';
import { useParams } from 'react-router-dom';

const Main = () => {
  const {
    newsItems,
    loading: newsLoading,
    error: newsError,
  } = useGetNewsItems();

  if (newsLoading) {
    return (
      <MainLayout>
        <h3>Loading News...</h3>
      </MainLayout>
    );
  }

  if (newsError) {
    return (
      <MainLayout>
        <h3>Error</h3>
      </MainLayout>
    );
  }

  if (!newsItems || newsItems.length === 0) {
    return (
      <MainLayout>
        <h3>No articles available.</h3>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <NewsItems NewsData={newsItems.articles} />
    </MainLayout>
  );
};

export default Main;
