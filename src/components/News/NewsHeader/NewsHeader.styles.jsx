import styled from 'styled-components';

export const NewsHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h3 {
    text-decoration: none;
    color: black;
    display: inline-block;

    &:hover {
      color: #0284c7;
    }
  }

  p {
    color: #4b5563;
  }
`;
