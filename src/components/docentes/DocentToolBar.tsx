import { Autocomplete, Button, MenuItem, Stack, TextField, IconButton } from "@mui/material"
import FilterAltIcon from '@mui/icons-material/FilterAlt';

const Docentes = [
    { matricula: "12334", nombre: "Carlos Alberto Diaz", Rol: "PTC", rezago: true, favorito: true },
    {  },
]
const currencies = [
    {
        value: 'Rol',
        label: 'Rol',
    },
    {
      value: 'PTC',
      label: 'PTC',
    },
    {
      value: 'Suplente',
      label: 'Suplente',
    },
    {
      value: 'Medio Tiempo',
      label: 'Medio Tiempo',
    },
  ];

export const ToolBarDocentes = () => {
    return (
        <Stack direction="row" spacing={2} justifyContent="space-between"  sx={{ marginTop: 2, padding: 0, flexWrap: 'nowrap' }}>

            {/* Contenedor de Autocompletes */}
            <Stack direction="row" spacing={4} alignContent="center" justifyContent="center" >
                <Autocomplete
                    id="combo-box-demo-1"
                    options={Docentes} // Asegúrate de que 'estudents' esté definido en tu componente
                    getOptionLabel={(option) => option.matricula + " - " + option.nombre}
                    sx={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label="Estudiante, Matricula" />}
                />
                <TextField
                    id="outlined-select-currency"
                    select
                    label="Rol"
                    defaultValue="Rol"
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

            {/* Contenedor de Botones */}
            <Stack direction="row" spacing={2} alignItems="center" justifyContent="center">
            <Button color="inherit" sx={{ mr: 1 }}>
                        Report
                    </Button>
                <Button variant="contained" size="medium">Action</Button>
            </Stack>

        </Stack>
    )
}