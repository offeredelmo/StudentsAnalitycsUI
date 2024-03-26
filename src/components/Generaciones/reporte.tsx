import React, { useRef, useState } from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import html2pdf from 'html2pdf.js';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import Grafica from './grafica'; // Importa el componente de la gráfica
import { CardReporte } from '../shared/estudiantes/CardReporte';

const Reporte = () => {
  
    return (
     
      <Box  height={700} >
        <CardReporte/>
      </Box>
     
    );
};

export default Reporte;
