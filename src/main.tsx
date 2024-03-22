import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, RouterProvider, createBrowserRouter } from 'react-router-dom';




import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { CssBaseline } from '@mui/material';
import { LogIn } from './pages/inicio/LogIn.tsx';
import { ThemeProvider, createTheme } from '@mui/material';
import { SignIn } from './pages/inicio/SignIn.tsx';
import {App} from './App.tsx'
import { Busqueda } from './components/docentes/Busqueda.tsx';
import { DocentesDashboard } from './pages/DC-Docentes/DocentesDashboard.tsx';
import InformacionDocente from './components/docentes/InformacionDocente.tsx';
const darkTheme = createTheme({
  palette: {
    mode: 'light',//se puede usar 'light'
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
    path: "/",
    element: <DocentesDashboard/>,
    children: [
      {
        path: "docentes/main",
        element: <Busqueda/>,
      },
      {
        path: "docentes/informacion",
        element: <InformacionDocente/>,
      },
    ]
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
