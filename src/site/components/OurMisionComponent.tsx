import { Box, Grid, Typography } from '@mui/material';

import imgOurMision from '../img/imgTitleOurMision.png';
import imgIconMision from '../img/iconMision.png';
import imgIconVision from '../img/iconVision.png';
import imgOurMisionMobile from '../img/imgTitleOurMision.png'

export const OurMisionComponent = () => {
    return (
        <>
           <section className="sectOurMision">
                <Box
                    sx={{
                        background: 'linear-gradient(180deg, #D5E6F7 0%, #FFFFFF 37.5%)'
                        ,padding: '80px 0'
                        ,paddingBottom: '150px'
                        ,borderRadius: '15px'
                        ,marginTop: 4
                        ,marginBottom: 4
                    }}
                >
                    <Grid container spacing={ 3 }>
                        <Grid
                            size={ 12 }
                        >
                            <Box
                                component="img"
                                src={imgOurMision}
                                alt="Nuestra misión"
                                sx={{
                                    width: '100%',
                                    display: 'block',
                                    margin: '0 auto',
                                    maxWidth: '800px'
                                }}
                            />
                            <Typography
                                variant='h2'
                                className="titleOurMision"
                                sx={{                                    
                                    fontWeight: 600
                                    ,fontSize: '52px'
                                    ,lineHeight: '62px'
                                    ,letterSpacing: '0%'
                                    ,textAlign: 'center'
                                    ,verticalAlign: 'middle'
                                    ,color: '#133072'
                                    ,marginBottom: 5
                                }}
                            >
                                Nuestra misión en el mundo y lo que soñamos <br /> para tus hijos
                            </Typography>

                            <Box
                                component="iframe"
                                src="https://www.youtube.com/embed/0IlUVfWThdo"
                                title="YouTube video player"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                sx={{
                                    display: "none"                                    
                                }}
                            />
                        </Grid>

                        <Grid size={{ xl: 6, sm: 12, md: 6 }}>
                            <Box
                                sx={{                                 
                                    border: '3px solid #133072'
                                    ,borderRadius: '20px'
                                    ,paddingTop: '25px'
                                    ,paddingRight: '50px'
                                    ,paddingBottom: '25px'
                                    ,paddingLeft: '30px'
                                    ,borderWidth: '3px'
                                    ,marginLeft: '100px'
                                }}
                            >
                                <Grid size={ 12 }>
                                    <Box
                                        component="img"
                                        src={ imgIconMision }
                                        alt="Nuestra misión"
                                        sx={{
                                            width: '100%',
                                            display: 'block',
                                            maxWidth: 70,
                                            height: '65px'
                                        }}
                                    />
                                    <Typography
                                        variant='h3'
                                        className="subtitleMision"
                                    >
                                        Nuestra misión
                                    </Typography>

                                    <Typography
                                        variant='body1'
                                        sx={{                                    
                                            fontWeight: 400
                                            ,fontSize: '22px'
                                            ,letterSpacing: '0%'
                                            ,color: '#133072'
                                            ,minHeight: '150px'
                                        }}
                                    >
                                        Educar, empoderar y conectar a nuestros estudiantes mediante experiencias de aprendizaje remoto que trasciendan las fronteras geográficas e idiomáticas.
                                    </Typography>
                                </Grid>
                            </Box>
                        </Grid>

                        <Grid size={{ xl: 6, sm: 12, md: 6 }}>
                            <Box
                                sx={{
                                    border: '3px solid #133072'
                                    ,borderRadius: '20px'
                                    ,paddingTop: '25px'
                                    ,paddingRight: '50px'
                                    ,paddingBottom: '25px'
                                    ,paddingLeft: '30px'
                                    ,borderWidth: '3px'
                                    ,marginRight: '100px'
                                    ,display: 'flex'
                                    ,flexDirection: 'column',
                                    justifyContent: 'space-between'
                                }}
                            >
                                <Grid size={ 12 }>
                                    <Box
                                        component="img"
                                        src={ imgIconVision }
                                        alt="Nuestra misión"
                                        sx={{
                                            width: '100%',
                                            display: 'block',
                                            maxWidth: '70px',
                                            height: '65px'
                                        }}
                                    />
                                    <Typography
                                        variant='h3'
                                        className="subtitleMision"
                                    >
                                        Nuestra misión
                                    </Typography>

                                    <Typography
                                        variant='body1'
                                        sx={{                                    
                                            fontWeight: 400
                                            ,fontSize: '22px'
                                            ,letterSpacing: '0%'
                                            ,color: '#133072'
                                            ,minHeight: '150px'
                                        }}
                                    >
                                        Visualizamos un mundo donde miles de jóvenes y niños usen sus habilidades para transformar sus comunidades y regiones por medio del emprendimiento, la tecnología y la innovación.
                                    </Typography>
                                </Grid>
                            </Box>
                        </Grid>

                    </Grid>

                    <Box
                        component="img"
                        src={ imgOurMisionMobile }
                        alt="Nuestra misión"
                        className="imgMisionMobile"
                        sx={{
                            width: '100%',
                            display: 'none',
                            margin: '0 auto',
                            maxWidth: 800
                        }}
                    />


                </Box>
            </section>
        </>
    )
}
