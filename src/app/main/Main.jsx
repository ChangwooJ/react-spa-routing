import NewsItems from '../../components/News/NewsItems/NewsItems';
import { MainLayout } from './Main.styles';
import useGetNewsItems from '../../hooks/News/useGetNewsItems';
import useGetAllArticles from '../../hooks/News/useGetAllArticles';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

const Main = () => {
  const { category } = useParams();

  const {
    newsItems,
    loading: newsLoading,
    error: newsError,
    refetch: newsRefetch,
  } = useGetNewsItems();

  const {
    allArticles,
    loading: allLoading,
    error: allError,
    refetch: allRefetch,
  } = useGetAllArticles();

  useEffect(() => {
    if (category === 'all') {
      allRefetch();
    } else {
      newsRefetch();
    }
  }, []);

  if (newsLoading || allLoading) {
    return (
      <MainLayout>
        <h3>Loading News...</h3>
      </MainLayout>
    );
  }

  if (newsError || allError) {
    return (
      <MainLayout>
        <h3>Error</h3>
      </MainLayout>
    );
  }

  const displayedArticles =
    category === 'all' ? allArticles.articles : newsItems.articles;

  if (!displayedArticles || displayedArticles.length === 0) {
    return (
      <MainLayout>
        <h3>No articles available.</h3>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <NewsItems NewsData={displayedArticles} />
    </MainLayout>
  );
};

export default Main;
