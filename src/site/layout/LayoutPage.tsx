import { Outlet } from "react-router";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { SideBar } from "../components/SideBar";

export const LayoutPage = () => {
    return (
        <>
            <Grid
                className="sectLayout"
                sx={{
                    background: "#EFEFEF"
                }}
            >
                <Box sx={{ padding: "15px",  background: "linear-gradient(162.54deg, rgba(213, 230, 247, 0) 75.27%, #D5ADFB 109.35%)" }}>
                    <Grid container spacing={2} sx={{ flexFlow: "row"}}>
                        <Grid sx={{ width: "calc(100% - 400px)"}}>
                            <Outlet />
                        </Grid>
                        <Grid sx={{ width: "400px"}}>
                            <SideBar />
                        </Grid>
                    </Grid>
                </Box>
            </Grid>
        </>
    )
}
