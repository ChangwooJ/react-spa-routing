const NewsMessage = ({ children }) => {
  return <h3>{children}</h3>;
};

const LoadingMessage = () => <NewsMessage>Loading...</NewsMessage>;
const ErrorMessage = ({ children }) => <NewsMessage>{children}</NewsMessage>;
const NoArticlesMessage = () => <NewsMessage>No articles found...</NewsMessage>;

export { LoadingMessage, ErrorMessage, NoArticlesMessage };
