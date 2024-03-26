import { Box } from "@mui/material"
import AppBarCustom from "../../components/shared/AppBarCustom"
import DrawerCustom from "../../components/shared/DraweCustom"
import { useState } from "react";

export const App2 = ({ TableComponent }) => { // Recibe TableComponent como una prop

  const [open, setOpen] = useState(true); // Estado para controlar la apertura del Drawer

  const toggleDrawer = () => {
    setOpen(!open); // Cambia el estado de apertura del Drawer
  };
  
  return (
    <Box sx={{ display: 'flex' }}>
      
      <Box paddingTop={8} sx={{ flexGrow: 1, overflow: 'auto' }}>
        <TableComponent></TableComponent>
      </Box>
    </Box>
  )
}
