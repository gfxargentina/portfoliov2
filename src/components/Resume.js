import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Box} from "@material-ui/core";
import { Navbar } from './Navbar';


//CSS STYLES
const useStyles = makeStyles(theme => ({
    
    mainContainer : {
        background: "#1E1E21"
    },
    timeLine: {
        position: "relative",
        padding: "1rem",
        margin: "0 auto",
        "&:before": {
            content: "''",
            position: "absolute",
            height: "100%",
            border: "1px solid #ECCB0E",
            boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
            right: "40px",
            top: 0
        },
        "&:after": {
            content: "''",
            display: "table",
            clear: "both"
        },
        [theme.breakpoints.up("md")]: {
            padding: "2rem",
            "&:before": {
                left: "calc( 50% - 1px )",
                right: "auto"
            }
        }

    },
    timeLineItem: {
        padding: "1rem",
        borderBottom: "2px solid #ECCB0E",
        position: "relative",
        margin: "1rem 3rem 1rem 1rem",
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        clear: "both",
        "&:after": {
            content: "''",
            position: "absolute",
            
        },
        "&:before": {
            content: "''",
            position: "absolute",
            right: "0.625rem",
            top: "calc(50% - 5px)",
            borderStyle: "solid",
            borderColor: "#ECCB0E #ECCB0E transparent transparent",
            boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
            borderWidth: "0.625rem",
            //flecha
            transform: "rotate(45deg)"
        },
        [theme.breakpoints.up("md")]: {
            width: "44%",
            margin: "1rem",
            "&:nth-of-type(2n)": {
                float: "right",
                margin: "1rem",
                borderColor: "#ECCB0E"
            },
            "&:nth-of-type(2n):before": {
                right: "auto",
                left: "-0.625rem",
                borderColor: "transparent transparent #ECCB0E #ECCB0E"
                

            }
        }

    },
    timeLineYear: {
        textAlign: "center",
        maxWidth: "9.375rem",
        margin: "0 3rem 0 auto",
        fontSize: "1.8rem",
        background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        border: 0,
        borderRadius: 5,
        color: "white",
        lineHeight: 1,
        padding: "0.5rem 0 1rem",
        "&:before": {
            display: "none"
        },
        [theme.breakpoints.up("md")]: {
            textAlign: "center",
            margin: "0 auto",
            "&:nth-of-type(2n)": {
                float: "none",
                margin: "0 auto"
            },
            "&:bth-of-type(2n):before": {
                display: "none"
            }
        }        

    },
    heading: {
        color: "#15D3C9",
        padding: "3rem 0",
        textTransform: "uppercase"
    },
    subHeading: {
        color: "white",
        padding: "1rem 0",
        textTransform: "uppercase"
    }

    
}));


export const Resume = () => {

        const classes = useStyles();

    return (
        <>
        <Navbar />
        <Box component="header" className={classes.mainContainer} >
            <Typography variant="h4" align="center" className={classes.heading} >                
                Working Experience
            </Typography>        
        <Box component="div" className={classes.timeLine} >
            {/* EXPERIENCIA 1 */}
            <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem} `} > 2011 </Typography>
            <Box component="div" className={classes.timeLineItem} >
                <Typography variant="h5" align="center" className={classes.subHeading}  >                   
                    Motion Graphics Design
                </Typography>
                <Typography variant="body1" align="center" style={{color: "#ECCB0E"}} >                   
                    Videohive
                </Typography>
                <Typography variant="subtitle1" align="center" style={{color: "tan"}} >                   
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi recusandae assumenda dicta alias quam magni!
                </Typography>
            </Box>
             {/* EXPERIENCIA 2 */}
            <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem} `} > 2020 </Typography>
            <Box component="div" className={classes.timeLineItem} >
                <Typography variant="h5" align="center" className={classes.subHeading}  >                   
                    Web Design
                </Typography>
                <Typography variant="body1" align="center" style={{color: "#ECCB0E"}} >                   
                    Freelance
                </Typography>
                <Typography variant="subtitle1" align="center" style={{color: "tan"}} >                   
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi recusandae assumenda dicta alias quam magni!
                </Typography>
            </Box>
             {/* EXPERIENCIA 3 */}
             <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem} `} > 2021 </Typography>
            <Box component="div" className={classes.timeLineItem} >
                <Typography variant="h5" align="center" className={classes.subHeading}  >                   
                    Web Design
                </Typography>
                <Typography variant="body1" align="center" style={{color: "#ECCB0E"}} >                   
                    Freelance
                </Typography>
                <Typography variant="subtitle1" align="center" style={{color: "tan"}} >                   
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi recusandae assumenda dicta alias quam magni!
                </Typography>
            </Box>

        </Box>
        
    
        </Box>
        
        </>
    )
}
