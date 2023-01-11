import { RecoilRoot } from 'recoil';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { AppContainer } from './styles/styled';

function App() {
  return (
    <>
      <RecoilRoot>
        <Router>
          <AppContainer>
            <Routes>
              <Route path='/' element={<Login />} />
              <Route path='/signup' element={<Signup />} />
            </Routes>
          </AppContainer>
        </Router>
      </RecoilRoot>
    </>
  );
}

export default App;
