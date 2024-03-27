import { Avatar, Box, Chip, Collapse, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material"
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useState } from "react";
import { blue, green, grey, red } from "@mui/material/colors";
import React from "react";


type Calificacion = {
    c1: string,
    c2: string,
    c3: string,
    r1: string,
    r2: string,
    r3: string,
    ex: string,
    f: string
};

type Materia = {
    materia: string,
    calificaciones: Calificacion
};

type Cuatrimestre = {
    corte: string,
    materias: Materia[]
};

const calificaciones: Cuatrimestre[] = [
    {
        corte: "CUATRIMESTRE 1",
        materias: [
            { materia: "Inglés I", calificaciones: { c1: "10", c2: "70", c3: "100", r1: "0", r2: "0", r3: "76", ex: "100", f: "80" } },
            { materia: "Química básica", calificaciones: { c1: "0", c2: "0", c3: "0", r1: "0", r2: "0", r3: "0", ex: "0", f: "0" } },
            { materia: "Álgebra lineal", calificaciones: { c1: "0", c2: "0", c3: "0", r1: "0", r2: "0", r3: "0", ex: "0", f: "0" } },
            { materia: "Fundamentos de computación", calificaciones: { c1: "0", c2: "0", c3: "0", r1: "0", r2: "0", r3: "0", ex: "0", f: "0" } },
            { materia: "Algoritmos", calificaciones: { c1: "0", c2: "0", c3: "0", r1: "0", r2: "0", r3: "0", ex: "0", f: "0" } },
            { materia: "Matemáticas discretas", calificaciones: { c1: "0", c2: "0", c3: "0", r1: "0", r2: "0", r3: "0", ex: "0", f: "0" } },
            { materia: "Expresión oral y escrita I", calificaciones: { c1: "0", c2: "0", c3: "0", r1: "0", r2: "0", r3: "0", ex: "0", f: "100" } }
        ]
    },
    {
        corte: "CUATRIMESTRE 2",
        materias: [
            { materia: "Inglés II", calificaciones: { c1: "0", c2: "0", c3: "0", r1: "0", r2: "0", r3: "0", ex: "0", f: "0" } },
            { materia: "Desarrollo humano y valores", calificaciones: { c1: "0", c2: "0", c3: "0", r1: "0", r2: "0", r3: "0", ex: "0", f: "0" } },
            { materia: "Cálculo diferencial", calificaciones: { c1: "0", c2: "0", c3: "0", r1: "0", r2: "0", r3: "0", ex: "0", f: "0" } },
            { materia: "Programación orientada a objetos", calificaciones: { c1: "0", c2: "0", c3: "0", r1: "0", r2: "0", r3: "0", ex: "0", f: "0" } },
            { materia: "Estructuras de datos", calificaciones: { c1: "0", c2: "0", c3: "0", r1: "0", r2: "0", r3: "0", ex: "0", f: "0" } },
            { materia: "Ingeniería de software asistida por computadora", calificaciones: { c1: "0", c2: "0", c3: "0", r1: "0", r2: "0", r3: "0", ex: "0", f: "0" } },
            { materia: "Procesos de desarrollo de software", calificaciones: { c1: "0", c2: "0", c3: "0", r1: "0", r2: "0", r3: "0", ex: "0", f: "0" } }
        ]
    },
    {
        corte: "CUATRIMESTRE 3",
        materias: [
            { materia: "Inglés III", calificaciones: { c1: "0", c2: "0", c3: "0", r1: "0", r2: "0", r3: "0", ex: "0", f: "0" } },
            { materia: "Inteligencia emocional y manejo de conflictos", calificaciones: { c1: "0", c2: "0", c3: "0", r1: "0", r2: "0", r3: "0", ex: "0", f: "0" } },
            { materia: "Cálculo integral", calificaciones: { c1: "0", c2: "0", c3: "0", r1: "0", r2: "0", r3: "0", ex: "0", f: "0" } },
            { materia: "Programación visual", calificaciones: { c1: "0", c2: "0", c3: "0", r1: "0", r2: "0", r3: "0", ex: "0", f: "0" } },
            { materia: "Estructuras de datos avanzadas", calificaciones: { c1: "0", c2: "0", c3: "0", r1: "0", r2: "0", r3: "0", ex: "0", f: "0" } },
            { materia: "Fundamentos de bases de datos", calificaciones: { c1: "0", c2: "0", c3: "0", r1: "0", r2: "0", r3: "0", ex: "0", f: "0" } },
            { materia: "Ingeniería de requerimientos de software", calificaciones: { c1: "0", c2: "0", c3: "0", r1: "0", r2: "0", r3: "0", ex: "0", f: "0" } }
        ]
    },
    {
        corte: "CUATRIMESTRE 4",
        materias: [
            { materia: "Inglés IV", calificaciones: { c1: "0", c2: "0", c3: "0", r1: "0", r2: "0", r3: "0", ex: "0", f: "0" } },
            { materia: "Habilidades cognitivas y creatividad", calificaciones: { c1: "0", c2: "0", c3: "0", r1: "0", r2: "0", r3: "0", ex: "0", f: "0" } },
            { materia: "Matemáticas para ingeniería I", calificaciones: { c1: "0", c2: "0", c3: "0", r1: "0", r2: "0", r3: "0", ex: "0", f: "0" } },
            { materia: "Programación Web", calificaciones: { c1: "0", c2: "0", c3: "0", r1: "0", r2: "0", r3: "0", ex: "0", f: "0" } },
            { materia: "Diseño de interfaces", calificaciones: { c1: "0", c2: "0", c3: "0", r1: "0", r2: "0", r3: "0", ex: "0", f: "0" } },
            { materia: "Bases de datos", calificaciones: { c1: "0", c2: "0", c3: "0", r1: "0", r2: "0", r3: "0", ex: "0", f: "0" } },
            { materia: "Electricidad y magnetismo", calificaciones: { c1: "0", c2: "0", c3: "0", r1: "0", r2: "0", r3: "0", ex: "0", f: "0" } }
        ]
    },
    {
        corte: "CUATRIMESTRE 5",
        materias: [
            { materia: "Inglés V", calificaciones: { c1: "0", c2: "0", c3: "0", r1: "0", r2: "0", r3: "0", ex: "0", f: "0" } },
            { materia: "Ética profesional", calificaciones: { c1: "0", c2: "0", c3: "0", r1: "0", r2: "0", r3: "0", ex: "0", f: "0" } },
            { materia: "Matemáticas para ingeniería II", calificaciones: { c1: "0", c2: "0", c3: "0", r1: "0", r2: "0", r3: "0", ex: "0", f: "0" } },
            { materia: "Programación cliente/servidor", calificaciones: { c1: "0", c2: "0", c3: "0", r1: "0", r2: "0", r3: "0", ex: "0", f: "0" } },
            { materia: "Fundamentos de redes", calificaciones: { c1: "0", c2: "0", c3: "0", r1: "0", r2: "0", r3: "0", ex: "0", f: "0" } },
            { materia: "Arquitectura de software", calificaciones: { c1: "0", c2: "0", c3: "0", r1: "0", r2: "0", r3: "0", ex: "0", f: "0" } },
            { materia: "Sistemas digitales", calificaciones: { c1: "0", c2: "0", c3: "0", r1: "0", r2: "0", r3: "0", ex: "0", f: "0" } }
        ]
    },
    {
        corte: "CUATRIMESTRE 6",
        materias: [
            { materia: "Inglés VI", calificaciones: { c1: "0", c2: "0", c3: "0", r1: "0", r2: "0", r3: "0", ex: "0", f: "0" } },
            { materia: "Habilidades gerenciales", calificaciones: { c1: "0", c2: "0", c3: "0", r1: "0", r2: "0", r3: "0", ex: "0", f: "0" } },
            { materia: "Probabilidad y estadística", calificaciones: { c1: "0", c2: "0", c3: "0", r1: "0", r2: "0", r3: "0", ex: "0", f: "0" } },
            { materia: "Arquitectura de computadoras", calificaciones: { c1: "0", c2: "0", c3: "0", r1: "0", r2: "0", r3: "0", ex: "0", f: "0" } },
            { materia: "Redes", calificaciones: { c1: "0", c2: "0", c3: "0", r1: "0", r2: "0", r3: "0", ex: "0", f: "0" } },
            { materia: "Calidad del software", calificaciones: { c1: "0", c2: "0", c3: "0", r1: "0", r2: "0", r3: "0", ex: "0", f: "0" } },
            { materia: "Estancia I", calificaciones: { c1: "0", c2: "0", c3: "0", r1: "0", r2: "0", r3: "0", ex: "0", f: "0" } }
        ]
    },
    {
        corte: "CUATRIMESTRE 7",
        materias: [
            { materia: "Inglés VII", calificaciones: { c1: "0", c2: "0", c3: "0", r1: "0", r2: "0", r3: "0", ex: "0", f: "0" } },
            { materia: "Liderazgo de equipos de alto desempeño", calificaciones: { c1: "0", c2: "0", c3: "0", r1: "0", r2: "0", r3: "0", ex: "0", f: "0" } },
            { materia: "Lenguajes y autómatas", calificaciones: { c1: "0", c2: "0", c3: "0", r1: "0", r2: "0", r3: "0", ex: "0", f: "0" } },
            { materia: "Sistemas operativos", calificaciones: { c1: "0", c2: "0", c3: "0", r1: "0", r2: "0", r3: "0", ex: "0", f: "0" } },
            { materia: "Programación concurrente", calificaciones: { c1: "0", c2: "0", c3: "0", r1: "0", r2: "0", r3: "0", ex: "0", f: "0" } },
            { materia: "Pruebas del software", calificaciones: { c1: "0", c2: "0", c3: "0", r1: "0", r2: "0", r3: "0", ex: "0", f: "0" } },
            { materia: "Estancia II", calificaciones: { c1: "0", c2: "0", c3: "0", r1: "0", r2: "0", r3: "0", ex: "0", f: "0" } }
        ]
    },
    {
        corte: "CUATRIMESTRE 8",
        materias: [
            { materia: "Inglés VIII", calificaciones: { c1: "0", c2: "0", c3: "0", r1: "0", r2: "0", r3: "0", ex: "0", f: "0" } },
            { materia: "Programación para móviles I", calificaciones: { c1: "0", c2: "0", c3: "0", r1: "0", r2: "0", r3: "0", ex: "0", f: "0" } },
            { materia: "Compiladores e intérpretes", calificaciones: { c1: "0", c2: "0", c3: "0", r1: "0", r2: "0", r3: "0", ex: "0", f: "0" } },
            { materia: "Inteligencia artificial", calificaciones: { c1: "0", c2: "0", c3: "0", r1: "0", r2: "0", r3: "0", ex: "0", f: "0" } },
            { materia: "Análisis financiero de software", calificaciones: { c1: "0", c2: "0", c3: "0", r1: "0", r2: "0", r3: "0", ex: "0", f: "0" } },
            { materia: "Mantenimiento de software", calificaciones: { c1: "0", c2: "0", c3: "0", r1: "0", r2: "0", r3: "0", ex: "0", f: "0" } },
            { materia: "Multimedia y diseño digital", calificaciones: { c1: "0", c2: "0", c3: "0", r1: "0", r2: "0", r3: "0", ex: "0", f: "0" } }
        ]
    },
    {
        corte: "CUATRIMESTRE 9",
        materias: [
            { materia: "Inglés IX", calificaciones: { c1: "0", c2: "0", c3: "0", r1: "0", r2: "0", r3: "0", ex: "0", f: "0" } },
            { materia: "Programación para móviles II", calificaciones: { c1: "0", c2: "0", c3: "0", r1: "0", r2: "0", r3: "0", ex: "0", f: "0" } },
            { materia: "Administración de proyectos de software", calificaciones: { c1: "0", c2: "0", c3: "0", r1: "0", r2: "0", r3: "0", ex: "0", f: "0" } },
            { materia: "Minería de datos", calificaciones: { c1: "0", c2: "0", c3: "0", r1: "0", r2: "0", r3: "0", ex: "0", f: "0" } },
            { materia: "Arquitectura orientada a servicios", calificaciones: { c1: "0", c2: "0", c3: "0", r1: "0", r2: "0", r3: "0", ex: "0", f: "0" } },
            { materia: "Expresión oral y escrita II", calificaciones: { c1: "0", c2: "0", c3: "0", r1: "0", r2: "0", r3: "0", ex: "0", f: "0" } },
            { materia: "Seguridad de la información", calificaciones: { c1: "0", c2: "0", c3: "0", r1: "0", r2: "0", r3: "0", ex: "0", f: "0" } }
        ]
    },
    {
        corte: "CUATRIMESTRE 10",
        materias: [
            { materia: "Estadía profesional", calificaciones: { c1: "0", c2: "0", c3: "0", r1: "0", r2: "0", r3: "0", ex: "0", f: "0" } },
        ]
    },
];

