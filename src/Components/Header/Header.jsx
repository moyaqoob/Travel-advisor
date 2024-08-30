import React from 'react';

// import {PhotoCamera} from '@mui/material/Icon';
import { AppBar, Toolbar, Typography, InputBase, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
//making a search bar component
function Header(){
    return(
        <>
            <AppBar position='static'>
                <Toolbar>
                    <Typography variant='h5'>Travel Advisor</Typography>
                </Toolbar>
                
                <SearchIcon>
                    <SearchIconWrapper>
                    <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                    placeholder="Search…"
                    inputProps={{ 'aria-label': 'search' }}
                    />
                </SearchIcon>


            </AppBar>
                


        </>
    )
}

export default Header;