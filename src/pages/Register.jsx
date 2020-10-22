import React from 'react';
import { createMuiTheme, makeStyles, createStyles, ThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import { green } from '@material-ui/core/colors';




const useStyles = makeStyles((theme) => ({
        formControl: {
            margin: theme.spacing(1),
            minWidth: 120,
        },
        selectEmpty: {
            marginTop: theme.spacing(2),
        },
        paper: {
            marginTop: theme.spacing(8),
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
            color: '#fff',
        },
        textField: {
          width: '45ch',
        }
    }));

    const theme = createMuiTheme({
      palette: {
        primary: green,
      },
    });

    function Register() {
      const classes = useStyles();
      const [values, setValues] = React.useState({
        Password: '',
        showPassword: false,
      })

      const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value })
      };

      const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword});
      };
      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      }
      return (
        <Container component="main" maxWidth="xs">
        <div className={classes.paper}>
        <Typography component='h1' variant='h5'>
        Sign Up
        </Typography>
        <form className={classes.form}>
        <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
        <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
        </Grid>
        <Grid item xs={12} sm={6}>
        <TextField
                autoComplete="Lname"
                name="LastName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
        </Grid>
        <Grid item xs={12}>
        <TextField
                name="Email"
                variant="outlined"
                required
                fullWidth
                id="Email"
                label="Email"
                autoComplete="email"
              />
        </Grid>
        <Grid item xs={12}>
        <TextField
                autoComplete="Id N.o"
                name="Id Number"
                variant="outlined"
                required
                fullWidth
                id="Id Number"
                label="Id Number"
              />
        </Grid>
        <Grid item xs={12}>
        <TextField
                autoComplete="Phone N.o"
                name="Phone Number"
                variant="outlined"
                required
                fullWidth
                id="Phone Number"
                label="phone number"
              />
        </Grid>
        <Grid item xs={12}>
        <FormControl className={classes.textField} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
          </FormControl>
        </Grid>
        </Grid>
        <ThemeProvider theme={theme}>
        <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          </ThemeProvider>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
        </div>
        </Container>
      )
    }
    
    export default Register
    