import { Box, Breadcrumbs, Collapse, IconButton, Tab, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Tabs, Typography } from "@mui/material"
import AppBarCustom from "./components/shared/AppBarCustom"
import DrawerCustom from "./components/shared/DraweCustom"

import { useState } from "react";
import { TableDatosPersonales } from "./components/shared/estudiantes/TableDatosPersonales";

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
      numeroTelefono: "0987654321",
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


export const App = () => {

  const [open, setOpen] = useState(true); // Estado para controlar la apertura del Drawer

  const toggleDrawer = () => {
    setOpen(!open); // Cambia el estado de apertura del Drawer
  };


  // funcionamiento del despliegue de la fila
  const [openRow, setOpenRow] = useState(false); // Estado para controlar la apertura del Drawer
  const toggleRow = () => {
    setOpenRow(!openRow); // Cambia el estado de apertura del Drawer
  };

  // funcion para cambiar el tab
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBarCustom open={open} toggleDrawer={toggleDrawer}></AppBarCustom>

      <DrawerCustom open={open} toggleDrawer={toggleDrawer}></DrawerCustom>

      <Box padding={2} paddingTop={8} sx={{ flexGrow: 1, overflow: 'auto' }}>
        <Typography variant="h3">Estudiantes </Typography>

        <Breadcrumbs aria-label="breadcrumb">
          <Typography color="text.primary">Estudiantes</Typography>
          <Typography color="text.primary"></Typography>
        </Breadcrumbs>

        <Tabs  value={value} onChange={handleChange}>
          <Tab label="Item One" />
          <Tab label="Item Two" />
          <Tab label="Item Three" />
        </Tabs>

          <TableDatosPersonales estudents={estudents} toggleRow={toggleRow} openRow={openRow}></TableDatosPersonales>
      </Box>
    </Box>
  )
}