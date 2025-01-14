import { Link } from 'react-router-dom';
import { HeaderContainer } from './Header.styles';
import ThemeButton from '../Button/ThemeButton';
import useDarkmode from '../../hooks/useDarkmode';

const HEADER_ITEMS = [
  'business',
  'enterTainment',
  'general',
  'health',
  'science',
  'sports',
  'technology',
];

const Header = () => {
  const { theme } = useDarkmode();

  return (
    <HeaderContainer theme={theme}>
      {HEADER_ITEMS.map((item) => {
        return (
          <Link to={`/${item}`} key={item}>
            <h3 key={item}>{item.charAt(0).toUpperCase() + item.slice(1)}</h3>
          </Link>
        );
      })}
      <ThemeButton />
    </HeaderContainer>
  );
};

export default Header;
