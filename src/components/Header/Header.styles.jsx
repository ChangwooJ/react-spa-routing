import styled from 'styled-components';

export const HeaderContainer = styled.header`
  width: 100%;
  height: 6.25rem;
  padding: 3rem;
  align-items: center;
  display: flex;
  justify-content: space-between;

  a {
    text-decoration: none;
    color: inherit;
    display: inline-block;

    &:hover {
      color: #0284c7;
      border-bottom: 0.2rem solid #0284c7;
    }
  }
`;
