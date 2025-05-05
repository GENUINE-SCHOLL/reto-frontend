import { Box, Button, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';

import imgMap from '../img/map.png';

// 🎨 Estilos de botones
const estudianteBtn = {
    m: 1,
    border: '3px solid #FF4E07',
    color: '#FF4E07',
    fontSize: '20px',
    fontWeight: '700',
    borderRadius: '10px',
};

const staffBtn = {
    m: 1,
    border: '3px solid #D5ADFB',
    color: '#D5ADFB',
    fontSize: '20px',
    fontWeight: '700',
    borderRadius: '10px',
};

const profesorBtn = {
    m: 1,
    border: '3px solid #602680',
    color: '#602680',
    fontSize: '20px',
    fontWeight: '700',
    borderRadius: '10px',
};

export const WeAreTheWorldComponent = () => {
    return (
        <>
            <section className="sectOurMision">
                <Box
                    sx={{
                        background: "#ffffff",
                        p: '30px 100px',
                        borderRadius: '15px',
                        mt: 4,
                    }}
                >
                    <Grid container spacing={4}>

                        <Grid size={{ xs: 12, md: 8, xl: 9 }} order={{ xs: 0, md: 2 }} textAlign="center">
                            <Typography
                                variant="h2"
                                sx={{
                                    fontWeight: 600,
                                    fontSize: { xs: '40px', md: '50px' },
                                    color: '#133072',
                                    display: { xs: 'block', md: 'none' },
                                    marginBottom: 2,
                                }}
                            >
                                Somos <br /> del mundo
                            </Typography>

                            {/* Botones */}
                            <Box mb={4} className="btnGroup">
                                <Button variant="outlined" sx={ estudianteBtn }>+400 Estudiantes</Button>
                                <Button variant="outlined" sx={ staffBtn }>28 Staff</Button>
                                <Button variant="outlined" sx={ profesorBtn }>44 Profesores</Button>
                            </Box>

                            {/* Imagen del mapa */}
                            <Box
                                component="img"
                                src={ imgMap }
                                alt="Mapa mundial"
                                sx={{ width: '100%', maxWidth: '100%' }}
                            />
                        </Grid>

                        <Grid
                            size={{ xs: 12, md: 4, xl: 3 }}
                            order={{ xs: 1, md: 1 }}
                            display="flex"
                            flexDirection="column"
                        >
                            <Typography
                                variant="h2"
                                sx={{
                                    fontWeight: 600,
                                    fontSize: '35px',
                                    color: '#133072',
                                    display: { xs: 'none', md: 'block' },
                                }}
                            >
                                Somos <br /> del mundo
                            </Typography>

                            <Box sx={{ background: { xs: '#F90052', sm: '#F90052', md: '#FF4E07'}, borderRadius: 1 }}>
                                <Typography sx={{ color: '#fff', p: 3, fontSize: '15px', lineHeight: '115%' }}>
                                    Colombia, Ecuador, Perú, México, Panamá, Costa Rica, Chile, Argentina, Estados Unidos, Emiratos Árabes, Brasil, República Dominicana, Irlanda, Canadá, España, Portugal, China, Italia.
                                </Typography>
                            </Box>

                            <Box sx={{ background: { xs: '#D5ADFB', sm: '#D5ADFB', md: '#D5ADFB'}, borderRadius: 1 }}>
                                <Typography sx={{ color: '#133072', p: 3, fontSize: '15px', lineHeight: '115%' }}>
                                    Estados Unidos, Colombia, Perú, Brasil, Chile, México, Venezuela.
                                </Typography>
                            </Box>

                            <Box sx={{ background: { xs: '#133072', sm: '#133072', md: '#602680'}, borderRadius: 1 }}>
                                <Typography sx={{ color: '#fff', p: 3, fontSize: '15px', lineHeight: '115%' }}>
                                    Colombia, Sudáfrica, Filipinas, Chile, México, Singapur.
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </section>
        </>
    )
}
