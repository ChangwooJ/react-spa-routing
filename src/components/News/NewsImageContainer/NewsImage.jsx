import { NewsImageContainer, NewsImageSkeleton } from './NewsImage.styles';

const NewsImage = ({ imageUrl }) => {
  return (
    <NewsImageContainer>
      {imageUrl ? (
        <img src={imageUrl} width={200} height={150} alt="news" />
      ) : (
        <NewsImageSkeleton />
      )}
    </NewsImageContainer>
  );
};

export default NewsImage;
