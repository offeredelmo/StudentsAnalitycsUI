import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Breadcrumbs} from "@mui/material"

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
          <Tab label="Graficas" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        INFORMACION GENERAL
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        HORARIO
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        TUTORADOS
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        GRAFICAS
      </CustomTabPanel>
    </Box>
  );
}
