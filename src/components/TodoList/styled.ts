import styled from 'styled-components';

export const Title = styled.span`
  display: flex;
  flex-direction: raw;
  justify-content: left;
  align-items: left;
  font-size: 1.3rem;
  font-weight: 500;
  input {
    ::placeholder {
      color: #b5b5b5;
    }
    width: 320px;
    height: 48px;
    box-sizing: border-box;
    margin-top: 0.5rem;
    padding: 5px 0 5px 15px;
    border-radius: 0.3rem;
    border: 1px solid #d6d6d6;
    font-weight: 400;
  }
`;
