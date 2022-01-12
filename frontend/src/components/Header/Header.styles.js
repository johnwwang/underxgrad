import styled from 'styled-components';

export const Wrapper = styled.div`
  background: bisque;
  padding: 0 20px;
  border-bottom: 3px dotted black;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: var(--maxWidth);
  padding: 15px 0;
  margin: 0 auto;
`;

export const SquareLogoImg = styled.img`
  width: 200px;

  @media screen and (max-width: 500px) {
    width: 150px;
  }
`;

export const Title = styled.h3`
  color: dimgray;
  font-size: 30px;
`

export const LightbulbLogoImg = styled.img`
  width: 200px;

  @media screen and (max-width: 500px) {
    width: 120px;
  }
`;
