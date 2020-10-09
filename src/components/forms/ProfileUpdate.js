import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import container from '@material-ui/core/container';
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


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        formControl: {
            margin: theme.spacing(1),
            minWidth: 120,
        },
        selectEmpty: {
            marginTop: theme.spacing(2),
        },
    }),
);

function ProfileUpdate() {
        const classes = useStyles();
        const [state, setState] = React.useState({
            gender: '',
            roles: '',
        })
    
        const handleChange = (event) => {
            setState({
                ...state,
            })
        }
    return (
        <div>
        <CssBaseline />
            <container fixed>
            <Typography variant="h1">
            Lets Learn More About You
            </Typography>
            <FormControl className={classes.FormControl}>
            <InputLabel >Roles</InputLabel>
            <Select
                native
                value={state.roles}
                onChange={handleChange}
                inputProps={{
                    name: 'roles',
                    id: 'role-native-simple',
                }}
                >
                <option aria-label="None" value="" />
                <option value="Farmer">Farmer</option>
                <option value="Investor">Investor</option>
            </Select>
            <TextField 
            variant='outlined'
            label='First Name'
            />
            <TextField 
            variant='outlined'
            label='Last Name'
            />
            <TextField 
            variant='outlined'
            label='Email'
            />
            <TextField 
            variant='outlined'
            label='Phone'
            />
            <InputLabel >Gender</InputLabel>
            <Select
                value={state.gender}
                onChange={handleChange}
                name="gender"
                inputProps={{
                    name: "gender",
                    id: "gender-native-enabled"
                }}
                native
                >
                <option aria-label="None" value="" />
                <option value="Male">Male</option>
                <option value="Female">Female</option>
            </Select>
            <TextField
            id="date"
            label="Birthday"
            type="date"
            defaultValue="2017-05-24"
            />
            <TextField 
            variant='outlined'
            label='Id Number'
            />
            <TextField 
            variant='outlined'
            label='Kra Pin'
            />
            </FormControl>
            
            </container>
        </div>
    )
}

