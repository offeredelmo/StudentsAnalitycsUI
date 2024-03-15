import React, { useState } from 'react';
import { DataGrid, GridColDef, GridCellParams } from '@mui/x-data-grid';
import InfoIcon from '@mui/icons-material/Info';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import ModalComponent from './modal';
import { Box } from '@mui/material';

const columns: GridColDef[] = [
  { field: 'generacion', headerName: 'Generación', width: 150 },
  { field: 'fechaIngreso', headerName: 'Fecha de Ingreso', width: 200 },
  { field: 'fechaEgreso', headerName: 'Fecha de Egreso', width: 200 },
  { field: 'estudianteRezago', headerName: 'Estudiante con Rezago', width: 200 },
  {
    field: 'informacion',
    headerName: 'Información',
    width: 150,
    renderCell: (params: GridCellParams) => (
      <InfoIcon style={{ cursor: 'pointer' }} />
    ),
  },
  {
    field: 'favorito',
    headerName: 'Favorito',
    width: 150,
    renderCell: (params: GridCellParams) => (
      params.value === 'Sí' ? <StarIcon color="primary" /> : <StarBorderIcon color="disabled" />
    ),
  },
];

const rows = [
  { id: 1, generacion: '211', fechaIngreso: '01/01/2023', fechaEgreso: '01/01/2024', estudianteRezago: '2', informacion: '', favorito: 'Sí' },
];

export const TableComponent = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <div>
      <Box sx={{ padding: '15px' }}>
        <Typography variant="h5" style={{ color: '#212121'}}>Generaciones</Typography>
        <Typography variant="subtitle1" style={{ color: '#2196F3', marginBottom: '10px'}}> generaciones /</Typography>
      </Box>
     <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
        <TextField variant="outlined" label="Search" size="small" />
        <div>
          <Button variant="outlined" onClick={handleOpenModal}>Reporte</Button> {/* Abre el modal al hacer clic en el botón */}
          <Button variant="outlined" style={{ marginLeft: '10px', backgroundColor: '#2196f3', color: 'white' }}>
            Action
          </Button>          </div>
      </div>
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5, 10, 20]}
          checkboxSelection
        />
      </div>
      <ModalComponent open={openModal} handleClose={handleCloseModal} /> {/* Renderiza el modal */}
    </div>
  );
};
