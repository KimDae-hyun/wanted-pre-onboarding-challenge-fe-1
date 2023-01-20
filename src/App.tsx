import { RecoilRoot } from 'recoil';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Signup from './pages/Signup';
import Main from './pages/Main';

function App() {
  return (
    <>
      <RecoilRoot>
        <Router>
          <Layout>
            <Routes>
              <Route index element={<Main />} />
              <Route path='/signup' element={<Signup />} />
            </Routes>
          </Layout>
        </Router>
      </RecoilRoot>
    </>
  );
}

export default App;
