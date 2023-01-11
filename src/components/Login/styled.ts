import styled from 'styled-components';

export const User = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
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
