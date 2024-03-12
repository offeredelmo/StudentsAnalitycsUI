import { Box } from "@mui/material"
import AppBarCustom from "./components/shared/AppBarCustom"
import DrawerCustom from "./components/shared/DraweCustom"
import { useState } from "react";


export const App = () => {

  const [open, setOpen] = useState(true); // Estado para controlar la apertura del Drawer

  const toggleDrawer = () => {
    setOpen(!open); // Cambia el estado de apertura del Drawer
  };
  
  return (
    <Box sx ={{display:'flex'}}>
      <AppBarCustom open={open} toggleDrawer={toggleDrawer}></AppBarCustom>

      <DrawerCustom open={open} toggleDrawer={toggleDrawer}></DrawerCustom>

      <Box paddingTop={8} sx={{ flexGrow: 1, overflow: 'auto' }}>
           dsadsa
      </Box>
    </Box>
  )
}