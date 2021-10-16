import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles.js';
import Header from '../../partials/shopee/Header';
import Footer from '../../partials/auth/Footer';
import Grid from '@mui/material/Grid';
import SearchLeftResource from '../../components/SearchLeftResource';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import Product from "../../components/Product";
import SearchRightResource from '../../components/SearchRightResource';
import PaginationResource from '../../components/PaginationResource';

const products = [
	{ id: 1, img: "https://cf.shopee.vn/file/88c363555addd771a77065484d5fc64e_tn", name: "Mỹ phẩm hàn quốc", description: "Mỹ phẩm là một trong những công cụ hỗ trợ làm đẹp mà tất cả mọi người đều yêu thích", price: "1.250" },
	{ id: 2, img: "https://cf.shopee.vn/file/3111642bf99d0cf3a49434c35fa25ed2_tn", name: "Mỹ phẩm hàn quốc", description: "Mỹ phẩm là một trong những công cụ hỗ trợ làm đẹp mà tất cả mọi người đều yêu thích", price: "2.500" },
	{ id: 3, img: "https://cf.shopee.vn/file/d8c5ca057af2da1ea9a3599c0d6644c6_tn", name: "Mỹ phẩm hàn quốc", description: "Mỹ phẩm là một trong những công cụ hỗ trợ làm đẹp mà tất cả mọi người đều yêu thích", price: "1.300" },
	{ id: 4, img: "https://cf.shopee.vn/file/48985d3f7302f638ad10a8dbb3da7259_tn", name: "Mỹ phẩm hàn quốc", description: "Mỹ phẩm là một trong những công cụ hỗ trợ làm đẹp mà tất cả mọi người đều yêu thích", price: "1.250" },
	{ id: 5, img: "https://cf.shopee.vn/file/761648d32115693405b610c2dba82171_tn", name: "Mỹ phẩm hàn quốc", description: "Mỹ phẩm là một trong những công cụ hỗ trợ làm đẹp mà tất cả mọi người đều yêu thích", price: "1.000" },
	{ id: 6, img: "https://cf.shopee.vn/file/270a5d8925ca7b2ab359920398326f5f_tn", name: "Mỹ phẩm hàn quốc", description: "Mỹ phẩm là một trong những công cụ hỗ trợ làm đẹp mà tất cả mọi người đều yêu thích", price: "1.000" },
	{ id: 7, img: "https://cf.shopee.vn/file/e3e8996b919d3e4b5c2c0c238277accc_tn", name: "Mỹ phẩm hàn quốc", description: "Mỹ phẩm là một trong những công cụ hỗ trợ làm đẹp mà tất cả mọi người đều yêu thích", price: "1.250" },
	{ id: 8, img: "https://cf.shopee.vn/file/398e18f5f5b7234af114636fb37560a9_tn", name: "Mỹ phẩm hàn quốc", description: "Mỹ phẩm là một trong những công cụ hỗ trợ làm đẹp mà tất cả mọi người đều yêu thích", price: "2.500" },
	{ id: 9, img: "https://cf.shopee.vn/file/6e49302daf74a5c3d61673596e0ba0eb_tn", name: "Mỹ phẩm hàn quốc", description: "Mỹ phẩm là một trong những công cụ hỗ trợ làm đẹp mà tất cả mọi người đều yêu thích", price: "1.300" },
	{ id: 10, img: "https://cf.shopee.vn/file/5da41235c924648ddca9eb5ec400a7bb_tn", name: "Mỹ phẩm hàn quốc", description: "Mỹ phẩm là một trong những công cụ hỗ trợ làm đẹp mà tất cả mọi người đều yêu thích", price: "1.250" },
	{ id: 11, img: "https://cf.shopee.vn/file/6e897b6743edcc5996f6aa42a36cb27a_tn", name: "Mỹ phẩm hàn quốc", description: "Mỹ phẩm là một trong những công cụ hỗ trợ làm đẹp mà tất cả mọi người đều yêu thích", price: "1.000" },
	{ id: 12, img: "https://cf.shopee.vn/file/dd47558379f8894a15299857b94c6ab0_tn", name: "Mỹ phẩm hàn quốc", description: "Mỹ phẩm là một trong những công cụ hỗ trợ làm đẹp mà tất cả mọi người đều yêu thích", price: "1.000" },
    { id: 7, img: "https://cf.shopee.vn/file/e3e8996b919d3e4b5c2c0c238277accc_tn", name: "Mỹ phẩm hàn quốc", description: "Mỹ phẩm là một trong những công cụ hỗ trợ làm đẹp mà tất cả mọi người đều yêu thích", price: "1.250" },
	{ id: 8, img: "https://cf.shopee.vn/file/398e18f5f5b7234af114636fb37560a9_tn", name: "Mỹ phẩm hàn quốc", description: "Mỹ phẩm là một trong những công cụ hỗ trợ làm đẹp mà tất cả mọi người đều yêu thích", price: "2.500" },
	{ id: 9, img: "https://cf.shopee.vn/file/6e49302daf74a5c3d61673596e0ba0eb_tn", name: "Mỹ phẩm hàn quốc", description: "Mỹ phẩm là một trong những công cụ hỗ trợ làm đẹp mà tất cả mọi người đều yêu thích", price: "1.300" },
	{ id: 10, img: "https://cf.shopee.vn/file/5da41235c924648ddca9eb5ec400a7bb_tn", name: "Mỹ phẩm hàn quốc", description: "Mỹ phẩm là một trong những công cụ hỗ trợ làm đẹp mà tất cả mọi người đều yêu thích", price: "1.250" },
	{ id: 11, img: "https://cf.shopee.vn/file/6e897b6743edcc5996f6aa42a36cb27a_tn", name: "Mỹ phẩm hàn quốc", description: "Mỹ phẩm là một trong những công cụ hỗ trợ làm đẹp mà tất cả mọi người đều yêu thích", price: "1.000" },
	{ id: 12, img: "https://cf.shopee.vn/file/dd47558379f8894a15299857b94c6ab0_tn", name: "Mỹ phẩm hàn quốc", description: "Mỹ phẩm là một trong những công cụ hỗ trợ làm đẹp mà tất cả mọi người đều yêu thích", price: "1.000" },
    { id: 7, img: "https://cf.shopee.vn/file/e3e8996b919d3e4b5c2c0c238277accc_tn", name: "Mỹ phẩm hàn quốc", description: "Mỹ phẩm là một trong những công cụ hỗ trợ làm đẹp mà tất cả mọi người đều yêu thích", price: "1.250" },
	{ id: 8, img: "https://cf.shopee.vn/file/398e18f5f5b7234af114636fb37560a9_tn", name: "Mỹ phẩm hàn quốc", description: "Mỹ phẩm là một trong những công cụ hỗ trợ làm đẹp mà tất cả mọi người đều yêu thích", price: "2.500" },
	{ id: 9, img: "https://cf.shopee.vn/file/6e49302daf74a5c3d61673596e0ba0eb_tn", name: "Mỹ phẩm hàn quốc", description: "Mỹ phẩm là một trong những công cụ hỗ trợ làm đẹp mà tất cả mọi người đều yêu thích", price: "1.300" },
	{ id: 10, img: "https://cf.shopee.vn/file/5da41235c924648ddca9eb5ec400a7bb_tn", name: "Mỹ phẩm hàn quốc", description: "Mỹ phẩm là một trong những công cụ hỗ trợ làm đẹp mà tất cả mọi người đều yêu thích", price: "1.250" },
	{ id: 11, img: "https://cf.shopee.vn/file/6e897b6743edcc5996f6aa42a36cb27a_tn", name: "Mỹ phẩm hàn quốc", description: "Mỹ phẩm là một trong những công cụ hỗ trợ làm đẹp mà tất cả mọi người đều yêu thích", price: "1.000" },
	{ id: 12, img: "https://cf.shopee.vn/file/dd47558379f8894a15299857b94c6ab0_tn", name: "Mỹ phẩm hàn quốc", description: "Mỹ phẩm là một trong những công cụ hỗ trợ làm đẹp mà tất cả mọi người đều yêu thích", price: "1.000" },
    { id: 7, img: "https://cf.shopee.vn/file/e3e8996b919d3e4b5c2c0c238277accc_tn", name: "Mỹ phẩm hàn quốc", description: "Mỹ phẩm là một trong những công cụ hỗ trợ làm đẹp mà tất cả mọi người đều yêu thích", price: "1.250" },
	{ id: 8, img: "https://cf.shopee.vn/file/398e18f5f5b7234af114636fb37560a9_tn", name: "Mỹ phẩm hàn quốc", description: "Mỹ phẩm là một trong những công cụ hỗ trợ làm đẹp mà tất cả mọi người đều yêu thích", price: "2.500" },
	{ id: 9, img: "https://cf.shopee.vn/file/6e49302daf74a5c3d61673596e0ba0eb_tn", name: "Mỹ phẩm hàn quốc", description: "Mỹ phẩm là một trong những công cụ hỗ trợ làm đẹp mà tất cả mọi người đều yêu thích", price: "1.300" },
	{ id: 10, img: "https://cf.shopee.vn/file/5da41235c924648ddca9eb5ec400a7bb_tn", name: "Mỹ phẩm hàn quốc", description: "Mỹ phẩm là một trong những công cụ hỗ trợ làm đẹp mà tất cả mọi người đều yêu thích", price: "1.250" },
	{ id: 11, img: "https://cf.shopee.vn/file/6e897b6743edcc5996f6aa42a36cb27a_tn", name: "Mỹ phẩm hàn quốc", description: "Mỹ phẩm là một trong những công cụ hỗ trợ làm đẹp mà tất cả mọi người đều yêu thích", price: "1.000" },
	{ id: 12, img: "https://cf.shopee.vn/file/dd47558379f8894a15299857b94c6ab0_tn", name: "Mỹ phẩm hàn quốc", description: "Mỹ phẩm là một trong những công cụ hỗ trợ làm đẹp mà tất cả mọi người đều yêu thích", price: "1.000" },
    { id: 7, img: "https://cf.shopee.vn/file/e3e8996b919d3e4b5c2c0c238277accc_tn", name: "Mỹ phẩm hàn quốc", description: "Mỹ phẩm là một trong những công cụ hỗ trợ làm đẹp mà tất cả mọi người đều yêu thích", price: "1.250" },
	{ id: 8, img: "https://cf.shopee.vn/file/398e18f5f5b7234af114636fb37560a9_tn", name: "Mỹ phẩm hàn quốc", description: "Mỹ phẩm là một trong những công cụ hỗ trợ làm đẹp mà tất cả mọi người đều yêu thích", price: "2.500" },
	{ id: 9, img: "https://cf.shopee.vn/file/6e49302daf74a5c3d61673596e0ba0eb_tn", name: "Mỹ phẩm hàn quốc", description: "Mỹ phẩm là một trong những công cụ hỗ trợ làm đẹp mà tất cả mọi người đều yêu thích", price: "1.300" },
	{ id: 10, img: "https://cf.shopee.vn/file/5da41235c924648ddca9eb5ec400a7bb_tn", name: "Mỹ phẩm hàn quốc", description: "Mỹ phẩm là một trong những công cụ hỗ trợ làm đẹp mà tất cả mọi người đều yêu thích", price: "1.250" },
	{ id: 11, img: "https://cf.shopee.vn/file/6e897b6743edcc5996f6aa42a36cb27a_tn", name: "Mỹ phẩm hàn quốc", description: "Mỹ phẩm là một trong những công cụ hỗ trợ làm đẹp mà tất cả mọi người đều yêu thích", price: "1.000" },
	{ id: 12, img: "https://cf.shopee.vn/file/dd47558379f8894a15299857b94c6ab0_tn", name: "Mỹ phẩm hàn quốc", description: "Mỹ phẩm là một trong những công cụ hỗ trợ làm đẹp mà tất cả mọi người đều yêu thích", price: "1.000" },
];

