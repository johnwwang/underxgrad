import styled from 'styled-components';

export const Wrapper = styled.div`
  background: ${(props) =>
    `linear-gradient(
      to top, rgba(0,0,0,0)
      39%,rgba(0,0,0,0)
      41%,rgba(255, 228, 196)
      100%
    ),
    url('${props.image}'), var(--darkGrey)`};
  background-size: 100%, cover;
  background-position: center;
  height: 100vh;
  position: relative;
  animation: animateHeroimage 1s;

  @keyframes animateHeroimage {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
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
  color: dimgray;

`;

export const PersonTypeButton = styled.button`
  position: relative;
  left: ${props => (props.position === 'left' ? '32%' : '39%')};
  top: 130px;
  bottom: 20px;	
  /* display: flex;
  justify-content: center; */
  background: ${props => (props.position === 'left' ? '#0092D1' : '#6D9A08')};;
  color: black;
  border: 1px solid black;
  border-radius: 10px;
  @media (min-width: 768px) {
        width: 180px;
      }
  width: 140px;
  height: 50px;
  cursor: pointer;
`;
