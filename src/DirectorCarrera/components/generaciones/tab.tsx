import React, { useRef, useState } from 'react';
import { Box, Typography, Button } from '@mui/material';
import html2pdf from 'html2pdf.js';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import Grafica from './grafica'; // Importa el componente de la gráfica

const Tab = () => {
    const reporteRef = useRef(null);
    const [mostrarGrafica, setMostrarGrafica] = useState(false);

    const toggleGrafica = () => {
        setMostrarGrafica(!mostrarGrafica);
    };

    const descargarPDF = () => {
        const input = reporteRef.current;
        html2pdf().from(input).save();
    };

    return (
        <Box height={700} ref={reporteRef}>
            
        </Box>
    );
};

export default Tab;
