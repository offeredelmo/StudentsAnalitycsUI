import React, { useRef, useState } from 'react';
import { Box, Typography, Button } from '@mui/material';
import html2pdf from 'html2pdf.js';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import Grafica from './grafica'; // Importa el componente de la gráfica

const Reporte = () => {
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
            <Box p={2} borderRadius={3} boxShadow={3}>
                <Typography variant="body1" style={{ color: "#58B0F6 " }}>
                    La generación no está rindiendo lo suficiente
                </Typography>
                <Box mb={2} />
                <Typography variant="body1" fontWeight="bold">
                    Fecha: 15 de Marzo de 2024
                </Typography>
                <Box mb={2} />
                <Typography variant="body1">
                    La generación cuenta con el peor desempeño desde el 2018. Se aplicarán medidas extremas para poder lograr que al menos 2 estudiantes sean capaces de graduarse. Métodos a usar: materias extracurriculares, más horas de materias.
                </Typography>
                <Box mb={2} />
                {mostrarGrafica && <Grafica />} {/* Renderiza la gráfica solo si mostrarGrafica es verdadero */}
                <Button
                    variant="contained"
                    style={{ backgroundColor: mostrarGrafica ? "#EBEBEB" : "#58B0F6", color: "#fff", marginTop: '10px' }}
                    onClick={toggleGrafica}
                    startIcon={mostrarGrafica ? <VisibilityOffIcon /> : <VisibilityIcon />}
                >
                    {mostrarGrafica ? 'Ocultar' : 'Mostrar'} Gráfica de la generación a través de los cuatrimestres
                </Button>
                <Button variant="contained" color="info" style={{ marginTop: '10px' }} onClick={descargarPDF}>
                    Descargar PDF
                </Button>
            </Box>
        </Box>
    );
};

export default Reporte;
