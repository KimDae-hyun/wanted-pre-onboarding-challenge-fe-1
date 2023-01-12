import { useEffect, useState } from 'react';

interface validatorType {
  tag: string;
  initialValue: string;
}

export const useValid = ({ tag, initialValue }: validatorType) => {
  const [value, setValue] = useState<string>(initialValue);
  const [validMsg, setValidMsg] = useState<string>('');
  const [pwLevel, setPwLevel] = useState<number>(0);
  const regex: { [key: string]: RegExp } = {
    email:
      /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,50})$/i,
    password:
      /^((?=.*?[A-Z])|(?=.*?[a-z])|(?=.*?[0-9])|(?=.*?[!@#$%^&*()_+])).{8,15}$/,
    name: /^[a-z|A-Z|가-힣|\s]{1,15}$/,
  };
  const Message: { [key: string]: string } = {
    email: '잘못된 이메일 주소입니다.',
    password: '비밀번호는 8자 이상 15자리 이하입니다.',
    name: '이름이 올바르지 않습니다.',
  };
  const passwordLv: { [key: number]: string } = {
    0: '비밀번호는 8자 이상 15자리 이하입니다.',
    1: '비밀번호 안전도 낮음',
    2: '비밀번호 안전도 보통',
    3: '비밀번호 안전도 높음',
    4: '비밀번호 안전도 매우 높음',
  };

  const passwordStrength = () => {
    let strength = 0;
    const regexes = [/[a-z]+/, /[A-Z]+/, /[0-9]+/, /[!@#$%^&*_+]+/];
    regexes.forEach((regex) => {
      strength += value.match(regex) ? 1 : 0;
    });
    setPwLevel(strength);
    setValidMsg(passwordLv[strength]);
  };

  useEffect(() => {
    if (tag !== 'passwordCheck') {
      if (value && !regex[tag].test(value)) {
        setValidMsg(Message[tag]);
        setPwLevel(0);
      } else if (value && tag === 'password') passwordStrength();
      else {
        setValidMsg('');
        setPwLevel(0);
      }
    }
  }, [value]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return { [tag]: { value, validMsg, pwLevel, onChange } };
};
