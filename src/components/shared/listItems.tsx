import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import { NavLink, useLocation } from 'react-router-dom';

function ListItemLink({ icon, primary, to }) {
  const location = useLocation();
  const selected = location.pathname.includes(to); // esto asume que 'to' es la ruta que el botón representa

  return (
    <NavLink to={to} style={{textDecoration:"none", color:"black"}}>
      <ListItemButton selected={selected}>
        <ListItemIcon>
          {icon}
        </ListItemIcon>
        <ListItemText primary={primary} />
      </ListItemButton>
    </NavLink>

  );
}

export const MainListItems = () => {
  return (
    <React.Fragment>
      <ListItemLink to="/director/docentes/main" icon={<DashboardIcon />} primary="Docentes" />
      <ListItemLink to="/director/generaciones" icon={<ShoppingCartIcon />} primary="Generaciones" />
      <ListItemLink to="/director/estudiantes/main" icon={<PeopleIcon />} primary="Estudiantes" />
      <ListItemLink to="/director/subir-archivos" icon={<UploadFileIcon />} primary="Subir Archivos" />
    </React.Fragment>
  );
};
