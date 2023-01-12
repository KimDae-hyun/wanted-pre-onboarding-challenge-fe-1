import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useValid } from '../../hooks/validation/useValid';
import {
  PageContainer,
  Title,
  Guide,
  Buttons,
  SignupButton,
  HorizontalLine,
} from '../../styles/styled';
import { User } from './styled';

function Login() {
  const [active, setActive] = useState<boolean>(false);
  const { email } = useValid({ tag: 'email', initialValue: '' });
  const { password } = useValid({ tag: 'password', initialValue: '' });
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!email.validMsg && password.pwLevel) setActive(true);
    else setActive(false);
  }, [email, password]);

  return (
    <PageContainer>
      <Title>로그인</Title>
      <User>
        <input
          type='text'
          placeholder='이메일 계정을 입력해주세요'
          maxLength={50}
          ref={inputRef}
          value={email.value}
          onChange={email.onChange}
        />
        {email.validMsg && (
          <div className='error'>이메일 형식이 올바르지 않습니다.</div>
        )}
        <input
          type='password'
          placeholder='비밀번호를 입력해주세요'
          maxLength={20}
          value={password.value}
          onChange={password.onChange}
        />
        {password.value && !password.pwLevel && (
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
