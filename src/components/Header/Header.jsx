import { Link } from 'react-router-dom';
import { HeaderContainer } from './Header.styles';
import ThemeButton from '../Button/ThemeButton';
import useDarkmode from '../../hooks/useDarkmode';

const HEADER_ITEMS = [
  'All',
  'Business',
  'EnterTainment',
  'General',
  'Health',
  'Science',
  'Sports',
  'Technology',
];

const Header = () => {
  const { theme } = useDarkmode();

  return (
    <HeaderContainer theme={theme}>
      {HEADER_ITEMS.map((item) => {
        return (
          <Link key={item}>
            <h3>{item}</h3>
          </Link>
        );
      })}
      <ThemeButton />
    </HeaderContainer>
  );
};

export default Header;
