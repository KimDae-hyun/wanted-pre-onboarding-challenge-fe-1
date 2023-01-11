import styled from 'styled-components';

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
`;

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-block: auto;
  padding: 2rem;
  position: absolute;
  top: 6rem;
  .error {
    color: #f00001;
    margin: 0.5rem;
    font-size: 0.8rem;
  }
`;

export const Title = styled.div`
  color: #5acf28;
  letter-spacing: 0.1rem;
  font-size: 2rem;
  font-weight: 900;
  margin: 1rem;
`;

export const Guide = styled.div`
  color: #5acf28;
  letter-spacing: 0.1rem;
  font-size: 0.8rem;
  font-weight: 400;
  margin-top: 0.5rem;
`;

export const Buttons = styled.div<{ active?: boolean }>`
  button {
    cursor: ${(props) => (props.active ? 'pointer' : 'defaut')};
    border-radius: 0.3rem;
    border: white;
    background: ${(props) => (props.active ? '#5acf28' : '#C3FCAB')};
    width: 320px;
    height: 48px;
    color: white;
    font-size: 1rem;
    font-weight: 400;
    text-align: center;
  }
  margin: 1.5rem 0rem;
`;

export const SignupButton = styled.div`
  button {
    cursor: pointer;
    border-radius: 0.3rem;
    border: 0.07rem solid #6def55;
    background: #fefefe;
    width: 320px;
    height: 48px;
    color: #5acf28;
    font-size: 1rem;
    font-weight: 400;
    text-align: center;
  }
  margin: 1rem 0rem;
`;

export const StarWrap = styled.span`
  color: #f00001;
`;

export const HorizontalLine = styled.hr`
  width: 100%;
  border: solid 0.5px #e1e1e1;
  size: 1px;
  margin-bottom: 0.3rem;
`;

export const Description = styled.div`
  padding: 1rem;

  .title {
    font-size: 1.2rem;
    font-weight: 500;
    margin-bottom: 0.5rem;
  }
  .description {
    height: 2.4rem;
    color: #595959;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .bookmark {
    margin: 0.6rem;
    position: absolute;
    right: 0;
    bottom: 0;
  }
`;
