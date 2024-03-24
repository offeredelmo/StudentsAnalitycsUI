import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const daysOfWeek: string[] = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'];

// Definimos manualmente las actividades por día y hora
const activities: string[][] = [
  // Actividades para las horas de 8:00 a 16:00
  ['N/A', 'N/A', 'N/A', 'N/A', 'N/A'],
  ['N/A', 'N/A', 'N/A', 'N/A', 'N/A'],
  ['N/A', 'N/A', 'N/A', 'N/A', 'N/A'],
  ['N/A', 'N/A', 'N/A', 'N/A', 'N/A'],
  ['N/A', 'N/A', 'N/A', 'N/A', 'N/A'],
  ['N/A', 'N/A', 'N/A', 'N/A', 'N/A'],
  ['N/A', 'N/A', 'N/A', 'N/A', 'N/A'],
  ['N/A', 'N/A', 'N/A', 'N/A', 'N/A'],
  ['N/A', 'N/A', 'N/A', 'N/A', 'N/A'],
];

export default function WeeklySchedule() {
  return (
    
    <TableContainer component={Paper}>
      <TableHead>Horario</TableHead>
      <Table sx={{ minWidth: 650 }} aria-label="weekly schedule table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Hora</TableCell>
            {daysOfWeek.map(day => (
              <TableCell key={day} align="center">{day}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {activities.map((hourActivities, index) => (
            <TableRow key={index}>
              <TableCell component="th" scope="row" align="center">{`${8 + index}:00 - ${9 + index}:00`}</TableCell>
              {hourActivities.map((activity, dayIndex) => (
                <TableCell key={`${index}-${dayIndex}`} align="center">{activity}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
