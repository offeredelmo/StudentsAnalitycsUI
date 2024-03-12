import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { CssBaseline } from '@mui/material';
import { LogIn } from './pages/inicio/LogIn.tsx';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { SignIn } from './pages/inicio/SignIn.tsx';
import {App} from './App.tsx'
const darkTheme = createTheme({
  palette: {
    mode: 'dark',//se puede usar 'light'
  },
});


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <CssBaseline></CssBaseline>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LogIn />} />
          <Route path="/sigin" element={<SignIn />} />
          <Route path="/dashboard" element={<App/>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
)
