import React, { useState } from 'react';
import MobilRightMenuSlider from '@material-ui/core/Drawer';
import { Link } from 'react-router-dom';



import {  
    AppBar,
    Toolbar,
    ListItem,
    IconButton,
    ListItemText,
    Avatar,
    Divider,
    List,
    Typography,
    Box,
    ListItemIcon
} from "@material-ui/core";
import {  
    ArrowBack,
    AssignmentInd,
    Home,
    Apps,
    ContactMail
} from "@material-ui/icons";
import { makeStyles } from '@material-ui/core/styles';
import logo from "../images/Logo500px.jpg";
import { Footer } from './Footer';

//CSS STYLES
const useStyles = makeStyles(theme => ({
    
    menuSliderContainer: {
        width: 320,
        background: "#004d40",
        height: "100%"
    },
    avatar: {
        display: "block",
        margin: "0.5rem auto",
        width: theme.spacing(13),
        height: theme.spacing(13)

    },
    //color de los iconos y textos
    ListItem: {
        color: "#e1f5fe"
    }
}));

const menuItems = [
    {
        listIcon: <Home />,
        listText: "Home",
        listPath: "/"
    },
    {
        listIcon: <AssignmentInd />,
        listText: "Resume",
        listPath: "/resume"
    },
    {
        listIcon: <Apps />,
        listText: "Portfolio",
        listPath: "/portfolio"
    },
    {
        listIcon: <ContactMail/>,
        listText: "Contacts",
        listPath: "/contacts"
    },
]

export const Navbar = () => {

    const [state, setstate] = useState({
        right: false
    });

    const toggleSlider = (slider, open) => () => {
        setstate({ ...state, [slider]: open });
    };

    const classes = useStyles()

    const sideList = slider => (
        <Box 
             className={classes.menuSliderContainer} 
             component="div"
             onClick={ toggleSlider(slider, false) }
             > 
            <Avatar className={classes.avatar} variant="rounded" src={logo} alt="Logo" />
            <Divider />
            <List>
                {menuItems.map((lsItem, key) => (
                    <ListItem button key={key} component={Link} to={lsItem.listPath} >
                    <ListItemIcon className={ classes.ListItem } >{ lsItem.listIcon }</ListItemIcon>
                    <ListItemText className={ classes.ListItem } primary={ lsItem.listText } />
                </ListItem>
                )) }
            </List>

        </Box>
    )



    return (
        <>        
        <Box component="nav" >
            <AppBar position="static" style={{ background: "#222" }} >
                <Toolbar>
                    <IconButton onClick={ toggleSlider("right", true) } >
                       <ArrowBack style={{ color: "green" }} />
                    </IconButton>
                    <Typography variant="h5" style={{ color: "green" }} >
                        Mi Portfolio V.2
                    </Typography>
                    <MobilRightMenuSlider 
                        anchor="right" 
                        open={state.right} 
                        onClose={ toggleSlider("right", false) }
                        >
                        { sideList("right") }
                        <Footer />
                    </MobilRightMenuSlider>
                </Toolbar>
            </AppBar>
        </Box>
        </>
    )
}
