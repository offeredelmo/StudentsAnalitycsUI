import { Box, Collapse, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material"
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useState } from "react";
import { estudent } from "../../../../pages/estudiantes/EstudianteDashboard";

export const TableDireccionActual = ({ estudents }: { estudents: estudent[] }) => {

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
                                <Typography display="inline-block" variant="subtitle1">Direccion Actual</Typography>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell style={{ paddingBottom: 0, paddingTop: 0 }}  colSpan={2}>
                                <Collapse in={openRow} timeout="auto" unmountOnExit>
                                        <Table size="small" aria-label="purchases">
                                            <TableBody>
                                                <TableRow>
                                                    <TableCell width='50%'>Ciudad</TableCell>
                                                    <TableCell  width='50%'>{estudents[0].direccionActual.ciudad}</TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell  width='50%'>Colonia</TableCell>
                                                    <TableCell  width='50%'>{estudents[0].direccionActual.colonia}</TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell  width='50%'>Codigo Postal</TableCell>
                                                    <TableCell  width='50%'>{estudents[0].direccionActual.codigoPostal}</TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell  width='50%'>Numero exterior</TableCell>
                                                    <TableCell  width='50%'>{estudents[0].direccionActual.numeroExterior}</TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell  width='50%'>Numero Interior</TableCell>
                                                    <TableCell  width='50%'>{estudents[0].direccionActual.numeroInterior}</TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell  width='50%'>Calle 1</TableCell>
                                                    <TableCell  width='50%'>{estudents[0].direccionActual.calle1}</TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell  width='50%'>Calle 2</TableCell>
                                                    <TableCell  width='50%'>{estudents[0].direccionActual.calle2}</TableCell>
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



