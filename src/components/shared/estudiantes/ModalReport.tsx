import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Button, TextField } from '@mui/material';
import {Dropzone} from '../../DropZoneModal';
import { useCallback, useState } from 'react';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export const BasicModal = ({ open, handleClose, matriculas }) => {


   //logica para obtener la data de los archivos subidos
   const [files, setFiles] = useState([]);


   
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
              Reporte
          </Typography>
          <Box marginTop="3" sx={{ display: "flex", flexWrap: "wrap", justifyItems: "center", alignItems: "center"}}>


            <br />

            <TextField
              required
              id="outlined-required"
              label="Titulo"
              defaultValue=" "
              sx={{width:"100%", marginTop:3}}
            />
            <br />
            <TextField
              id="outlined-multiline-static"
              label="Descripccion"
              multiline
              rows={4}
              defaultValue=" "
              sx={{width:"100%", marginTop:3}}

            />
            <br />
            <Dropzone setFiles={setFiles} files={files}></Dropzone>
            <Button variant="outlined" sx={{marginRight:3}}>generar</Button>
            <Button variant="outlined" color='error'>Cancelar</Button>

          </Box>
        </Box>
      </Modal>
    </div>
  );
}