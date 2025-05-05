import { Box, Button, Grid, Typography } from "@mui/material";

import PlayCircleIcon from '@mui/icons-material/PlayCircle';

import imgRegistroLegal from '../img/imgRegistroLegal.png';
import imgTeam from '../img/team.jpg';

export const RegistroLegalComponent = () => {
    return (
        <>
            <section className="sectOurMision">
                <Box>
                    <Grid
                        container
                    >
                        <Grid
                            size={ { xs: 12,sm: 12, md: 6, xl: 6 } }
                            sx={{
                                borderTopLeftRadius: '15px'
                                ,borderBottomLeftRadius: '15px'
                                ,background: "#ffffff"
                            }}
                        >
                            <Box
                                sx={{
                                    px: { xs: 2, sm: 4, md: 8, lg: 10 }
                                    ,py: 4
                                    ,borderTopLeftRadius: '15px'
                                    ,borderBottomLeftRadius: '15px'
                                    ,background: "#ffffff"
                                }}
                            >
                                <Typography
                                    variant='h2'
                                    sx={{                                    
                                        fontWeight: 600
                                        ,fontSize: '45px'
                                        ,color: '#133072'
                                        ,mb: 3
                                    }}
                                >
                                   ¿Quiénes Somos?
                                </Typography>
                                
                                <Typography
                                    variant='body1'
                                    sx={{                                    
                                        fontWeight: 400
                                        ,fontSize: '22px'
                                        ,letterSpacing: '0%'
                                        ,color: '#133072'
                                        ,mb: 3
                                    }}
                                >
                                    Nuestro colegio digital privado está constituido y registrado en Estados Unidos ante el <b>Florida Department of Education con el código 8822.</b> 
                                </Typography>

                                <Button
                                    variant="text"
                                    sx={{
                                        fontWeight: 600
                                        ,fontSize: '20px'
                                        ,lineHeight: '105%'
                                        ,letterSpacing: '0%'
                                        ,color: '#133072'
                                        ,textTransform: 'none'
                                        ,textAlign: 'left'
                                        ,pl: 0
                                    }}
                                >
                                    Consulta el registro legal aquí
                                </Button>
                                <Button
                                    variant="contained"
                                    sx={{
                                        ml: 2
                                        ,background: '#133072'
                                    }}
                                >
                                    Registro Legal
                                </Button>
                                
                                <Button
                                    variant="contained"
                                    sx={{
                                        background: '#D5ADFB'
                                        ,width: '100%'
                                        ,maxWidth: '400px'
                                        ,display: { xs: 'block', sm: 'block', md: 'none'}
                                        ,m: '0 auto'
                                        ,mt: 3
                                        ,color: '#133072'
                                        ,fontWeight: 600
                                        ,fontSize: '18px'
                                        ,textTransform: 'none'
                                    }}
                                >
                                    Mira como encontrar el <br />
                                    registro legal de <b>Genuine</b>
                                    <PlayCircleIcon sx={{ display: 'block', m: '0 auto', fontSize: '60px', color: "#ffffff" }}/>
                                </Button>
                            </Box>
                        </Grid>

                        <Grid
                            size={ { xs: 12,sm: 12, md: 6, xl: 6 } }
                        >
                            <Box
                                component="img"
                                src={ imgRegistroLegal }
                                alt="Nuestra misión"
                                sx={{
                                    width: '100%',
                                    display: { md: 'block', sm: 'none', xs: 'none'},
                                    margin: '0 auto',
                                    maxWidth: 800,
                                    height: '100%',
                                    objectFit: 'cover',
                                    borderTopRightRadius: '15px',
                                    borderBottomRightRadius: '15px'
                                }}
                            />
                            
                            <Box
                                component="img"
                                src={ imgTeam }
                                alt="Nuestra misión"
                                sx={{
                                    width: '100%',
                                    display: { md: 'none', sm: 'block' },
                                    margin: '0 auto',
                                    maxWidth: { md: 800, sm: '100%' },
                                    height: '100%',
                                    objectFit: 'cover'
                                }}
                            />

                        </Grid>
                        
                    </Grid>
                </Box>
            </section>
        </>
    )
}
