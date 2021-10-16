import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles.js';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import FilterListRoundedIcon from '@material-ui/icons/FilterListRounded';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';

const categories = [
    {id: 1, name: "Áo khoác mùa đông", quantity: "334"},
    {id: 2, name: "Áo khoác ngoài", quantity: "165"},
    {id: 3, name: "Áo blazer", quantity: "61"},
    {id: 4, name: "Hoodie và Áo nỉ", quantity: "113"},
    {id: 5, name: "Hoodie và Áo nỉ", quantity: "113"},
    {id: 6, name: "Hoodie và Áo nỉ", quantity: "113"},
    {id: 7, name: "Hoodie và Áo nỉ", quantity: "113"},
    {id: 8, name: "Hoodie và Áo nỉ", quantity: "113"},
];

const address = [
    {id: 1, name: "Hà Nội"},
    {id: 2, name: "TP. Hồ Chí Mịnh"},
    {id: 3, name: "Thái Nguyên"},
    {id: 4, name: "Vĩnh Phúc"},
    {id: 5, name: "Bắc Giang"},
    {id: 6, name: "Nam Định"},
    {id: 7, name: "Hà Nam"},
];

const ships = [
    {id: 1, name: "Hỏa Tốc"},
    {id: 2, name: "Nhanh"},
    {id: 3, name: "Tiết Kiệm"},
];

const brands = [
    {id: 1, name: "MANDO"},
    {id: 2, name: "BONAD"},
    {id: 3, name: "UNIQLO"},
    {id: 4, name: "UPZ"},
];

const shops= [
    {id: 1, name: "Shopee Mall"},
    {id: 2, name: "Shopee Yêu Thích"},
    {id: 3, name: "Shop Yêu Thích +"},
];

const status = [
    {id: 1, name: "Mới"},
    {id: 2, name: "Đã sử dụng"},
];

const payment= [
    {id: 1, name: "0% TRẢ GÓP"},
];

const services = [
    {id: 1, name: "Freeship Xtra"},
    {id: 2, name: "Hoàn xu Xtra"},
    {id: 3, name: "Đang giảm giá"},
    {id: 4, name: "Miễn phí vận chuyển"},
];

