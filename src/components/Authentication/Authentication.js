  
import React from 'react';
// import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
// import {
//     AuthSec,
//     AuthRow,
//     AuthCol,
//     InvestorWrapper,
//     FarmerWrapper
// } from './Authentication.elements.js';
const useStyles = makeStyles((theme) => ({
    InvestorWrapper: {
        position: 'relative',
        width: 500,
        height: 450,
        display: 'flex',
        backgroundImage: 'url(https://ik.imagekit.io/ugyodiq15/stacks_of_coins_progressing_taller_in_soil_with_plants_growing_out_the_top_kAKXoIIZq.jpg)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    },
    FarmerWrapper: {
        position: 'relative',
        display: 'flex',
        width: 500,
        height: 450,
        backgroundImage: 'url(https://ik.imagekit.io/ugyodiq15/farmer_DAqv07saU.jpg)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    },
    mainFeaturedPostContent: {
        position: 'relative',
        padding: theme.spacing(3),
        [theme.breakpoints.up('md')]: {
          padding: theme.spacing(6),
          paddingRight: 0,
        },
      },
}));

function Authentication() {
    const classes = useStyles();
    return (
        <div>
            {/* <AuthSec>
                <AuthRow>
                    <AuthCol>
                    <InvestorWrapper>
                    </InvestorWrapper>
                    </AuthCol>
                    <AuthCol>
                    <FarmerWrapper>
                    </FarmerWrapper>
                    </AuthCol>
                </AuthRow>
            </AuthSec> */}
            <Grid column spacing={3} justify='center'>
            <Grid row>
            <Grid item column xs={12} className={classes.InvestorWrapper}>
                
                <div className={classes.mainFeaturedPostContent}>
                        <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                        Willing to make profits as an investor ?
                        </Typography>
                        <Link to='/user'>
                            <Button variant="contained" color="Primary">Join Us</Button>
                        </Link>
                </div>
                
            </Grid>
            </Grid>
            <Grid row>
            <Grid item column xs={12} className={classes.FarmerWrapper}>
                
                <div className={classes.mainFeaturedPostContent}>
                        <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                        Willing to gain funding and new farming methods ?
                        </Typography>
                        <Link to='/user'>
                        <Button variant="contained" color="Primary">Join Us</Button>
                        </Link>
                </div>
                
            </Grid>
            </Grid>
            </Grid>
        </div>
    )
}

export default Authentication;

