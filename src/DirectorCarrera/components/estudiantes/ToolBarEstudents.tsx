import { Autocomplete, Button, MenuItem, Stack, TextField, IconButton } from "@mui/material"
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { estudent } from "../../pages/estudiantes/EstudiantesMain";

const currencies = [
    {
        value: 'Todos',
        label: 'Todos',
    },
    {
      value: 'Inscrito',
      label: 'Inscrito',
    },
    {
      value: 'Baja definitiva',
      label: 'Baja definitiva',
    },
    {
      value: 'Baja academica',
      label: 'Baja academica',
    },
    {
      value: 'Titulado',
      label: 'Titulado',
    },
  ];

export const ToolBarEstudents = ({ onGenerateReport, estudents}: {onGenerateReport:any, estudents:estudent[]}) => {
    return (
        <Stack direction="row" spacing={2} justifyContent="space-between"  sx={{ marginTop: '2vh', padding: 0, flexWrap: 'nowrap' }}>

            
            <Stack direction="row" spacing={3} alignContent="center" justifyContent="center" >
                <Autocomplete
                    id="combo-box-demo-1"
                    options={estudents} // Asegúrate de que 'estudents' esté definido en tu componente
                    getOptionLabel={(option) => option.matricula + " - " + option.nombre}
                    sx={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label="Estudiante, Matricula" />}
                />
                
                <TextField
                    id="outlined-select-currency"
                    select
                    label="Estatus"
                    defaultValue="Todos"
                >
                    {currencies.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
                <IconButton aria-label="" onClick={() => {}}>
                    <FilterAltIcon></FilterAltIcon>
                </IconButton>
            </Stack>

            
            <Stack direction="row" spacing={2} alignItems="center" justifyContent="center">
                <Button variant="contained" size="medium"  onClick={onGenerateReport}>Agregar Reporte</Button>
                <Button variant="contained" size="medium">Botón 2</Button>
            </Stack>

        </Stack>
    )
}