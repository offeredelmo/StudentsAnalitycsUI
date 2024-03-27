import { Avatar, Chip, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Checkbox } from "@mui/material"
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import GradeIcon from '@mui/icons-material/Grade';
import { Link } from "react-router-dom";


const tableHead: string[] = [
    "Matricula",
    "Nombre",
    "Status",
    "Rezago",
    "Informacion",
    "Favoritos"
]
const selectColor = (estatus) => {
    const lowerCaseEstatus = estatus.toLowerCase();
    if (lowerCaseEstatus === "inscrito") { return "success"; }
    if (lowerCaseEstatus === "baja definitiva") { return "error"; }
    if (lowerCaseEstatus === "baja academica") { return "warning"; }
    if (lowerCaseEstatus === "titulado") { return "primary"; }
    return "default";
}


const favorite = (favorito) => {
    if (favorito) {
        return <GradeIcon />;
    } else {
        return <StarBorderIcon />;
    }
}

export const TableEstudents = ({ onMatriculaSelect, selectedMatriculas, estudents }) => {

    const handleSelect = (event, matricula) => {
        onMatriculaSelect(matricula, event.target.checked);
    };

    return (
        <>
            <TableContainer component={Paper} sx={{ height: '71vh', marginTop: '2vh' }}>
                <Table>
                    <TableHead >
                        <TableRow >
                            {
                                tableHead.map((title) => {
                                    return (
                                        <TableCell key={title}>
                                            {title}
                                        </TableCell>
                                    )
                                })
                            }
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            estudents.map((estuden) => {
                                return (
                                    <TableRow key={estuden.matricula} hover>
                                        <TableCell >
                                            <Checkbox
                                                onChange={(event) => handleSelect(event, estuden.matricula)}
                                                checked={selectedMatriculas.includes(estuden.matricula)}
                                            />
                                            {estuden.matricula}
                                        </TableCell>
                                        <TableCell>{`${estuden.nombre} ${estuden.apellidoPaterno} ${estuden.apellidoMaterno}`}</TableCell>
                                        <TableCell>
                                            <Chip
                                                avatar={<Avatar>M</Avatar>}
                                                label={estuden.estatus}
                                                variant="filled"
                                                color={selectColor(estuden.estatus)}
                                            />
                                        </TableCell>
                                        <TableCell>{estuden.rezago ? "si" : "no"}</TableCell>
                                        <TableCell>
                                            <Link to={`/director/estudiantes/${estuden.matricula}`}>
                                                <IconButton aria-label="informacion">
                                                    < InfoOutlinedIcon />
                                                </IconButton>
                                            </Link>
                                        </TableCell>
                                        <TableCell>
                                            <IconButton aria-label="favorito">
                                                {favorite(estuden.favorito)}
                                            </IconButton>

                                        </TableCell>

                                    </TableRow>
                                )
                            })
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}