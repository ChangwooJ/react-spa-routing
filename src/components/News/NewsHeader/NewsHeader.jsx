import { Link } from 'react-router-dom';
import { NewsHeaderContainer } from './NewsHeader.styles';

const NewsHeader = ({ newsContent }) => {
  return (
    <NewsHeaderContainer>
      <Link to={newsContent.url}>
        <h3>{newsContent.title}</h3>
      </Link>
      <p>{newsContent.description}</p>
      <p>{newsContent.author}</p>
    </NewsHeaderContainer>
  );
};

export default NewsHeader;
