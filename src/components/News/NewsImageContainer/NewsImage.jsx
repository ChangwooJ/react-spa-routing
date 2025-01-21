import { NewsImageContainer } from './NewsImage.styles';
import NewsImageSkeleton from './NewsImageSkeleton';

const NewsImage = ({ imageUrl }) => {
  return (
    <NewsImageContainer>
      {imageUrl ? (
        <img src={imageUrl} width={200} height={150} alt="news" />
      ) : (
        <NewsImageSkeleton>No Image</NewsImageSkeleton>
      )}
    </NewsImageContainer>
  );
};

export default NewsImage;
