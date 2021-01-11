import React from 'react'
import { Navbar } from './Navbar'
import { makeStyles } from '@material-ui/core/styles';
import project1 from "../images/html-css-javascript.jpg";
import project2 from "../images/javascript-fullstack.jpg";
import project3 from "../images/mern-stack.jpg";
import project4 from "../images/react-redux.jpg";


import {
    Typography,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Grid,
    Box
  } from "@material-ui/core";


  //CSS STYLES
const useStyles = makeStyles(theme => ({
    
    mainContainer : {
        background: "#233",
        height: "100%"
    },
    cardContainer: {
        maxWidth: 345,
        margin: "2rem auto"
        
    }
    
}));


export const Portfolio = () => {

    const classes = useStyles();

    return (
        <>
        <Box component="div" className={classes.mainContainer} >
            <Navbar />
            <Grid container justify="center" >
                {/* PROJECT 1 */}
                <Grid item xs={12} sm={8} md={6} lg={4} >
                <Card className={classes.cardContainer} > 
                <CardActionArea>
                    <CardMedia 
                        component="img" 
                        alt="project 1" 
                        height="140"
                        image={project1}
                        />  
                    <CardContent>
                       <Typography gutterBottom variant="h5" >
                           Project 1
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p" >
                           Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, accusantium dicta provident est illum mollitia.
                        </Typography>  
                    </CardContent>
                    <CardActions>
                        <Button size="small" color="primary" >
                            Share
                        </Button>
                        <Button size="small" color="primary" >
                            Live Demo
                        </Button>
                    </CardActions>    
                </CardActionArea>
               </Card>      
                </Grid>
                {/* PROJECT 2 */}
                <Grid item xs={12} sm={8} md={6} lg={4} >
                <Card className={classes.cardContainer} > 
                <CardActionArea>
                    <CardMedia 
                        component="img" 
                        alt="project 2" 
                        height="140"
                        image={project2}
                        />  
                    <CardContent>
                       <Typography gutterBottom variant="h5" >
                           Project 2
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p" >
                           Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, accusantium dicta provident est illum mollitia.
                        </Typography>  
                    </CardContent>
                    <CardActions>
                        <Button size="small" color="primary" >
                            Share
                        </Button>
                        <Button size="small" color="primary" >
                            Live Demo
                        </Button>
                    </CardActions>    
                </CardActionArea>
               </Card>      
                </Grid>
                {/* PROJECT 3 */}
                <Grid item xs={12} sm={8} md={6} lg={4} >
                <Card className={classes.cardContainer} > 
                <CardActionArea>
                    <CardMedia 
                        component="img" 
                        alt="project 3" 
                        height="140"
                        image={project3}
                        />  
                    <CardContent>
                       <Typography gutterBottom variant="h5" >
                           Project 3
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p" >
                           Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, accusantium dicta provident est illum mollitia.
                        </Typography>  
                    </CardContent>
                    <CardActions>
                        <Button size="small" color="primary" >
                            Share
                        </Button>
                        <Button size="small" color="primary" >
                            Live Demo
                        </Button>
                    </CardActions>    
                </CardActionArea>
               </Card>      
                </Grid>
                 {/* PROJECT 4 */}
                 <Grid item xs={12} sm={8} md={6} lg={4} >
                <Card className={classes.cardContainer} > 
                <CardActionArea>
                    <CardMedia 
                        component="img" 
                        alt="project 4" 
                        height="140"
                        image={project4}
                        />  
                    <CardContent>
                       <Typography gutterBottom variant="h5" >
                           Project 4
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p" >
                           Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, accusantium dicta provident est illum mollitia.
                        </Typography>  
                    </CardContent>
                    <CardActions>
                        <Button size="small" color="primary" >
                            Share
                        </Button>
                        <Button size="small" color="primary" >
                            Live Demo
                        </Button>
                    </CardActions>    
                </CardActionArea>
               </Card>      
                </Grid>                                      

            </Grid>

        </Box>
        </>
    )
}
