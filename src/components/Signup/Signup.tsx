import { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  PageContainer,
  Title,
  Guide,
  Buttons,
  StarWrap,
} from '../../styles/styled';
import { User, PhoneError } from './styled';
import { useValid } from '../../hooks/useValid';
import instance from '../../utils/axios';

function Signup() {
  const [active, setActive] = useState<boolean>(false);
  const { email } = useValid({ tag: 'email', initialValue: '' });
  const { password } = useValid({ tag: 'password', initialValue: '' });
  const { passwordCheck } = useValid({
    tag: 'passwordCheck',
    initialValue: '',
  });
  const { name } = useValid({ tag: 'name', initialValue: '' });
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    if (
      !email.validMsg &&
      password.pwLevel >= 1 &&
      passwordCheck.value === password.value &&
      !name.validMsg
    )
      setActive(true);
    else setActive(false);
  }, [email, password, passwordCheck, name]);

  const signupHandler = async () => {
    try {
      const res = await instance.post('/users/create', {
        email: email.value,
        password: password.value,
      });
      alert(res.data.message);
      navigate('/');
    } catch (e: any) {
      alert(e.response.data.details);
    }
  };

  return (
    <>
      <PageContainer>
        <Title>회원가입</Title>
        <Guide>
          <Link to={`/`}>이미 계정이 있으신가요?</Link>
        </Guide>
        <User>
          <div className='divMargin'>
            <span>이메일 (아이디)</span>
            <StarWrap>*</StarWrap>
          </div>
          <input
            type='text'
            placeholder='이메일 계정을 입력해주세요'
            ref={inputRef}
            maxLength={50}
            value={email.value}
            onChange={email.onChange}
          />
          {email.validMsg && <div className='error'>{email.validMsg}</div>}
          <div className='divMargin'>
            <span>비밀번호 (8자리 이상)</span>
            <StarWrap>*</StarWrap>
          </div>
          <input
            type='password'
            placeholder='비밀번호를 입력해주세요 (8자리 이상)'
            maxLength={20}
            value={password.value}
            onChange={password.onChange}
          />
          {password.value && (
            <PhoneError error={password.pwLevel}>
              {password.validMsg}
            </PhoneError>
          )}
          <input
            type='password'
            placeholder='다시 한 번 비밀번호를 입력해주세요'
            maxLength={20}
            value={passwordCheck.value}
            onChange={passwordCheck.onChange}
          />
          {passwordCheck.value && password.value !== passwordCheck.value && (
            <div className='error'>비밀번호가 일치하지 않습니다.</div>
          )}
          <div className='divMargin'>
            <span>이름</span>
            <StarWrap>*</StarWrap>
          </div>
          <input
            type='text'
            placeholder='이름을 입력해주세요. 예) 홍길동'
            maxLength={15}
            value={name.value}
            onChange={name.onChange}
          />
          {name.validMsg && <div className='error'>{name.validMsg}</div>}
          <Buttons active={active}>
            <button onClick={signupHandler}>회원가입</button>
          </Buttons>
        </User>
      </PageContainer>
    </>
  );
}

export default Signup;
