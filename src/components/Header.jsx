import styled from "styled-components";
import { categoryList } from "../data/category.js";

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const TabContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const Tab = styled.button`
  background-color: ${({ active }) => (active ? '#007bff' : 'transparent')};
  color: ${({ active }) => (active ? '#fff' : 'inherit')};
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  border-radius: 20px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #007bff;
    color: #fff;
  }
`;

const DarkModeButton = styled.button`
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
`;

const Header = () => {

    return (
        <HeaderContainer>
            <Title>News</Title>
            <TabContainer>
                {categoryList.map((category) => (
                    <Tab key={category.id}>
                        {category.name}
                    </Tab>
                ))}
            </TabContainer>
            <DarkModeButton onClick={() => {}}>

            </DarkModeButton>
        </HeaderContainer>
    )
}

export default Header;