import { Box, Breadcrumbs, Collapse, IconButton, Tab, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Tabs, Typography } from "@mui/material"

import { useState } from "react";
import AppBarCustom from "../../../components/shared/AppBarCustom";
import DrawerCustom from "../../../components/shared/DraweCustom";
import { CardReporte } from "../../components/estudiantes/CardReporte";
import { TableCalificaciones } from "../../components/estudiantes/Tables/TableCalificaciones";
import { GroupTableEstudiante } from "../../components/estudiantes/GruopTableEstudiante";

export interface estudent {
  matricula: string,
  nombre: string,
  apellidoPaterno: string
  apellidoMaterno: string
  estatus: string,
  rezago: boolean,
  favorito: boolean,
  datosPersonales: {
    numeroTelefono: string,
    curp: string,
    sexo: string
  }
  datosTutor: {
    nombre: string,
    apellidoPaterno: string
    apellidoMaterno: string
    numeroTelefono: string,
    curp: string,
    sexo: string
  }
  direccionActual: {
    ciudad: string,
    colonia: string,
    codigoPostal: string,
    numeroExterior: string,
    numeroInterior: string
    calle1: string
    calle2: string
  }
  direccionFamiliar: {
    ciudad: string,
    colonia: string,
    codigoPostal: string,
    numeroExterior: string,
    numeroInterior: string
    calle1: string
    calle2: string
  }
}

const estudents: estudent[] = [
  {
    matricula: "211099",
    nombre: "mario alfredo",
    apellidoPaterno: "mendez",
    apellidoMaterno: "diaz",
    estatus: "Inscrito",
    rezago: true,
    favorito: true,
    datosPersonales: {
      numeroTelefono: "2292134429",
      curp: "amsndbaskjdja092",
      sexo: "Hombre"
    },
    datosTutor: {
      nombre: "sergio",
      apellidoPaterno: "mendez",
      apellidoMaterno: "marquez",
      numeroTelefono: "1239130989",
      curp: "alskdakuwnxjkw",
      sexo: "Hombre"
    },
    direccionActual: {
      ciudad: "Ocosingo",
      colonia: "Centro",
      codigoPostal: "29950",
      numeroExterior: "11",
      numeroInterior: "",
      calle1: "primera oriente",
      calle2: "segunda poniente"
    },
    direccionFamiliar: {
      ciudad: "Ocosingo",
      colonia: "Centro",
      codigoPostal: "29950",
      numeroExterior: "11",
      numeroInterior: "",
      calle1: "primera oriente",
      calle2: "segunda poniente"
    }

  }
]

export const EstudianteDashboard = () => {
  const [value, setValue] = useState(0);


  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const renderTabContent = (tabIndex: number) => {
    switch (tabIndex) {
      case 0: 
        return <GroupTableEstudiante estudents={estudents} />;
      case 1: 
        return <TableCalificaciones></TableCalificaciones>;
      case 2: 
        return <CardReporte></CardReporte>;
      case 3: 
        return <Typography>graficas</Typography>;
      default:
        return <Typography>Selecciona una opción</Typography>;
    }
  };

  return (
     

      <Box padding={2}  paddingTop='64px' sx={{height:"100vh", flexGrow: 1, overflow: 'auto' }}>

        <Typography variant="h3">Estudiantes</Typography>

        <Breadcrumbs aria-label="breadcrumb">
          <Typography color="text.primary">Estudiantes</Typography>
        </Breadcrumbs>

        <Tabs value={value} onChange={handleChange} variant="fullWidth">
          <Tab label="Información General" />
          <Tab label="Calificaciones" />
          <Tab label="Reportes" />
          <Tab label="Gráficas" />
        </Tabs>

        {/* Renderiza el contenido del tab seleccionado */}
        {renderTabContent(value)}
      
      </Box>
  );
};