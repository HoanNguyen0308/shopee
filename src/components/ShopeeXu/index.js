import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles.js'
import ArrowForwardIosOutlinedIcon from '@material-ui/icons/ArrowForwardIosOutlined';
import BtnPrimary from '../../UI/BtnPrimary'

const ShopeeXu = props => {
    const { classes } = props 
    return(
        <React.Fragment>
            <div className={classes.header}>
                <div>
                    <img src="/images/shopees/xu.png" alt="photo01.png"/>
                    <div className={classes.currentXu}>
                        100
                    </div>
                    <div>
                        <p>Xu đang có</p>
                        <p style={{color: '#929292'}}>100 xu sẽ hết hạn vào ngày 31-12-2021</p>
                    </div>
                </div>
                <div>
                    Nhận thêm xu!
                    <ArrowForwardIosOutlinedIcon style={{fontSize:'12px', marginLeft:'4px'}}/>
                </div>
            </div>
            <div className={classes.body}>
                <div>
                    <p>Bạn chưa có xu nào.</p>
                    <BtnPrimary className={classes.btnPrimarry}>Làm sao để kiếm xu ?</BtnPrimary>
                </div>
            </div>
        </React.Fragment>
    )
}

export default withStyles(styles)(ShopeeXu) 
