import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';    
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import Select from '@material-ui/core/Select';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
      },
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(3),
            width: '25ch',
        },
    },
    input: {
        display: 'none',
    },
    paper: {
        marginTop: theme.spacing(12),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
      },
      submit: {
        margin: theme.spacing(3, 0, 2),
      },
}));

    
export const Farmcreate = () => {
    const classes = useStyles();
    const [state, setState] = React.useState({
        irrigation: '',
        soil: '',
        depth: '',
        });
    const handleChange = (event) => {
        setState({
            ...state
        });
    };

    return (
        <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
        <Typography variant="h4" >
            Farm Details
        </Typography>
        <form className={classes.form}>
        <Grid container spacing={2}>
            <Grid item xs={12}>
            <TextField
            fullWidth
            variant="outlined"
            id='outlined-basic'
            label='Land tenure'/>
            </Grid>
            <Grid item xs={12}>
            <TextField
            fullWidth
            variant="outlined"
            id='outlined-basic'
            label='Land Form'/>
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
                    Upload
                    </Button>
                </label>
            </FormControl>
            </Grid>
            <Grid item xs={12}>
            <FormControl className={classes.formControl}>
                <InputLabel 
                variant="outlined" 
                htmlFor="irrigation-native-simple">irrigation type</InputLabel>
                <Select
                variant="outlined"
                fullWidth
                    native
                    value={state.irrigation}
                    onChange={handleChange}
                    inputProps={{
                        name: "irrigation",
                        id: "irrigation-native-simple",
                    }} >
                    <option aria-label="None" value="" />
                    <option value="Drip">Drip</option>
                    <option value="rainfall">Rainfall</option>
                    <option value="overhead">Overhead</option>
                </Select>
                </FormControl>
                </Grid>
                <Grid item xs={12}>
                <FormControl className={classes.formControl}>
                <InputLabel htmlFor="Soil-native-simple">Soil type</InputLabel>
                <Select
                    variant="outlined"
                    fullWidth
                    native
                    value={state.soil}
                    onChange={handleChange}
                    inputProps={{
                        name: "soil",
                        id: "Soil-native-simple",
                    }} >
                    <option aria-label="None" value="" />
                    <option value="loam">Loam</option>
                    <option value="clay">Clay</option>
                    <option value="sandy">Sandy</option>
                </Select>
                </FormControl>
                </Grid>
                <Grid item xs={12}>
                <FormControl className={classes.formControl}>
                <InputLabel htmlFor="depth-native-simple">Soil Depth</InputLabel>
                <Select
                    variant="outlined"
                    fullWidth
                    native
                    value={state.depth}
                    onChange={handleChange}
                    inputProps={{
                        name: "depth",
                        id: "depth-native-simple",
                    }} >
                    <option aria-label="None" value="" />
                    <option value="very-shallow">less than 25 cm</option>
                    <option value="shallow">25 cm-50 cm</option>
                    <option value="moderately-deep">50 cm-90 cm</option>
                    <option value="deep">90 cm-150 cm</option>
                    <option value="very-deep">150 cm</option>
                </Select>
                </FormControl>
                </Grid>
                <Grid item xs={12}>
                <TextField
                variant="outlined"
                fullWidth
                id='outlined-basic' 
                label='Land size'/>
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

export default Farmcreate;