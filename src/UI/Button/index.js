import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
    button: {
        padding: '8px 30px',
        color: '#555',
        border: '1px solid #ccc',
        borderRadius: '2px',
        display: 'inline-block',
        alignItems: 'center',
        cursor: 'pointer',
        '&:hover': {
            color: 'rgb(238, 77, 45)',
        }
    },
})

const Button = props => {
    const {classes} = props;
    return(
        <div className={`${classes.button} ${props.className}`} style={props.style} onClick={props.onClick}>
            {props.children}
        </div>
    )
}

export default withStyles(styles)(Button) 
