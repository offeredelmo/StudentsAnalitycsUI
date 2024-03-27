import { Box } from "@mui/material"
import { useState } from "react";

export const App2 = ({ TableComponent }) => { // Recibe TableComponent como una prop

  
  
  return (
    <Box sx={{ display: 'flex' }}>
      
      <Box paddingTop={8} sx={{ flexGrow: 1, overflow: 'auto' }}>
        <TableComponent></TableComponent>
      </Box>
    </Box>
  )
}
