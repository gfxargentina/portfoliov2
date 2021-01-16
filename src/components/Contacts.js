import React, {useState, useEffect} from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import {
    Typography,
    TextField,
    Button,
    Grid,
    Box,
  } from "@material-ui/core";
  import SendIcon from '@material-ui/icons/Send';
import { Navbar } from './Navbar';

const useStyles = makeStyles(theme => ({
        
    form : {
        top:" 50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        position: "absolute"
    },
    button: {
        marginTop: "1rem",
        color: "tomato",
        borderColor: "tomato"
    }
    
}));

const InputFile = withStyles({
    root: {
        
        //color del nombre cuando esta seleccionado( focus )
        "& label.Mui-focused": {
            color: "tomato"
        },
        //color del nombre cuando no esta seleccionado (not focus )
        "& label": {
            color: "tan"
        },
        //color del border
        "& .MuiOutlinedInput-root": {
            "& fieldset": {
                borderColor: "tan"
            },
            "&:hover fieldset": {
                borderColor: "tan"
            },
            "&.Mui-focused fieldset": {
                borderColor: "tan"
            }
        }
    },
})(TextField);

export const Contacts = () => {

    const classes = useStyles();
    
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        if ( window.location.search.includes('success=true') ) {
            setSuccess(true);
            }
        }, []);


    
    return (
        <Box component="div" style={{ background: "#233", height: "100vh" }}>
            <Navbar />
            <Grid container justify="center" >
            {success && (
                <p style={{ color: "green" }}>Thanks for your message! </p>
                )}
            
                <Box 
                    component="form" 
                    className={classes.form} 
                    name="contact"
                    method="POST"
                    action="/sucess/?success=true"
                    data-netlify="true"
                    >
                    <input type="hidden" name="form-name" value="contact" />
                    <Typography 
                        variant="h5"
                        style={{color: "tomato", textAlign: "center", textTransform: "uppercase"}}
                         >
                        Hire or Contact me
                    </Typography>
                    <InputFile 
                        fullWidth={true} 
                        label="Name" 
                        variant="outlined"
                        inputProps={{ style: { color: "white" } }}
                        margin="dense"
                        size="medium"
                        name="name"
                        />
                        <br/>
                        <InputFile 
                        fullWidth={true} 
                        label="Email" 
                        variant="outlined"
                        inputProps={{ style: { color: "white" } }}
                        margin="dense"
                        size="medium"
                        name="email"
                        />
                        <br/>
                        <InputFile 
                        fullWidth={true} 
                        label="Message" 
                        variant="outlined"                        
                        inputProps={{ style: { color: "white" } }}
                        margin="dense"
                        size="medium"
                        name="message"
                        />
                        <br/>
                        <Button 
                            className={classes.button}
                            variant="outlined" 
                            fullWidth={true}
                            endIcon={<SendIcon />}
                            type="submit"
                             >
                            Contact me 
                        </Button>
                        
                        
                    


                </Box>

            </Grid>
        </Box>
    )
}
