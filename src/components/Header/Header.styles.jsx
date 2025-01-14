import styled from 'styled-components';

export const HeaderContainer = styled.header`
  width: 100%;
  height: 6.25rem;
  padding: 3rem;
  align-items: center;
  display: flex;
  justify-content: space-between;

  a {
    &:hover {
      color: ${({ theme }) => theme.primary};
      border-bottom: 0.2rem solid ${({ theme }) => theme.primary};
    }
  }
`;
