import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  PageContainer,
  Title,
  Guide,
  Buttons,
  SignupButton,
  HorizontalLine,
} from '../../styles/styled';
import { User } from './styled';

interface validType {
  email: boolean;
  pw: boolean;
}

function Login() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [active, setActive] = useState<boolean>(false);
  const [valid, setValid] = useState<validType>({ email: false, pw: false });
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (valid.email && valid.pw) setActive(true);
    else setActive(false);
  }, [valid]);

  const inputEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    setEmail(text);
    const emailRegex =
      /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,50})$/i;
    if (emailRegex.test(text)) setValid((prev) => ({ ...prev, email: true }));
    else setValid((prev) => ({ ...prev, email: false }));
  };

  const inputPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    setPassword(text);
    const pwRegex =
      /^((?=.*?[A-Z])|(?=.*?[a-z])|(?=.*?[0-9])|(?=.*?[!@#$%^&*()-_=+,<.>/?])).{8,15}$/;
    if (pwRegex.test(text)) setValid((prev) => ({ ...prev, pw: true }));
    else setValid((prev) => ({ ...prev, pw: false }));
  };

  return (
    <PageContainer>
      <Title>로그인</Title>
      <User>
        <input
          type='text'
          placeholder='이메일 계정을 입력해주세요'
          maxLength={50}
          ref={inputRef}
          onChange={inputEmail}
        />
        {email && !valid.email && (
          <div className='error'>이메일 형식이 올바르지 않습니다.</div>
        )}
        <input
          type='password'
          placeholder='비밀번호를 입력해주세요'
          maxLength={20}
          onChange={inputPassword}
        />
        {password && !valid.pw && (
          <div className='error'>비밀번호는 8자리 이상 15자리 이하입니다.</div>
        )}
      </User>
      <Buttons active={active}>
        <button>로그인</button>
      </Buttons>
      <HorizontalLine />
      <Guide>아직 회원이 아니신가요?</Guide>
      <SignupButton>
        <button onClick={() => navigate('/signup')}>회원가입</button>
      </SignupButton>
    </PageContainer>
  );
}

export default Login;
