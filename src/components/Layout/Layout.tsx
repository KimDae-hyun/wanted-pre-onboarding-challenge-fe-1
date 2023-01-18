import { Route, Routes } from 'react-router-dom';
import { RiLogoutBoxRLine } from 'react-icons/ri';
import { useRecoilState } from 'recoil';
import Login from '../../pages/Login';
import Signup from '../../pages/Signup';
import { loginState } from '../../utils/recoil/login';
import { LogoutButton } from './styled';
import { AppContainer } from '../../styles/styled';

type LayoutProps = {
  children: React.ReactNode;
};

function Layout({ children }: LayoutProps) {
  const [loggedIn, setLoggedIn] = useRecoilState(loginState);

  const logout = () => {
    localStorage.removeItem('loginToken');
    setLoggedIn(false);
    alert('로그아웃 되었습니다.');
  };

  return (
    <>
      {loggedIn ? (
        <>
          <LogoutButton>
            <RiLogoutBoxRLine color='#5acf28' size='2rem' onClick={logout} />
          </LogoutButton>
          <AppContainer>{children}</AppContainer>
        </>
      ) : (
        <AppContainer>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
          </Routes>
        </AppContainer>
      )}
    </>
  );
}

export default Layout;
