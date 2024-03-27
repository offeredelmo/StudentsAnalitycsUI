import { Box, Collapse, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material"
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useState } from "react";
import { estudent } from "../../../pages/estudiantes/EstudianteDashboard";



export const TableTutor = ({ estudents }: { estudents: estudent[] }) => {

    // funcionamiento del despliegue de la fila informacion personal
    const [openRow, setOpenRow] = useState(false); // Estado para controlar la apertura del Drawer
    const toggleRow = () => {
        setOpenRow(!openRow); // Cambia el estado de apertura del Drawer
    };

    return (
        <>
                    <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                            <TableCell >
                                <IconButton
                                    aria-label="expand row"
                                    size="small"
                                    onClick={toggleRow}
                                >
                                    {openRow ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                                </IconButton>
                                <Typography display="inline-block" variant="subtitle1" >Informacion personal</Typography>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell style={{ paddingBottom: 0, paddingTop: 0 }}  >
                                <Collapse in={openRow} timeout="auto" unmountOnExit>
                                        <Table size="small" aria-label="purchases">
                                            <TableBody>
                                                <TableRow>
                                                    <TableCell  width='50%'>Nombre</TableCell>
                                                    <TableCell  width='50%'>{estudents[0].datosTutor.nombre}</TableCell>
                                                </TableRow>
                                             
                                                <TableRow>
                                                    <TableCell  width='50%'>Apellido Paterno</TableCell>
                                                    <TableCell  width='50%'>{estudents[0].datosTutor.apellidoPaterno}</TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell  width='50%'>Apellido Materno</TableCell>
                                                    <TableCell  width='50%'>{estudents[0].datosTutor.apellidoMaterno}</TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell  width='50%'>Numero de telefono</TableCell>
                                                    <TableCell  width='50%'>{estudents[0].datosTutor.numeroTelefono}</TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell  width='50%'>Curp</TableCell>
                                                    <TableCell  width='50%'>{estudents[0].datosPersonales.curp}</TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell  width='50%'>Sexo</TableCell>
                                                    <TableCell  width='50%'>{estudents[0].datosPersonales.sexo}</TableCell>
                                                </TableRow>
                                            </TableBody>
                                        </Table>

                                </Collapse>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                </Table>
            </TableContainer>
        </>
    )
}



