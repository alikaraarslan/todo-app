import styled from 'styled-components';

const HeaderWrapper = styled.div`
  color: #035687;
  font-weight: 600;
  font-size: 20px;
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <span>Today Tasks</span>
    </HeaderWrapper>
  );
};

export default Header;
