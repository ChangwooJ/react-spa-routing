import { NewsImageContainer } from './NewsImage.styles';

const NewsImage = ({ imageUrl }) => {
  return (
    <NewsImageContainer>
      <img src={imageUrl} width={200} height={150} alt="news" />
    </NewsImageContainer>
  );
};

export default NewsImage;
