import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { blue } from '@material-ui/core/colors';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles(() => ({
    root: {
        width: 350,
        border: 5,
        borderRadius: 13,
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FD8F49 90%)',
        boxShadow: '0 3px 5px 2px rgba(250, 107, 135, .4s)',
        color: 'white',
    },
    avatar: {
        backgroundColor: blue[400],
    },
    button: {
        border: 0,
        borderRadius: 3,
        background:  'linear-gradient(45deg, #2196F3 30%, #23CAF0 90%)',
        boxShadow: '0 3px 5px 2px rgba(37, 201, 247, .3)',
        color: 'white',
        height: 44,
        padding: '0 25px',
        margin: 8,
    },
    linkAction: {
        justifyContent: 'center',
    },
    link: {
        color: "#FFFFFF"
    },
}));

export default function StrategyCard( { strategy, options } ) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardHeader className={classes.header}
              avatar={
                  <Avatar aria-label="Strategy" className={classes.avatar}>
                      S
                  </Avatar>
              }
              action={
                  <IconButton aria-label="settings">
                      <MoreVertIcon />
                  </IconButton>
              }
              title={strategy.name}
              titleTypographyProps={{variant: 'h5'}}
            />
            { options && options.showDescription && strategy.description &&
                <CardContent>
                    <Typography variant="body1" component="p">
                        Description: {strategy.description}
                    </Typography>
                </CardContent>
            }
            { options && options.showCategory &&
                <CardContent>
                    <Typography variant="body1" component="p">
                        Category: {strategy.category}
                    </Typography>
                </CardContent>
            }
            { options && options.showGoal &&
                <CardContent>
                    <Typography variant="body1" component="p">
                        Goal: {strategy.goal}
                    </Typography>
                </CardContent>
            }
            <CardActions disableSpacing className={classes.linkAction}>
                <Button aria-label="show more" className={classes.button} component={Link} variant='outlined' to={{ pathname: `/strategy/id/${strategy.id}`, strategy: strategy }}>
                    Show more
                </Button>
            </CardActions>
        </Card>
    );
}