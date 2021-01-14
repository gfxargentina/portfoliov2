import React from 'react';
import { makeStyles } from '@material-ui/styles';

import {
    BottomNavigation,
    BottomNavigationAction
  } from "@material-ui/core";
  import FacebookIcon from '@material-ui/icons/Facebook';
  import TwitterIcon from '@material-ui/icons/Twitter';
  import LinkedInIcon from '@material-ui/icons/LinkedIn';
  import YouTubeIcon from '@material-ui/icons/YouTube';

const useStyles = makeStyles({
    
    root : {
        "& .MuiBottomNavigationAction-root": {
            minWidth: 0,
            maxWidth: 250,
        },
        "& .MuiSvgIcon-root": {
            fill: "tan",
            "&:hover": {
                fill: "tomato",
                fontSize: "1.8rem"
                
            }}}
    
});


export const Footer = () => {

    const classes = useStyles();


    return (
        <BottomNavigation width="auto" style={{background: "#222"}}>
            <BottomNavigationAction
                className={classes.root} 
                style={{padding: 0}} 
                icon={<FacebookIcon />}
                >
            </BottomNavigationAction>
            <BottomNavigationAction 
                className={classes.root}
                style={{padding: 0}} 
                icon={<TwitterIcon />}
                >
            </BottomNavigationAction>
            <BottomNavigationAction 
                className={classes.root}
                style={{padding: 0}} 
                icon={<LinkedInIcon />}
                >
            </BottomNavigationAction>
            <BottomNavigationAction 
                className={classes.root}
                style={{padding: 0}} 
                icon={<YouTubeIcon />}
                >
            </BottomNavigationAction>
            
        </BottomNavigation>
    )
}
