import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';


import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { CssBaseline } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material';
import { App2 } from './DirectorCarrera/pages/generaciones/generaciones.tsx';




import { EstudiantesMain } from './DirectorCarrera/pages/estudiantes/EstudiantesMain.tsx';
import { EstudianteDashboard } from './DirectorCarrera/pages/estudiantes/EstudianteDashboard.tsx';
import { LogIn } from './User/pages/LogIn.tsx';
import { SignIn } from './User/pages/SignIn.tsx';
import { TableComponent } from './DirectorCarrera/components/generaciones/generaciones.tsx';
import { Busqueda } from './DirectorCarrera/components/docentes/Busqueda.tsx';
import InformacionDocente from './DirectorCarrera/components/docentes/InformacionDocente.tsx';
import { Dashboard } from './Dashboard.tsx';

const darkTheme = createTheme({
  palette: {
    mode: 'light',//se puede usar 'light'
  },
});


const router = createBrowserRouter([
  {
    path: "/",
    element: <LogIn />,
  },
  {
    path: "/sigin",
    element: <SignIn />,
  },
  {

    path: "/director/",
    element: <Dashboard />,
    children: [
      {
        path: "estudiantes/main",
        element: <EstudiantesMain />,
      },
      {
        path: "estudiantes/:id",
        element: <EstudianteDashboard />,

      },
      {
        path: "generaciones",
        element: <App2 TableComponent={TableComponent} />,
      },
      {
        path: "docentes/main",
        element: <Busqueda />,
      },
      {
        path: "docentes/informacion",
        element: <InformacionDocente />,

      }
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
