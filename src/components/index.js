import React from 'react';
import { Header } from './Header';
import { Navbar } from './Navbar';
import Particles from 'react-particles-js';
import { makeStyles } from '@material-ui/core/styles';

//CSS STYLES
const useStyles = makeStyles(theme => ({
    
    particlesCanva : {
        position: "absolute"
    }
    
}));

export const Home = () => {

    const classes = useStyles()

    return (
        <>
            <Navbar />
            <Header />
            
            <Particles
                canvasClassName={classes.particlesCanva} 
                params={{
                    particles: {
                        number: {
                        value: 40,
                        density: {
                            enable: true,
                            value_area: 300
                        }},
                        shape: {
                            type: "circle",
                            stroke: {
                                width: 1,
                                color: "tomato"
                            },
                            size: {
                                value: 8,
                                random: true,
                                anim: {
                                    enable: true,
                                    speed: 10,
                                    size_min: 0.1,
                                    sync: true
                                }
                            }
                        }
                        
                    }
                }}
            /> 
        </>
    )
}