const getColorForScore = (score, final = false) => {
    const scoreInt = parseInt(score);
    if (final) {
        return scoreInt === 0 ? grey[400] : scoreInt >= 70 ? blue[800] : red[800];
    }
    return scoreInt === 0 ? grey[400] : scoreInt < 70 ? red[800] : green[800];
};

export const TableCalificaciones = () => {

    const [openRow, setOpenRow] = useState({});

    const toggleRow = (corte) => {
        setOpenRow(prev => ({ ...prev, [corte]: !prev[corte] }));
    };

    return (
        <TableContainer component={Paper}>
            <Table>
                {calificaciones.map((corte, index) => (
                    <React.Fragment key={index}>
                        <TableHead>
                            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                                <TableCell>
                                    <IconButton
                                        aria-label="expand row"
                                        size="small"
                                        onClick={() => toggleRow(corte.corte)}
                                    >
                                        {openRow[corte.corte] ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                                    </IconButton>
                                    {corte.corte}
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        {/* Asegúrate de que este TableRow está dentro de un TableBody */}
                        <TableBody>
                            <TableRow>
                                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={9}>
                                    <Collapse in={openRow[corte.corte]} timeout="auto" unmountOnExit>
                                        <Box margin={1}>
                                            <Typography variant="h6" gutterBottom component="div">
                                                Materias
                                            </Typography>
                                            <Table size="small" aria-label="purchases">
                                                <TableHead>
                                                    <TableRow>
                                                        <TableCell>Materia</TableCell>
                                                        <TableCell align="center">C1</TableCell>
                                                        <TableCell align="center">C2</TableCell>
                                                        <TableCell align="center">C3</TableCell>
                                                        <TableCell align="center">R1</TableCell>
                                                        <TableCell align="center">R2</TableCell>
                                                        <TableCell align="center">R3</TableCell>
                                                        <TableCell align="center">EX</TableCell>
                                                        <TableCell align="center">F</TableCell>
                                                    </TableRow>
                                                </TableHead>
                                                <TableBody>
                                                    {corte.materias.map((materia, materiaIndex) => (
                                                        <TableRow key={materiaIndex}>
                                                            <TableCell component="th" scope="row">
                                                                {materia.materia}
                                                            </TableCell>
                                                            {/* Renderiza cada calificación con el color correspondiente */}
                                                            {Object.values(materia.calificaciones).map((calificacion, index) => (
                                                                <TableCell key={index} align="center" style={{ lineHeight: '0' }}>
                                                                    <Avatar
                                                                        sx={{
                                                                            bgcolor: getColorForScore(calificacion, index === Object.values(materia.calificaciones).length - 1)
                                                                        }}
                                                                        variant="square"
                                                                        style={{ display: 'inline-flex', verticalAlign: 'middle' }}
                                                                    >
                                                                        {calificacion}
                                                                    </Avatar>
                                                                </TableCell>
                                                            ))}
                                                        </TableRow>
                                                    ))}
                                                </TableBody>
                                            </Table>
                                        </Box>
                                    </Collapse>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </React.Fragment>
                ))}
            </Table>
        </TableContainer>
    );
}




