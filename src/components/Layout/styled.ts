import styled from 'styled-components';

export const Nav = styled.div<{ login?: boolean }>`
  display: flex;
  flex-direction: row;
  justify-content: right;
  text-align: right;
  height: ${(props) => (props.login ? '1.8rem' : '1rem')};
  padding: ${(props) => (props.login ? '1rem 2rem' : '1.4rem 2rem')};
  border-bottom: 0.05rem solid #979797;
  .login {
    color: #616161;
    cursor: pointer;
  }
  .bar {
    color: #616161;
    margin: 0 1rem;
  }
  .signup {
    color: #006eff;
    cursor: pointer;
  }
  .user {
    font-size: 1.2rem;
    margin-right: 2.5rem;
    color: #616161;
    padding: 0.3rem 0.6rem;
  }
`;

export const LogoutButton = styled.div`
  display: flex;
  justify-content: right;
`;
