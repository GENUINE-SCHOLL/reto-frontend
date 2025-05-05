import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import CloseIcon from '@mui/icons-material/Close';
import imgLogo from '../img/logo.png';
import { ListItemText, MenuItem, MenuList } from '@mui/material';

import { Link as ScrollLink } from 'react-scroll';

export const SideBar = () => {
    return (
        <>
            <div className="sectSideBar">
                <Box
                    sx={{
                        position: "fixed",
                        background: "#ffffff",
                        padding: "30px 25px",
                        zIndex: 1300,
                        boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
                        borderRadius: "15px"
                    }}
                >
                    <Grid container spacing={2}>
                        <Grid size={6}>
                            <CloseIcon sx={{ fontSize: "30px" }} />
                        </Grid>
                        <Grid
                            size={6}
                            sx={{
                                textAlign: "right"
                            }}
                        >
                            <img src={imgLogo} alt="" />
                        </Grid>



                        <Grid size={12}>
                            <MenuList
                                sx={{
                                    '& .MuiListItemText-root': {
                                        width: "100%"
                                        ,color: "#133072"
                                    },
                                    '& .MuiTypography-root': {
                                        fontWeight: "600"
                                    }
                                }}
                            >

                                <ScrollLink to="inicio" smooth={true} duration={500} offset={-80}>
                                    <MenuItem disableRipple>
                                        <ListItemText>Inicio</ListItemText>
                                    </MenuItem>
                                </ScrollLink>


                                <ScrollLink to="quienes-somos" smooth={true} duration={500} offset={-80}>
                                    <MenuItem disableRipple>
                                        <ListItemText>¿Quiénes somos?</ListItemText>
                                    </MenuItem>
                                </ScrollLink>

                                <ScrollLink to="estadounidenses" smooth={true} duration={500} offset={-80}>
                                    <MenuItem disableRipple>
                                        <ListItemText>Somos Estadounidenses</ListItemText>
                                    </MenuItem>
                                </ScrollLink>

                                <ScrollLink to="unete" smooth={true} duration={500} offset={-80}>
                                    <MenuItem disableRipple>
                                        <ListItemText>Únete a Genuine</ListItemText>
                                    </MenuItem>
                                </ScrollLink>
                            </MenuList>
                        </Grid>

                    </Grid>
                </Box>
            </div>
        </>
    )
}
