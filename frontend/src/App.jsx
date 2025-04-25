import React from 'react';
import { BrowserRouter} from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import AppRoutes from './routes/AppRoutes';

const App = () => {
  return (
    <>
    <Toaster position="top-center" />
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>

    </>
  );
};

export default App;
