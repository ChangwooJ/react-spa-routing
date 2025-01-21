import NewsMain from './NewsMain';
import {
  LoadingMessage,
  ErrorMessage,
} from '../../components/News/NewsMessage/NewsMessage';
import NewsItems from '../../components/News/NewsItems/NewsItems';

export const News = Object.assign(NewsMain, {
  Loading: LoadingMessage,
  Error: ErrorMessage,
  Items: NewsItems,
});
