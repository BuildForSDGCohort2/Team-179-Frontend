import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(3),
            width: '25ch',
        },
    },
    input: {
        display: 'none',
    },
}));

export const Farmcreate = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
        <FormControl>
            <TextField id='outlined-basic' label='Land tenure'/>
            <TextField id='outlined-basic' label='Land Form'/>
            <input
                accept='image/*'
                className={classes.input}
                id='contained-button-file'
                multiple
                type='file'
                />
                <label htmlFor="contained-button-file">
                    <Button variant="contained" color="primary" component="span">
                    Upload
                    </Button>
                </label>
                <input accept="image/*" className={classes.input} id="icon-button-file" type="file" />
                <label htmlFor="icon-button-file">
                    <IconButton color="primary" aria-label="upload picture" component="span">
                    <PhotoCamera />
                    </IconButton>
                </label>
        </FormControl>
        </div>
    )
}
