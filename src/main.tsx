import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, createBrowserRouter,RouterProvider } from 'react-router-dom';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { CssBaseline } from '@mui/material';
import { LogIn } from './pages/inicio/LogIn.tsx';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { SignIn } from './pages/inicio/SignIn.tsx';
import {App} from './App.tsx'
import { App2 } from './pages/generaciones/generaciones.tsx';
import { TableComponent } from "./components/Generaciones/generaciones";

const darkTheme = createTheme({
  palette: {
    mode: 'light',
  },
});
const router = createBrowserRouter([
  {
    path: "/",
    element: <LogIn/>,
  },
  {
    path: "/sigin",
    element: <SignIn/>,
  },
  {
    path: "/dev",
    element: <App/>,
  },
  {
    path: "/generaciones",
    element:<App2 TableComponent={TableComponent} />,

  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <CssBaseline></CssBaseline>
      <RouterProvider router={router}></RouterProvider>
          </ThemeProvider>
  </React.StrictMode>,
)