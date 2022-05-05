import React from "react";
import { Container, Typography } from "@mui/material";

const Footer = () =>
{
    return (
      <div>
        <Container sx={{ width: "75%", mx: "auto", my: 10 }}>
          <Typography variant="h5" align="center">Footer</Typography>
          <Typography variant="body1" align="center" sx={{fontFamily:"Robotto", my:2}}>Something here to give the footer a purpose! <br />Copyright © Your Website 2022.</Typography>
        </Container>
      </div>
    );
}

export default Footer;