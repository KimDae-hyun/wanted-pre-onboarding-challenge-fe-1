import { recoilPersist } from 'recoil-persist';
import { atom } from 'recoil';

const { persistAtom } = recoilPersist();

export const loginState = atom<boolean>({
  key: `loginState`,
  default: false,
  effects_UNSTABLE: [persistAtom],
});
