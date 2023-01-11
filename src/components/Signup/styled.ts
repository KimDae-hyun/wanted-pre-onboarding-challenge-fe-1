import styled from 'styled-components';

export const User = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 1rem;
  input {
    ::placeholder {
      color: #b5b5b5;
    }
    width: 320px;
    height: 48px;
    box-sizing: border-box;
    margin-top: 0.5rem;
    padding: 0.5rem 1rem;
    border-radius: 0.3rem;
    border: 1px solid #d9d6d6;
    font-weight: 400;
    }
    .divMargin {
      margin-top: 1rem;
    }
  }
`;

export const PhoneError = styled.div<{ error: number }>`
  color: ${(props) =>
    props.error < 2 ? '#F00001' : props.error < 4 ? '#F09A00' : '#006EFF'};
  margin: 0.5rem;
  font-size: 0.8rem;
`;
