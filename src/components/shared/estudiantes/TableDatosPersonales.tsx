import { Collapse, IconButton, Table, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material"
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import EditIcon from '@mui/icons-material/Edit';

export const TableDatosPersonales = ({estudents,toggleRow,openRow}) => {
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
                                <Typography display="inline-block" variant="subtitle1" color="initial">Informacion personal</Typography>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                                <Collapse in={openRow} timeout="auto" unmountOnExit>
                                    <Table size="small" aria-label="purchases">
                                        <TableRow>
                                            <TableCell>Nombre</TableCell>
                                            <TableCell>{estudents[0].nombre}</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>Matricula</TableCell>
                                            <TableCell>{estudents[0].matricula}</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>Apellido Paterno</TableCell>
                                            <TableCell>{estudents[0].apellidoPaterno}</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>Apellido Materno</TableCell>
                                            <TableCell>{estudents[0].apellidoMaterno}</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>Numero de telefono</TableCell>
                                            <TableCell>{estudents[0].datosPersonales.numeroTelefono}</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>Curp</TableCell>
                                            <TableCell>{estudents[0].datosPersonales.curp}</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>Sexo</TableCell>
                                            <TableCell>{estudents[0].datosPersonales.sexo}</TableCell>
                                        </TableRow>
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



