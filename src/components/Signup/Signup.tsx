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

interface inputCheckType {
  email: string;
  pw: string;
  pwCheck: string;
  name: string;
}

interface validType {
  email: number;
  pw: number;
  pwCheck: boolean;
  name: boolean;
}

function Signup() {
  const [active, setActive] = useState<boolean>(false);
  const [valid, setValid] = useState<validType>({
    email: 0,
    pw: 0,
    pwCheck: false,
    name: false,
  });

  const [inputCheck, setInputCheck] = useState<inputCheckType>({
    email: '',
    pw: '',
    pwCheck: '',
    name: '',
  });
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    if (valid.email && valid.pw >= 1 && valid.pwCheck && valid.name)
      setActive(true);
    else setActive(false);
  }, [inputCheck]);

  const inputEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    setInputCheck((prev) => ({ ...prev, email: text }));
    const emailRegex =
      /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,50})$/i;
    if (emailRegex.test(text)) setValid((prev) => ({ ...prev, email: 1 }));
    else setValid((prev) => ({ ...prev, email: 0 }));
  };

  const checkPwValid = (password: string) => {
    let strength = 0;
    const regexes = [/[a-z]+/, /[A-Z]+/, /[0-9]+/, /[$@#&!]+/];
    regexes.forEach((regex) => {
      strength += password.match(regex) ? 1 : 0;
    });
    setValid((prev) => ({
      ...prev,
      pw: strength,
      pwCheck: password === inputCheck.pwCheck ? true : false,
    }));
  };

  const inputPw = (e: React.ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    setInputCheck((prev) => ({ ...prev, pw: text }));
    const pwRegex =
      /^((?=.*?[A-Z])|(?=.*?[a-z])|(?=.*?[0-9])|(?=.*?[!@#$%^&*()-_=+,<.>/?])).{8,15}$/;
    if (pwRegex.test(text)) checkPwValid(text);
    else setValid((prev) => ({ ...prev, pw: 0, pwCheck: false }));
  };

  const inputPwCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    setInputCheck((prev) => ({ ...prev, pwCheck: text }));
    if (inputCheck.pw && inputCheck.pw === text)
      setValid((prev) => ({ ...prev, pwCheck: true }));
    else setValid((prev) => ({ ...prev, pwCheck: false }));
  };

  const inputName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    setInputCheck((prev) => ({ ...prev, name: text }));
    const nameRegex = /^[a-z|A-Z|가-힣|\s]{1,15}$/;
    if (nameRegex.test(text)) setValid((prev) => ({ ...prev, name: true }));
    else setValid((prev) => ({ ...prev, name: false }));
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
            onChange={inputEmail}
          />
          {inputCheck.email && valid.email !== 1 && (
            <div className='error'>
              {valid.email === 0
                ? '잘못된 이메일 주소입니다.'
                : '이미 등록된 이메일 주소입니다.'}
            </div>
          )}
          <div className='divMargin'>
            <span>비밀번호 (8자리 이상)</span>
            <StarWrap>*</StarWrap>
          </div>
          <input
            type='password'
            placeholder='비밀번호를 입력해주세요 (8자리 이상)'
            maxLength={20}
            onChange={inputPw}
          />
          {inputCheck.pw && (
            <PhoneError error={valid.pw}>
              {valid.pw === 0
                ? '비밀번호는 8자 이상 15자리 이하입니다.'
                : valid.pw === 1
                ? '비밀번호 안전도 낮음'
                : valid.pw <= 3
                ? '비밀번호 안전도 보통'
                : '비밀번호 안전도 높음'}
            </PhoneError>
          )}
          <input
            type='password'
            placeholder='다시 한 번 비밀번호를 입력해주세요'
            maxLength={20}
            onChange={inputPwCheck}
          />
          {inputCheck.pwCheck && !valid.pwCheck && (
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
            onChange={inputName}
          />
          {inputCheck.name && !valid.name && (
            <div className='error'>이름이 올바르지 않습니다.</div>
          )}
          <Buttons active={active}>
            <button>회원가입</button>
          </Buttons>
        </User>
      </PageContainer>
    </>
  );
}

export default Signup;
