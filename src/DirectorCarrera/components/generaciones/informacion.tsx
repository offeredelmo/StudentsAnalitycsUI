import React from 'react';
import { Modal, Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Grafica from './grafica'


const data = [
    { name: 'Ene', inscrito: 30, bajaDefinitiva: 5, bajaAcademica: 5, titulados: 15 },
    { name: 'Feb', inscrito: 40, bajaDefinitiva: 8, bajaAcademica: 3, titulados: 20 },
    { name: 'Mar', inscrito: 45, bajaDefinitiva: 10, bajaAcademica: 6, titulados: 25 },
    { name: 'Abr', inscrito: 50, bajaDefinitiva: 12, bajaAcademica: 8, titulados: 30 },
    { name: 'May', inscrito: 55, bajaDefinitiva: 15, bajaAcademica: 10, titulados: 35 },
];
const Imformacion = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    return (
            <Box >
                <Typography variant="h6" id="modal-title" gutterBottom sx={{ textAlign: 'center', backgroundColor: '#D9D9D9', padding: '10px' }}>
                    Generación: 211
                </Typography>

                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Categoría</TableCell>
                                <TableCell>Cantidad</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell>Total de estudiantes de la generación</TableCell>
                                <TableCell>100</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Estudiantes ordinarios</TableCell>
                                <TableCell>80</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Cantidad de estudiantes en rezago</TableCell>
                                <TableCell>20</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Mujeres</TableCell>
                                <TableCell>60</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Hombres</TableCell>
                                <TableCell>40</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', padding: '10px', marginTop: '20px' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', backgroundColor: '#D9D9D9', alignItems: 'center', width: '23%', padding: '10px' }}>
                        <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>15</Typography>
                        <Typography variant="subtitle1" sx={{ fontSize: isMobile ? '12px' : '14px', }}>TITULADOS</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', backgroundColor: '#D9D9D9', alignItems: 'center', width: '23%', padding: '10px' }}>
                        <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>30</Typography>
                        <Typography variant="subtitle1" sx={{ fontSize: isMobile ? '12px' : '14px', }}>INSCRITO</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', backgroundColor: '#D9D9D9', alignItems: 'center', width: '23%', padding: '10px' }}>
                        <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>5</Typography>
                        <Typography variant="subtitle1" sx={{ fontSize: isMobile ? '12px' : '14px', }}>BAJA ACADÉMICA</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', backgroundColor: '#D9D9D9', alignItems: 'center', width: '23%', padding: '10px' }}>
                        <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>5</Typography>
                        <Typography variant="subtitle1" sx={{ fontSize: isMobile ? '12px' : '14px', }}>BAJA DEFINITIVA</Typography>
                    </Box>
                </Box>
                <Grafica/>
            </Box>
    );
};

export default Imformacion;
