import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
    buttonPrimary: {
        padding: '8px 22px',
        borderRadius: '2px',
        display: 'inline-block',
        alignItems: 'center',
        cursor: 'pointer',
        backgroundColor: 'rgb(238, 77, 45)',
        color: '#fff',
        border: 'none',
        '&:hover': {
            backgroundColor: 'rgb(230, 70, 40)',
            color: '#fff',
        }
    },
})

const BtnPrimary = props => {
    const {classes} = props;
    return(
        <div className={`${classes.buttonPrimary} ${props.className}`}  style={props.style} onClick={props.onClick}>
            {props.children}
        </div>
    )
}

export default withStyles(styles)(BtnPrimary) 
