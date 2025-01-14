import { Link } from 'react-router-dom';
import { NewsHeaderContainer } from './NewsHeader.styles';
import useDarkmode from '../../../hooks/useDarkmode';

const NewsHeader = ({ newsContent }) => {
  const { theme } = useDarkmode();

  return (
    <NewsHeaderContainer theme={theme}>
      <Link to={newsContent.url}>
        <h3>{newsContent.title}</h3>
      </Link>
      <p>{newsContent.description}</p>
      <span>{newsContent.author}</span>
    </NewsHeaderContainer>
  );
};

export default NewsHeader;