const SearchLeftResource = (props) => {
    const { classes } = props;
    const categoriesInit = categories.slice(0, 4);
    const [array, setArray] = React.useState(categoriesInit);
    const arrayLength = array.length;
    const handleShowCategory = () => {
        setArray(categories);
    }

    return (
        <div className={classes.search_left}>
            <div className={classes.search_left__title}>
                <FilterListRoundedIcon className={classes.title_icon}/>
                <div className={classes.title_text}>BỘ LỌC TÌM KIẾM</div>
            </div>
            <div className={classes.search_left__group}>
                <div className={classes.group_header}>Theo Danh Mục</div>
                <div className={classes.category_list}>
                    {array.map(category => {
                        return (
                            <div className={classes.category_item} key={category.id}>
                                <FormControlLabel
                                    control={
                                    <Checkbox
                                        icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                                        checkedIcon={<CheckBoxIcon fontSize="small" />}
                                        name="checkedI"
                                    />
                                    }
                                    label={`${category.name} (${category.quantity})`}
                                />
                            </div>
                        )
                    })}
                </div>

                {arrayLength <= 4 ? (<div onClick={handleShowCategory} className={classes.group_dropdown}>
                    <div className={classes.group_dropdown__text}>Thêm</div>
                    <ExpandMoreIcon className={classes.group_dropdown__icon} />
                </div>) : ""}
            </div>
        
            <div className={classes.search_left__group}>
                <div className={classes.group_header}>Nơi Bán</div>
                <div className={classes.category_list}>
                    {address.map(category => {
                        return (
                            <div className={classes.category_item} key={category.id}>
                                <FormControlLabel
                                    control={
                                    <Checkbox
                                        icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                                        checkedIcon={<CheckBoxIcon fontSize="small" />}
                                        name="checkedI"
                                    />
                                    }
                                    label={category.name}
                                />
                            </div>
                        )
                    })}
                </div>
                <div className={classes.group_dropdown}>
                    <div className={classes.group_dropdown__text}>Thêm</div>
                    <ExpandMoreIcon className={classes.group_dropdown__icon} />
                </div>
            </div>

            <div className={classes.search_left__group}>
                <div className={classes.group_header}>Đơn Vị Vận Chuyển</div>
                <div className={classes.category_list}>
                    {ships.map(category => {
                        return (
                            <div className={classes.category_item} key={category.id}>
                                <FormControlLabel
                                    control={
                                    <Checkbox
                                        icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                                        checkedIcon={<CheckBoxIcon fontSize="small" />}
                                        name="checkedI"
                                    />
                                    }
                                    label={category.name}
                                />
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className={classes.search_left__group}>
                <div className={classes.group_header}>Khoảng giá</div>
                <div className={classes.group_content}>
                    <div className={classes.content_price}>
                        <input type="text" className={classes.price_input} placeholder="₫ TỪ"/>
                        <div className={classes.price_dash}></div>
                        <input type="text" className={classes.price_input} placeholder="₫ ĐẾN"/>
                    </div>
                    <button className={classes.price_button}>ÁP DỤNG</button>
                </div>
            </div>

            <div className={classes.search_left__group}>
                <div className={classes.group_header}>Thương Hiệu</div>
                <div className={classes.category_list}>
                    {brands.map(category => {
                        return (
                            <div className={classes.category_item} key={category.id}>
                                <FormControlLabel
                                    control={
                                    <Checkbox
                                        icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                                        checkedIcon={<CheckBoxIcon fontSize="small" />}
                                        name="checkedI"
                                    />
                                    }
                                    label={category.name}
                                />
                            </div>
                        )
                    })}
                </div>
                <div className={classes.group_dropdown}>
                    <div className={classes.group_dropdown__text}>Thêm</div>
                    <ExpandMoreIcon className={classes.group_dropdown__icon} />
                </div>
            </div>

            <div className={classes.search_left__group}>
                <div className={classes.group_header}>Loại Shop</div>
                <div className={classes.category_list}>
                    {shops.map(category => {
                        return (
                            <div className={classes.category_item} key={category.id}>
                                <FormControlLabel
                                    control={
                                    <Checkbox
                                        icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                                        checkedIcon={<CheckBoxIcon fontSize="small" />}
                                        name="checkedI"
                                    />
                                    }
                                    label={category.name}
                                />
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className={classes.search_left__group}>
                <div className={classes.group_header}>Tình Trạng</div>
                <div className={classes.category_list}>
                    {status.map(category => {
                        return (
                            <div className={classes.category_item} key={category.id}>
                                <FormControlLabel
                                    control={
                                    <Checkbox
                                        icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                                        checkedIcon={<CheckBoxIcon fontSize="small" />}
                                        name="checkedI"
                                    />
                                    }
                                    label={category.name}
                                />
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className={classes.search_left__group}>
                <div className={classes.group_header}>Lựa Chọn Thanh Toán</div>
                <div className={classes.category_list}>
                    {payment.map(category => {
                        return (
                            <div className={classes.category_item} key={category.id}>
                                <FormControlLabel
                                    control={
                                    <Checkbox
                                        icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                                        checkedIcon={<CheckBoxIcon fontSize="small" />}
                                        name="checkedI"
                                    />
                                    }
                                    label={category.name}
                                />
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className={classes.search_left__group}>
                <div className={classes.group_header}>Đánh Giá</div>
                <div className={classes.rate_list}>
                    <div className={classes.rate_item}>
                        <StarIcon className={classes.item_star}/>
                        <StarIcon className={classes.item_star}/>
                        <StarIcon className={classes.item_star}/>
                        <StarIcon className={classes.item_star}/>
                        <StarIcon className={classes.item_star}/>
                    </div>
                    <div className={classes.rate_item}>
                        <StarIcon className={classes.item_star}/>
                        <StarIcon className={classes.item_star}/>
                        <StarIcon className={classes.item_star}/>
                        <StarIcon className={classes.item_star}/>
                        <StarBorderIcon className={classes.item_star} />
                        <div>trở lên</div>
                    </div>
                    <div className={classes.rate_item}>
                        <StarIcon className={classes.item_star}/>
                        <StarIcon className={classes.item_star}/>
                        <StarIcon className={classes.item_star}/>
                        <StarBorderIcon className={classes.item_star} />
                        <StarBorderIcon className={classes.item_star} />
                        <div>trở lên</div>
                    </div>
                    <div className={classes.rate_item}>
                        <StarIcon className={classes.item_star}/>
                        <StarIcon className={classes.item_star}/>
                        <StarBorderIcon className={classes.item_star} />
                        <StarBorderIcon className={classes.item_star} />
                        <StarBorderIcon className={classes.item_star} />
                        <div>trở lên</div>
                    </div>
                    <div className={classes.rate_item}>
                        <StarIcon className={classes.item_star}/>
                        <StarBorderIcon className={classes.item_star} />
                        <StarBorderIcon className={classes.item_star} />
                        <StarBorderIcon className={classes.item_star} />
                        <StarBorderIcon className={classes.item_star} />
                        <div>trở lên</div>
                    </div>
                </div>
            </div>

            <div className={classes.search_left__group}>
                <div className={classes.group_header}>{"Dịch Vụ & Khuyến Mãi"}</div>
                <div className={classes.category_list}>
                    {services.map(category => {
                        return (
                            <div className={classes.category_item} key={category.id}>
                                <FormControlLabel
                                    control={
                                    <Checkbox
                                        icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                                        checkedIcon={<CheckBoxIcon fontSize="small" />}
                                        name="checkedI"
                                    />
                                    }
                                    label={category.name}
                                />
                            </div>
                        )
                    })}
                </div>
                <div className={classes.group_dropdown}>
                    <div className={classes.group_dropdown__text}>Thêm</div>
                    <ExpandMoreIcon className={classes.group_dropdown__icon} />
                </div>
            </div>
            
            <button className={classes.delete_all}>XÓA TẤT CẢ</button>
        </div>
    );
};

export default withStyles(styles)(SearchLeftResource);