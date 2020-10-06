  
// import React from 'react';
// import { render } from "react-dom";
// import { Link } from 'react-router-dom';
// import { faHome } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import RoomIcon from '@material-ui/icons/Room';
import NaturePeopleIcon from '@material-ui/icons/NaturePeople';
import LocalAtm from '@material-ui/icons/LocalAtm';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

const useStyles = makeStyles({
  root: {
    maxWidth: 500,
    padding: 30,
  },
  expand: {
    display: 'flex',
    flexDirection: 'column',
    justify: 'end',
  },
  media: {
    height: 250,
    width: 300,
  },
});

function CardItem(props) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
    <CardActionArea>
      {/* <li className='cards__item'>
        <Link className='cards__item__link' to={props.path}>
          <figure className='cards__item__pic-wrap' data-category={props.label}>
            <img
              className='cards__item__img'
              alt='Farm Produce'
              src={props.src}
            />
          </figure>
          <div className='cards__item__info'>
          {/* <FontAwesomeIcon icon={faHome} size="lg" /> */}
            {/* <h5 className='cards__item__text'>{props.text}</h5>
          </div>
          <div className='farm__info'>
          </div>
        </Link> */}
      {/* </li> */}
      <CardMedia
        className={classes.media}
        image={props.src}
        title={props.title} />
      <CardContent>
      <CardActions>
      <IconButton aria-label="add to favorites">
          <RoomIcon />
          <Typography> Location</Typography>
        </IconButton>
      </CardActions>
      <CardActions>
      <IconButton aria-label="Farm">
          <NaturePeopleIcon />
          <Typography> Farmer </Typography>
        </IconButton>
      </CardActions>
      <CardActions>
      <IconButton aria-label="Amount Needed">
        <LocalAtm />
        <Typography> Money Needed </Typography>
        </IconButton>
        <IconButton aria-label="shopping" className='expand'>
        <ShoppingBasketIcon />
        <Typography> Purchase </Typography>
        </IconButton>
        </CardActions>
      </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default CardItem;