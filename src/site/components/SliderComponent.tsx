import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';

import imgSlider from '../img/slider.png';
import imgSliderMobile from '../img/slider-mobile.png';
import imgLogoMainSlider from '../img/logomain.png';

export const SliderComponent = () => {
    return (
        <>
            <section className="sectSlider">
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        <Grid size={12} sx={{ position: 'relative'}}>

                            <Box
                                component="img"
                                src={ imgSlider }
                                alt="Slider"
                                sx={{
                                    display: { xl: 'block', sm: 'none', xs: 'none' },
                                    width: '100%'
                                }}
                            />

                            <Box
                                component="img"
                                src={ imgSliderMobile }
                                alt="slider Mobile"
                                sx={{
                                    display: { sm: 'block', xl: 'none' },
                                    width: '100%'
                                }}
                            />

                            <Box
                                sx={{
                                    textAlign: "center"
                                    ,position: "absolute"
                                    ,top: "50%"
                                    ,transform: "translate(0, -50%)"
                                    ,left: "10px"
                                    ,width: "600px"                                    
                                }}
                            >
                                <Grid
                                    sx={{
                                        background: 'linear-gradient(180deg, #D5E6F7 0%, #D5ADFB 100%)'
                                        ,padding: "30px 25px"
                                        ,borderTopLeftRadius: "15px"
                                        ,borderTopRightRadius: "15px"
                                    }}
                                >
                                    <Typography
                                        variant="h2"
                                        className="titleSlider"
                                    >
                                        Estás a punto de iniciar un viaje hacia el universo <br />de la <span>educación digital</span>
                                    </Typography>
                                </Grid>

                                <Grid
                                    sx={{
                                        background: '#FFFFFF'
                                        ,padding: "40px 15px"
                                        ,borderBottomLeftRadius: "15px"
                                        ,borderBottomRightRadius: "15px"
                                    }}
                                    className="imgLogoSlider"
                                >
                                    <img src={ imgLogoMainSlider } alt="" />                                    
                                </Grid>
                            </Box>
                            
                            <Typography
                                variant="h3"
                                className="subtitleSlider"
                            >
                                studyatgenuine.com
                            </Typography>
                            
                        </Grid>
                    </Grid>
                </Box>
            </section>
        </>
    )
}
