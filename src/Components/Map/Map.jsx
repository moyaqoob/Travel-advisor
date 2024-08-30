import React from 'react';
import GoogleMapReact from 'google-map-react';
import { makeStyles, Paper, Typography, useMediaQuery } from '@mui/material';
// import LocationOnOutlinedIcon from '@mui/material/icons';
// import useStyles from './styles';
// import mapStyles from './mapStyles';

function Map(){
    const classes = makeStyles();
    const isMobile = useMediaQuery('(min-width:600px)');

    const coordinates = { lat: 0, lng: 0 };
    return(
        <div className={classes.mapContainer}>

        
            <GoogleMapReact
              bootstrapURLKeys={{key:' '}}
              defaultCenter={coordinates}
              center={coordinates}
              defaultZoom={[50,50,50,50]}
              options={''}
              onChange={''}
              onChildClick={''}
            >

            </GoogleMapReact>
        </div>
        
    )
}

export default Map;