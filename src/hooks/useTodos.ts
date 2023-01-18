import { useState } from 'react';

export const useTodos = () => {
  const [value, setValue] = useState<string>('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return { value, onChange, setValue };
};
