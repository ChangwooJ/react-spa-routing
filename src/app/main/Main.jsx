import { useContext } from 'react';
import { ThemeContext } from '../../providers/ThemeContext';
import NewsItems from '../../components/News/NewsItems/NewsItems';
import { MainLayout } from './Main.styles';
import { NewsData } from '../../mockData';

const Main = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <MainLayout theme={theme}>
      <NewsItems NewsData={NewsData.articles} />
    </MainLayout>
  );
};

export default Main;