const ResourceSearch = (props) => {
    const { classes } = props;

    return (
        <div className={classes.resource_search}>
            <Header />
                <div className={classes.container}>
                    <div className={classes.wide}>
                        <Grid container spacing={0}>
                            <Grid item style={{paddingRight: "20px"}} xs={2} md={2.1}>
                                <SearchLeftResource />
                            </Grid>
                            <Grid item xs={10} md={9.9}>
                                <div className={classes.content}>
                                    <h1 className={classes.content_search}>
                                        <EmojiObjectsIcon className={classes.search_icon}/>
                                        <span className={classes.search_text}>Kết quả tìm kiếm cho từ khoá '
                                            <span className={classes.search_highlight}>áo khoác hàn quốc</span>'
                                        </span>
                                    </h1>
                                    
                                    <SearchRightResource/>

                                    <div className={classes.content_products}>
                                        <Grid container spacing={0.8}>
                                            {products.map(product => {
                                                return (
                                                    <Grid item xs={12} md={2.4} key={product.id}>
                                                        <Product product={product}/>
                                                    </Grid>
                                                )
                                            })}
                                        </Grid>
                                    </div>

                                    <PaginationResource />      
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                </div>
            <Footer />
        </div>
    );
};

export default withStyles(styles)(ResourceSearch);