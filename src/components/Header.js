import React from 'react';
import logo from '../images/Logo500px.jpg';
import Typed from 'react-typed';
import { makeStyles } from '@material-ui/core/styles';
import {
    Typography,
    Avatar,
    Grid,
    Box
  } from "@material-ui/core";

  //CSS STYLES
const useStyles = makeStyles(theme => ({
    
    avatar: {
        width: theme.spacing(15),
        height: theme.spacing(15),
        margin: theme.spacing(1)

    },
    title: {
        color: "green"
    },
    subtitle: {
        color: "tan",
        marginBottom: "3rem"
    },
    typedContainer: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "100vw",
        textAlign: "center",
        zIndex: 1


    }
    
}));

export const Header = () => {
const classes = useStyles()

    return (
        <Box className={ classes.typedContainer } >
            <Grid container justify="center" >
                <Avatar className={ classes.avatar } variant="rounded" src={logo} alt="logo" />

            </Grid>
            <Typography className={ classes.title } variant="h4" >
                <Typed strings={["Luis Chilo"]} typeSpeed={40} />
            </Typography>
            <br/>
            <Typography className={ classes.subtitle } variant="h5" >
                <Typed 
                    strings={["Motion Graphics", "Web Design","MERN Stack"]} 
                    typeSpeed={40} 
                    backSpeed={60}
                    loop
                    />
            </Typography>
            
        </Box>
    )
}
