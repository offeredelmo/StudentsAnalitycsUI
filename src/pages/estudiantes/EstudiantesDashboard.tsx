import { Box} from "@mui/material"
import DrawerCustom from "../../components/shared/DraweCustom"
import { useState } from "react"
import AppBarCustom from "../../components/shared/AppBarCustom"
import { Outlet } from "react-router-dom"




export const EstudiantesDashboard = () => {
    const [open, setOpen] = useState(true); // Estado para controlar la apertura del Drawer

    const toggleDrawer = () => {
        setOpen(!open); // Cambia el estado de apertura del Drawer
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <AppBarCustom open={open} toggleDrawer={toggleDrawer}></AppBarCustom>

            <DrawerCustom open={open} toggleDrawer={toggleDrawer}></DrawerCustom>
            <Outlet />
        </Box>
    )
}