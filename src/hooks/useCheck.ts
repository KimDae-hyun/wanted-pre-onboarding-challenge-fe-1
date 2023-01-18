import { useState } from 'react';

export const useCheck = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  return { isChecked, setIsChecked };
};
