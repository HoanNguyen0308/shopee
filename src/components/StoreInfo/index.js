import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles.js';
import { NavLink } from 'react-router-dom';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import StorefrontIcon from '@material-ui/icons/Storefront';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import PeopleIcon from '@material-ui/icons/People';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';

const StoreInfo = (props) => {
    const { classes } = props;

    return(
        <div className={classes.store_info}>
            <div className={classes.wide}>
                <div className={classes.content}>
                    <div className={classes.overview}>
                        <div className={classes.overview_side} style={{backgroundImage: "url(https://cf.shopee.vn/file/359b618f4555503b3a4b68f390884529_tn)"}}></div>
                        <div className={classes.overview_mask}></div> 
                        <div className={classes.overview_content}>
                            <div className={classes.overview_content__up}>
                                <NavLink to="/shopee-store" className={classes.up_img__link}>
                                    <div className={classes.up_img__border}>
                                        <img className={classes.up_img} src="https://cf.shopee.vn/file/ccb1d0588054d97821591da5116d6d57_tn" alt="shopee-store"/>
                                    </div>
                                </NavLink>
                                <div className={classes.up_name__wrap}>
                                    <h1 className={classes.up_name}>HaLi Store</h1>
                                    <div className={classes.up_status}>Online 4 giờ trước</div>
                                </div>
                            </div>
                            <div className={classes.overview_content__down}>
                                <button className={classes.down_button}>
                                    <AddIcon className={classes.button_icon}/>
                                    <div>THEO DÕI</div>
                                </button>
                                <button className={classes.down_button}>
                                    <ForumIcon className={classes.button_icon}/>
                                    <div>CHAT</div>
                                </button>
                            </div>
                        </div>
                    </div>
                
                    <div className={classes.info_list}>
                        <div className={classes.info_item}>
                            <StorefrontIcon className={classes.item_icon}/>
                            <div className={classes.item_name}>Sản Phẩm:</div>
                            <div className={classes.item_value}>13</div>
                        </div>
                        <div className={classes.info_item}>
                            <GroupAddIcon className={classes.item_icon}/>
                            <div className={classes.item_name}>Đang Theo Dõi:</div>
                            <div className={classes.item_value}>3</div>
                        </div>
                        <div className={classes.info_item}>
                            <ChatBubbleOutlineIcon className={classes.item_icon}/>
                            <div className={classes.item_name}>Tỉ Lệ Phản Hồi Chat:</div>
                            <div className={classes.item_value}>92% (Trong Vài Phút)</div>
                            <button className={classes.button_help}>
                                <HelpOutlineIcon className={classes.icon_help}/>
                            </button>
                        </div>
                        <div className={classes.info_item}>
                            <LibraryBooksIcon className={classes.item_icon}/>
                            <div className={classes.item_name}>Tỉ Lệ Hủy Đơn: </div>
                            <div className={classes.item_value}>2%</div>
                            <button className={classes.button_help}>
                                <HelpOutlineIcon className={classes.icon_help}/>
                            </button>
                        </div>
                        <div className={classes.info_item}>
                            <PeopleIcon className={classes.item_icon}/>
                            <div className={classes.item_name}>Người Theo Dõi: </div>
                            <div className={classes.item_value}>2,7k</div>
                        </div>
                        <div className={classes.info_item}>
                            <StarBorderIcon className={classes.item_icon}/>
                            <div className={classes.item_name}>Đánh Giá</div>
                            <div className={classes.item_value}>5.0 (24 Đánh Giá)</div>
                        </div> 
                        <div className={classes.info_item}>
                            <PermIdentityIcon className={classes.item_icon}/>
                            <div className={classes.item_name}>Tham Gia:</div>
                            <div className={classes.item_value}>23 Ngày Trước</div>
                        </div>  
                    </div>
                </div>
            </div>
        </div>    
    );
};

export default withStyles(styles)(StoreInfo) 
