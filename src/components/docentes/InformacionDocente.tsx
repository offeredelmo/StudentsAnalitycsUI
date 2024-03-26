import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Breadcrumbs} from "@mui/material"
import{TableEstudents} from "../shared/estudiantes/TableEstudents" 
import { BasicModal } from '../shared/estudiantes/ModalReport';
import { useState } from 'react';
import { estudents } from '../../pages/estudiantes/EstudiantesMain';
import { ToolBarEstudents } from '../shared/estudiantes/ToolBarEstudents';
import WeeklySchedule from './HorarioDocente';
import { DocentReporte } from './ReporteDocente';


interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function InformacionDocente () {
  const [value, setValue] = React.useState(0);

  const [selectedMatriculas, setSelectedMatriculas] = useState<string[]>([]);

  const handleSelectMatricula = (matricula: string, isSelected: boolean) => {
      if (isSelected) {
          setSelectedMatriculas(prev => [...prev, matricula]);
      } else {
          setSelectedMatriculas(prev => prev.filter(m => m !== matricula));
      }
  };

  const handleGenerateReport = () => {
      console.log(selectedMatriculas);
      if(selectedMatriculas.length != 0){
          handleOpen() //abrir modal
      }
      
      //hacer el post a la api
      setSelectedMatriculas([])
  };

  // logica pal modal
  const [open, setOpen]:any = useState<boolean>(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }} marginTop={8}>
      <Typography variant="h3">Docentes </Typography>
            <Breadcrumbs aria-label="breadcrumb">
                <Typography variant="overline" color="text.primary">Docentes</Typography>
                <Typography color="text.primary"></Typography>
            </Breadcrumbs>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" variant= "fullWidth">
          <Tab label="Informacion General" {...a11yProps(0)} />
          <Tab label="Horario" {...a11yProps(1)} />
          <Tab label="Tutorados" {...a11yProps(2)} />
          <Tab label="Reportes" {...a11yProps(3)} />
          <Tab label="Graficas" {...a11yProps(4)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        INFORMACION GENERAL
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
      <WeeklySchedule></WeeklySchedule>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
      <ToolBarEstudents onGenerateReport={handleGenerateReport} estudents={estudents} ></ToolBarEstudents>
      <TableEstudents onMatriculaSelect={handleSelectMatricula}  selectedMatriculas={selectedMatriculas} estudents={estudents}></TableEstudents>
                <BasicModal open={open} handleClose={handleClose} matriculas={selectedMatriculas}></BasicModal>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
      <DocentReporte></DocentReporte>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
        GRAFICAS
      </CustomTabPanel>
    </Box>
  );
}
