import React, { useState } from 'react';
import { Modal, Box, Typography, Paper, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Reporte from './reporte';
import Imformacion from './informacion';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Tab from './tab';

const ModalComponent = ({ open, handleClose }) => {
    const theme = useTheme();

    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [selectedTab, setSelectedTab] = useState('info'); // Estado para manejar la pestaña seleccionada

    const handleTabClick = (tab) => {
        setSelectedTab(tab);
    };

    // Función para renderizar el contenido seleccionado
    const renderContent = () => {
        switch (selectedTab) {
            case 'info':
                return <Imformacion/>; 
            case 'reports':
                return <Reporte/>; 
            case 'tab':
                return <Tab/> 
            default:
                return null;
        }
    };

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-title"
            aria-describedby="modal-description"
        >
            <Box sx={{ width: '100%', height: '100%' }}>
                <Paper sx={{
                    width: isMobile ? '100%' : '50%',
                    margin: 'auto',
                    marginLeft: isMobile ? '0%' : '50%',
                    maxHeight: '100vh',
                    overflowY: 'auto',
                }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-around', marginBottom: '20px' }}>
                        <Box
                            sx={{
                                display: 'inline-block',
                                marginRight: '20px',
                                '&:hover': {
                                    borderBottom: '2px solid #7EC8E3',
                                },
                                ...(selectedTab === 'info' && {
                                    borderBottom: '2px solid #7EC8E3',
                                }),
                            }}
                            onClick={() => handleTabClick('info')}
                        >
                            <Typography variant="subtitle1">INFORMACIÓN GENERAL</Typography>
                        </Box>
                        <Box
                            sx={{
                                display: 'inline-block',
                                marginRight: '20px',
                                '&:hover': {
                                    borderBottom: '2px solid #7EC8E3',
                                },
                                ...(selectedTab === 'reports' && {
                                    borderBottom: '2px solid #7EC8E3',
                                }),
                            }}
                            onClick={() => handleTabClick('reports')}
                        >
                            <Typography variant="subtitle1">REPORTES</Typography>
                        </Box>
                        <Box
                            sx={{
                                display: 'inline-block',
                                '&:hover': {
                                    borderBottom: '2px solid #7EC8E3',
                                },
                                ...(selectedTab === 'tab' && {
                                    borderBottom: '2px solid #7EC8E3',
                                }),
                            }}
                            onClick={() => handleTabClick('tab')}
                        >
                            <Typography variant="subtitle1">TAB</Typography>
                        </Box>
                    </Box>
                    <IconButton onClick={handleClose} sx={{ position: 'absolute', top: 0, right: 0 }}>
                        <CloseIcon />
                    </IconButton>
                
                    {renderContent()}
                    
                </Paper>
            </Box>
        </Modal>
    );
};

export default ModalComponent;