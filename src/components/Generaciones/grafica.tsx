import React from 'react';
import { Modal, Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
const data = [
    { name: 'Ene', inscrito: 30, bajaDefinitiva: 5, bajaAcademica: 5, titulados: 15 },
    { name: 'Feb', inscrito: 40, bajaDefinitiva: 8, bajaAcademica: 3, titulados: 20 },
    { name: 'Mar', inscrito: 45, bajaDefinitiva: 10, bajaAcademica: 6, titulados: 25 },
    { name: 'Abr', inscrito: 50, bajaDefinitiva: 12, bajaAcademica: 8, titulados: 30 },
    { name: 'May', inscrito: 55, bajaDefinitiva: 15, bajaAcademica: 10, titulados: 35 },
];
const Grafica = () => {
    return (
            <Box >
                <Box sx={{ marginTop: '20px', height: '300px', position: 'relative' }}>

                    <LineChart width={600} height={300} data={data}>
                        <Legend
                            verticalAlign="top"
                            height={36}
                            iconSize={24}
                            iconType="square"
                            wrapperStyle={{ position: 'absolute', top: 0, left: 0, width: '100%' }}
                            formatter={(value, entry) => <span style={{ color: '#7D868D', fill: '#7D868D' }}>{value}</span>}

                        />

                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Line type="monotone" dataKey="inscrito" stroke="#F3A2A2" strokeWidth={3} />
                        <Line type="monotone" dataKey="bajaDefinitiva" stroke="#FAEB98" strokeWidth={3} />
                        <Line type="monotone" dataKey="bajaAcademica" stroke="#A7D9F4" strokeWidth={3} />
                        <Line type="monotone" dataKey="titulados" stroke="#E3BAF3" strokeWidth={3} />
                    </LineChart>
                </Box>
            </Box>
    );
};

export default Grafica;
