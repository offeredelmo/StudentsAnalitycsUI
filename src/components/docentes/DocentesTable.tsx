import {  IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Chip, Avatar, Checkbox, Box } from "@mui/material";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { Breadcrumbs, Typography } from "@mui/material"

import { ToolBarDocentes } from "./DocentToolBar";
import { Link } from "react-router-dom";

const docentes = [
    { matricula: "15511", nombre: "Carlos Alberto Diaz Hernandez", estatus: "PTC", grupos: "8b", favorito: true },
    { matricula: "22452", nombre: "Armando", estatus: "Suplente", grupos: "9a", favorito: true },
    { matricula: "21135", nombre: "Jesus Gonzales", estatus: "Medio Tiempo", grupos: "8a", favorito: true },
    
]
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
const tableHead: string[] = [
    "",
    "Matricula",
    "Nombre",
    "Rol",
    "Grupos",
    "Informacion"
]
const selectColor = (estatus) => {
    const lowerCaseEstatus = estatus.toLowerCase();
    if (lowerCaseEstatus === "PTC") { return "success"; }
    if (lowerCaseEstatus === "Suplente") { return "warning"; }
    if (lowerCaseEstatus === "Medio Tiempo") { return "primary"; } // Agregado caso para "Titulado"
    return "default"; // Retorno por defecto en caso de no cumplirse ninguno de los anteriores
}


export const TableDocentes = () => {
    return (
        <Box>
            <Typography variant="h3">Docentes </Typography>
            <Breadcrumbs aria-label="breadcrumb">
                <Typography variant="overline" color="text.primary">Docentes</Typography>
                <Typography color="text.primary"></Typography>
            </Breadcrumbs>

                    <ToolBarDocentes></ToolBarDocentes>
                
            
            <TableContainer component={Paper}>
                <Table>
                    <TableHead >
                        <TableRow >
                            {
                                tableHead.map((title, index) => {
                                    return (
                                        <TableCell key={index} >
                                            {title}
                                        </TableCell>
                                    )
                                })
                            }
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            docentes.map((docentes, index) => {
                                return (
                                    <TableRow key={index}>
                                        <TableCell>
                                            <Checkbox {...label} defaultChecked />
                                        </TableCell>
                                        <TableCell>{docentes.matricula}</TableCell>
                                        <TableCell>{docentes.nombre}</TableCell>
                                        <TableCell>
                                            <Chip
                                                avatar={<Avatar>M</Avatar>}
                                                label={docentes.estatus}
                                                variant="filled"
                                                color={selectColor(docentes.estatus)}
                                            />
                                        </TableCell>
                                        <TableCell>{docentes.grupos}</TableCell>
                                        <TableCell>
                                            <IconButton aria-label="informacion">
                                                <InfoOutlinedIcon/>
                                            </IconButton> <Link to="/docentes/informacion">hola </Link>
                                        </TableCell>
                                    </TableRow>
                                )
                            })
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
            
        
    )
}
