import React from 'react';
import { RecoilRoot } from 'recoil';

import MainPage from './pages/MainPage';

const App = () => {
  return (
    <RecoilRoot>
      <MainPage />
    </RecoilRoot>
  );
};

export default App;
