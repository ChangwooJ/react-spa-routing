import NewsItems from '../../components/News/NewsItems/NewsItems';
import { MainLayout } from './Main.styles';
import { NewsData } from '../../mockData';

const Main = () => {
  return (
    <MainLayout>
      <NewsItems NewsData={NewsData.articles} />
    </MainLayout>
  );
};

export default Main;
