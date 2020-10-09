import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline'; 
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(3),
            width: '25ch',
        },
    container: {
            display: 'flex',
            flexWrap: 'wrap',
          },
    textField: {
            marginLeft: theme.spacing(1),
            marginRight: theme.spacing(1),
            width: 200,
          },
    form: {
            width: '100%', // Fix IE 11 issue.
            marginTop: theme.spacing(3),
          },
    submit: {
            margin: theme.spacing(3, 0, 2),
          },
}));
function Project() {
    const classes = useStyles();

    return (
        <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
        <Typography variant="h4" >
            Project Creation
        </Typography>
        <form className={classes.form}>
        <Grid container spacing={2}>
        <Grid item xs={12}>
        <TextField 
        fullWidth
        variant="outlined"
        label="Title"/>
        </Grid>
        <Grid item xs={12}>
        <TextField 
        fullWidth
        variant="outlined"
        label="Description of Project"/>
        </Grid>
        <Grid item xs={12}>
        <FormControl className={classes.formControl}>
            <input
                accept='image/*'
                className={classes.input}
                id='contained-button-file'
                multiple
                accept="image/*"
                />
                <label htmlFor="contained-button-file">
                    <Button 
                    variant="contained" 
                    color="primary"
                    component="span"
                    endIcon={<PhotoCamera />}>
                    Image of Project
                    </Button>
                </label>
            </FormControl>
        </Grid>
        <Grid item xs={12}>
        <TextField 
        fullWidth
        variant="outlined"
        label="Target Cost"/>
        </Grid>
        <Grid item xs={12}>
        <FormControl className={classes.container} noValidate>
      <TextField
        id="date"
        label="Date Started"
        type="date"
        defaultValue="2017-05-24"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </FormControl>
        </Grid>
        <Grid item xs={12}>
        <FormControl className={classes.container} noValidate>
      <TextField
        id="date"
        label="Date Ended"
        type="date"
        defaultValue="none"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </FormControl>
        </Grid>
        <Grid item xs={12}>
            <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                >
            Sign Up
          </Button>
          </Grid>
        </Grid>
        </form>
        </div>
        </Container>
    )
}

export default Project;
