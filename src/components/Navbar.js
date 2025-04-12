import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Navbar = () => {
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          My Website
        </Typography>
        <Button color="inherit" onClick={() => handleScroll('home')}>Home</Button>
        <Button color="inherit" onClick={() => handleScroll('skills')}>Skills</Button>
        <Button color="inherit" onClick={() => handleScroll('experience')}>Experience</Button>
        {/* <Button color="inherit" onClick={() => handleScroll('projects')}>Projects</Button> */}  {/* Commented out Projects */}
        <Button color="inherit" onClick={() => handleScroll('contact')}>Contact</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;