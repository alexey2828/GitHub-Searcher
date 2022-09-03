import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/home';
import UserPage from './pages/profile';
import { ERoutsName } from './const/routs';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path={ERoutsName.Home} element={<HomePage />} />
          <Route path={ERoutsName.Profile} element={<UserPage />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
