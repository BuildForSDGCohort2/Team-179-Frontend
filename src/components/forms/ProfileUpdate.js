import React from 'react'
import container from '@material-ui/core/container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import InputLabel from '@material-ui/core/InputLabel';
import { FormControl } from '@material-ui/core';
import Select from '@material-ui/core/Select';

export default function ProfileUpdate() {
    return (
        <div>
            <container fixed>
            <Typography variant="h1">
            Lets Learn More About You
            </Typography>
            <FormControl>
            <InputLabel >Roles</InputLabel>
            <Select
                native
                >
                <option aria-label="None" value="" />
                <option value={Farmer}>Farmer</option>
                <option value={Investor}>Investor</option>
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
                native
                >
                <option aria-label="None" value="" />
                <option value={Male}>Male</option>
                <option value={Female}>Female</option>
            </Select>
            <TextField
            id="date"
            label="Birthday"
            type="date"
            defaultValue="2017-05-24"
            }}
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
