import React from "react";
import { Typography, AppBar, Button, Grid, Card, CardActions,CardContent, CardMedia, CssBaseline, Toolbar, Container } from "@mui/material"
import { Icon } from '@mui/material/Icon';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import { styled, createTheme, ThemeProvider } from '@mui/system';
import Footer from './Components/Footer'
import MainList from "./Components/MainList";

const App = () =>
{
    return (
        <div>
            <CssBaseline />
            <AppBar position="relative">
                <Toolbar>
                    <AddAPhotoIcon sx={{ m:2 }}></AddAPhotoIcon>
                    <Typography variant="h6">Photo Album</Typography>
                </Toolbar>
            </AppBar>
            <main>
                <div>
                    <Container maxWidth="sm" sx={{my:6}}>
                        <Typography variant="h3" color="textPrimary" align="center" gutterBottom>
                            Photo Album
                        </Typography>
                        <Typography variant="h5" color="textSecondary" align="center" paragraph>
                            Hello everyone, this is photo album and I am trying to make this paragraph as long as possible and to see how does it looks on the screen. 
                        </Typography>
                        <div>
                            <Grid container spacing={2} justifyContent="center">
                                <Grid item>
                                    <Button variant="contained" color="primary">See My Photos</Button>
                                </Grid>
                                <Grid item>
                                    <Button variant="outlined" color="secondary">Secondary Action</Button>
                                </Grid>
                            </Grid>
                        </div>
                    </Container>
                </div>
            </main>
            <MainList></MainList>
            <Footer></Footer>
        </div>
    );
}

export default App;