import styled from 'styled-components';

export const Wrapper = styled.div`
	background: linear-gradient(
      to bottom, rgba(0,0,0,0)
      39%,rgba(0,0,0,0)
      41%,rgba(237, 222, 196)
      100%
    );
  padding: 0 20px;
	height: 100vh;
`;

export const Content = styled.div`
  padding: 20px;
  max-width: var(--maxWidth);
  margin: 0 auto;
`;

export const Text = styled.h1`
  z-index: 100;
  position: relative;
  top: 140px;
  /* width: 100%; */
  text-align: center;

  min-height: 100px;
  color: var(--black);

  h1 {
    font-size: var(--fontSuperBig);

    @media screen and (max-width: 720px) {
      font-size: var(--fontBig);
    }
  }
`;

