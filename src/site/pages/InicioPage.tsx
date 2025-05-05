import Grid from '@mui/material/Grid';
import { SliderComponent } from '../components/SliderComponent';
import { OurMisionComponent } from '../components/OurMisionComponent';
import { RegistroLegalComponent } from '../components/RegistroLegalComponent';
import { WeAreTheWorldComponent } from '../components/WeAreTheWorldComponent';

import '../css/style.css';

export const InicioPage = () => {
    return (
        <>
            <Grid container>
                <Grid size={ 12 } id="inicio">
                   <SliderComponent />
                </Grid>

                <Grid size={ 12 } id="quienes-somos">
                    <OurMisionComponent />
                </Grid>

                <Grid size={ 12 } id="estadounidenses">
                    <RegistroLegalComponent />
                </Grid>

                <Grid size={ 12 } id="unete" >
                    <WeAreTheWorldComponent />
                </Grid>
            </Grid>
        </>
    )
}
