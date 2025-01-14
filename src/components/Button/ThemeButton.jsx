import { StyledButton } from './ThemeButton.styles';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';

const ThemeButton = () => {
  const isDarkMode = false;
  return (
    <StyledButton>
      {isDarkMode ? <LightModeOutlinedIcon /> : <DarkModeOutlinedIcon />}
    </StyledButton>
  );
};

export default ThemeButton;
