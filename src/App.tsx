import './App.css';
import { HashRouter, Route, Routes} from 'react-router-dom';
import HomePage from './pages/home';
import UserPage from './pages/profile';
import { ERoutsName } from './const/routs';
import React from 'react';

function App() {
  return (
    <HashRouter>
        <Routes>
          <Route path={ERoutsName.Main} element={<HomePage />} />
          <Route path={ERoutsName.Home} element={<HomePage />} />
          <Route path={ERoutsName.Profile} element={<UserPage />} />
        </Routes>
    </HashRouter>
  );
}

export default App;
