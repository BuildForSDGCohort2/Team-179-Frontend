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
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

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

export default function Login() {
  const classes = useStyles();
  return (
    <Container component="main" maxWidth="xs">
    <CssBaseline />
    <div className={classes.paper}>
    <Typography component="h1" variant="h5">
    <form className="classes.form" noValidate>
    <Grid container spacing={2}>
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
                name="Password"
                variant="outlined"
                required
                fullWidth
                id="Passsword"
                label="Password"
                autoComplete="password"
              />
        </Grid>
        <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
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
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
    </form>
    </Typography>
    </div>
    </Container>
  )
}
