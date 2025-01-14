import NewsItems from '../../components/News/NewsItems/NewsItems';
import { MainLayout } from './Main.styles';
import useGetNewsItems from '../../hooks/News/useGetNewsItems';

const Main = () => {
  const { loading, newsItems, refetch } = useGetNewsItems();

  if (newsItems.length === 0) {
    return (
      <MainLayout>
        <h3>Loading News...</h3>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <NewsItems refetch={refetch} NewsData={newsItems.articles} />
    </MainLayout>
  );
};

export default Main;
