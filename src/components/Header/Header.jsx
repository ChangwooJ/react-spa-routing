import { Link } from 'react-router-dom';
import { HeaderContainer } from './Header.styles';
import ThemeButton from '../Button/ThemeButton';

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
  return (
    <HeaderContainer>
      {HEADER_ITEMS.map((item) => {
        return (
          <Link>
            <h3>{item}</h3>
          </Link>
        );
      })}
      <ThemeButton />
    </HeaderContainer>
  );
};

export default Header;
