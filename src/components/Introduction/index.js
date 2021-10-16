import React from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles.js";
import { NavLink } from "react-router-dom";

const Introduction = (props) => {
    const { classes } = props;

    return (
        <div className={classes.container}>
            <div className={classes.introduction}>
                <div className={classes.introduction_block}>
                    <h3 className={classes.introduction_title}>SHOPEE - GÌ CŨNG CÓ, MUA HẾT Ở SHOPEE</h3>
                    <span className={classes.introduction_description}>Shopee - ứng dụng mua sắm trực tuyến thú vị, tin cậy, an toàn và miễn phí! Shopee là nền tảng giao dịch trực tuyến hàng đầu ở Đông Nam Á, Việt Nam, Singapore, Malaysia, Indonesia, Thái Lan, Philipin, Đài loan và Brazil. Với sự đảm bảo của Shopee, bạn sẽ mua hàng trực tuyến an tâm và nhanh chóng hơn bao giờ hết!</span>
                </div>
                <div className={classes.introduction_block}>
                    <h3 className={classes.introduction_title}>MUA SẮM VÀ BÁN HÀNG ONLINE ĐƠN GIẢN, NHANH CHÓNG VÀ AN TOÀN</h3>
                    <span className={classes.introduction_description}>Nếu bạn đang tìm kiếm một trang web để mua và bán hàng trực tuyến thì Shopee.vn là một sự lựa chọn tuyệt vời dành cho bạn. Bản chất của Shopee là một social E-commerce platform - nền tảng trang web thương mại điện tử tích hợp mạng xã hội. Điều này cho phép người mua và người bán hàng dễ dàng tương tác, trao đổi thông tin về sản phẩm và chương trình khuyến mãi của shop. Nhờ nền tảng đó, việc mua bán trên Shopee trở nên nhanh chóng và đơn giản hơn. Bạn có thể trò chuyện trực tiếp với nhà bán hàng để hỏi trực tiếp về mặt hàng cần mua. Còn nếu bạn muốn tìm mua những dòng sản phẩm chính hãng, uy tín, Shopee Mall chính là sự lựa chọn lí tưởng dành cho bạn. Đến với Shopee, cơ hội để trở thành một nhà bán hàng dễ dàng hơn bao giờ hết. Chỉ với vài thao tác trên ứng dụng, bạn đã có thể đăng bán ngay những sản phẩm của mình. Không những thế, các nhà bán hàng có thể tùy chọn các tính năng “Shop tạm nghỉ” hoặc tự tạo chương trình khuyến mãi trên Shopee để thu hút người mua với những sản phẩm có mức giá hấp dẫn. Khi đăng nhập tại Shopee Kênh người bán, bạn có thể dễ dàng phân loại sản phẩm, theo dõi đơn hàng, chăm sóc khách hàng và cập nhập ngay các hoạt động của shop.</span>
                </div>
                <div className={classes.introduction_block}>
                    <h3 className={classes.introduction_title}>TẢI ỨNG DỤNG SHOPEE NGAY ĐỂ MUA BÁN ONLINE MỌI LÚC, MỌI NƠI</h3>
                    <span className={classes.introduction_description}>Ưu điểm của ứng dụng Shopee là cho phép bạn mua và bán hàng mọi lúc, mọi nơi. Bạn có thể tải ứng dụng Shopee cũng như đăng sản phẩm bán hàng một cách nhanh chóng và tiện lợi. Ngoài ra, ứng dụng Shopee còn có những ưu điểm sau: - Giao diện thân thiện, đơn giản, dễ sử dụng. Bạn sẽ dễ dàng thấy được ngay những sản phẩm nổi bật cũng như dễ dàng tìm đến các ô tìm kiếm, giỏ hàng hoặc tính năng chat liền tay. - Ứng dụng tích hợp công nghệ quản lý đơn mua và bán hàng tiện lợi trên cùng một tài khoản. Bạn sẽ vừa là người mua hàng, vừa là người bán hàng rất linh hoạt, dễ dàng. - Cập nhập thông tin khuyến mãi, Shopee flash sale nhanh chóng và liên tục. Tại Shopee, bạn có thể lấy các mã giảm giá Shopee và mã miễn phí vận chuyển toàn quốc. Bên cạnh đó, Shopee cũng sẽ có những chiến dịch khuyến mãi lớn hằng năm như Siêu hội mua sắm 4.4, Shopee 9.9 sale, Shopee 10.10 sale, Shopee 11.11 sale, Shopee 12.12 sale, Shopee Tết Sale. Đây là thời điểm để người mua hàng có thể nhanh tay chọn ngay cho mình những mặt hàng ưa thích với mức giá giảm kỉ lục.</span>
                </div>
                <div className={classes.introduction_block}>
                    <h3 className={classes.introduction_title}>MUA HÀNG HIỆU CAO CẤP GIÁ TỐT TẠI SHOPEE</h3>
                    <span className={classes.introduction_description}>Bên cạnh Shopee Premium, Shopee còn có rất nhiều khuyến mãi khủng cho hàng hiệu giảm đến 50%. Cộng với mã giao hàng miễn phí, Shopee cũng có các mã giảm giá được phân phối mỗi tháng từ rất nhiều gian hàng chính hãng tham gia chương trình khuyến mãi này. Bên cạnh đó, Shopee còn tập hợp rất nhiều thương hiệu đình đám được các nhà bán lẻ uy tín phân phối bán trên Shopee, đem đến cho bạn sự lựa chọn đa dạng, từ các hãng mỹ phẩm nổi tiếng hàng đầu như Kiehl's, Fresh, The Ordinary, Foreo, Transino, SK-II... Đến những thương hiệu công nghệ nổi tiếng như camera hành trình Gopro, loa Marshall, bảng vẽ điện tử Huion, máy quay DJI Osmo Pocket, loa Harman Kardon, Razer... </span>
                </div>
            </div>
            <div className={classes.category}>
                <div className={classes.category_heading}>Danh Mục</div>
                <div className={classes.category_content}>
                    <div className={classes.category_parent}>
                        <div className={classes.parent_title__wrap}>
                            <NavLink to="/category" className={classes.parent_title}>THỜI TRANG NAM</NavLink>
                        </div>
                        <div className={classes.child_list}>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Áo khoác</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Áo Vest và Blazer</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>{"Áo Hoodie, Áo len & Áo nỉ "}</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Quần Jeans</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Quần Dài/Quần Âu</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Quần Short</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Áo</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Áo Ba Lỗ</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Đồ lót</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Đồ Ngủ</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Đồ Bộ</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Vớ/Tất</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Trang Phục Truyền Thống</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Đồ Hóa Trang</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Trang Phục Ngành Nghề</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Khác</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Trang Sức Nam</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Kính Mắt Nam</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Thắt Lưng Nam</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>{"Cà Vạt & Nơ Cổ"}</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Phụ Kiện Nam</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                        </div>
                        <div className={classes.parent_title__wrap}>
                            <NavLink to="/category" className={classes.parent_title}>NHÀ CỬA VÀ ĐỜI SỐNG</NavLink>
                        </div>
                        <div className={classes.child_list}>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Áo khoác</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Áo Vest và Blazer</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>{"Áo Hoodie, Áo len & Áo nỉ "}</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Quần Jeans</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Quần Dài/Quần Âu</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Quần Short</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Áo</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Áo Ba Lỗ</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Đồ lót</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Đồ Ngủ</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Đồ Bộ</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Vớ/Tất</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Trang Phục Truyền Thống</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Đồ Hóa Trang</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Trang Phục Ngành Nghề</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Khác</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Trang Sức Nam</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Kính Mắt Nam</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Thắt Lưng Nam</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>{"Cà Vạt & Nơ Cổ"}</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Phụ Kiện Nam</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                        </div>
                        <div className={classes.parent_title__wrap}>
                            <NavLink to="/category" className={classes.parent_title}>BALO VÀ TÚI VÍ NAM</NavLink>
                        </div>
                        <div className={classes.child_list}>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Áo khoác</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Áo Vest và Blazer</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>{"Áo Hoodie, Áo len & Áo nỉ "}</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Quần Jeans</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Quần Dài/Quần Âu</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Quần Short</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Áo</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Áo Ba Lỗ</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Đồ lót</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Đồ Ngủ</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Đồ Bộ</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Vớ/Tất</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Trang Phục Truyền Thống</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Đồ Hóa Trang</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Trang Phục Ngành Nghề</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Khác</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Trang Sức Nam</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Kính Mắt Nam</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Thắt Lưng Nam</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>{"Cà Vạt & Nơ Cổ"}</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Phụ Kiện Nam</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                        </div>

                    </div>
                    <div className={classes.category_parent}>
                        <div className={classes.parent_title__wrap}>
                            <NavLink to="/category" className={classes.parent_title}>THỜI TRANG NAM</NavLink>
                        </div>
                        <div className={classes.child_list}>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Áo khoác</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Áo Vest và Blazer</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>{"Áo Hoodie, Áo len & Áo nỉ "}</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Quần Jeans</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Quần Dài/Quần Âu</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Quần Short</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Áo</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Áo Ba Lỗ</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Đồ lót</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Đồ Ngủ</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Đồ Bộ</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Vớ/Tất</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Trang Phục Truyền Thống</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Đồ Hóa Trang</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Trang Phục Ngành Nghề</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Khác</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Trang Sức Nam</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Kính Mắt Nam</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Thắt Lưng Nam</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>{"Cà Vạt & Nơ Cổ"}</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Phụ Kiện Nam</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                        </div>
                        <div className={classes.parent_title__wrap}>
                            <NavLink to="/category" className={classes.parent_title}>NHÀ CỬA VÀ ĐỜI SỐNG</NavLink>
                        </div>
                        <div className={classes.child_list}>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Áo khoác</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Áo Vest và Blazer</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>{"Áo Hoodie, Áo len & Áo nỉ "}</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Quần Jeans</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Quần Dài/Quần Âu</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Quần Short</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Áo</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Áo Ba Lỗ</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Đồ lót</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Đồ Ngủ</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Đồ Bộ</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Vớ/Tất</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Trang Phục Truyền Thống</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Đồ Hóa Trang</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Trang Phục Ngành Nghề</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Khác</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Trang Sức Nam</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Kính Mắt Nam</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Thắt Lưng Nam</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>{"Cà Vạt & Nơ Cổ"}</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Phụ Kiện Nam</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                        </div>
                        <div className={classes.parent_title__wrap}>
                            <NavLink to="/category" className={classes.parent_title}>BALO VÀ TÚI VÍ NAM</NavLink>
                        </div>
                        <div className={classes.child_list}>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Áo khoác</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Áo Vest và Blazer</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>{"Áo Hoodie, Áo len & Áo nỉ "}</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Quần Jeans</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Quần Dài/Quần Âu</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Quần Short</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Áo</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Áo Ba Lỗ</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Đồ lót</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Đồ Ngủ</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Đồ Bộ</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Vớ/Tất</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Trang Phục Truyền Thống</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Đồ Hóa Trang</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Trang Phục Ngành Nghề</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Khác</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Trang Sức Nam</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Kính Mắt Nam</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Thắt Lưng Nam</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>{"Cà Vạt & Nơ Cổ"}</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Phụ Kiện Nam</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                        </div>

                    </div>
                    <div className={classes.category_parent}>
                        <div className={classes.parent_title__wrap}>
                            <NavLink to="/category" className={classes.parent_title}>THỜI TRANG NAM</NavLink>
                        </div>
                        <div className={classes.child_list}>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Áo khoác</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Áo Vest và Blazer</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>{"Áo Hoodie, Áo len & Áo nỉ "}</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Quần Jeans</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Quần Dài/Quần Âu</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Quần Short</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Áo</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Áo Ba Lỗ</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Đồ lót</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Đồ Ngủ</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Đồ Bộ</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Vớ/Tất</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Trang Phục Truyền Thống</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Đồ Hóa Trang</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Trang Phục Ngành Nghề</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Khác</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Trang Sức Nam</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Kính Mắt Nam</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Thắt Lưng Nam</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>{"Cà Vạt & Nơ Cổ"}</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Phụ Kiện Nam</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                        </div>
                        <div className={classes.parent_title__wrap}>
                            <NavLink to="/category" className={classes.parent_title}>NHÀ CỬA VÀ ĐỜI SỐNG</NavLink>
                        </div>
                        <div className={classes.child_list}>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Áo khoác</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Áo Vest và Blazer</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>{"Áo Hoodie, Áo len & Áo nỉ "}</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Quần Jeans</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Quần Dài/Quần Âu</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Quần Short</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Áo</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Áo Ba Lỗ</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Đồ lót</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Đồ Ngủ</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Đồ Bộ</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Vớ/Tất</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Trang Phục Truyền Thống</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Đồ Hóa Trang</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Trang Phục Ngành Nghề</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Khác</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Trang Sức Nam</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Kính Mắt Nam</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Thắt Lưng Nam</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>{"Cà Vạt & Nơ Cổ"}</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Phụ Kiện Nam</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                        </div>
                        <div className={classes.parent_title__wrap}>
                            <NavLink to="/category" className={classes.parent_title}>BALO VÀ TÚI VÍ NAM</NavLink>
                        </div>
                        <div className={classes.child_list}>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Áo khoác</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Áo Vest và Blazer</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>{"Áo Hoodie, Áo len & Áo nỉ "}</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Quần Jeans</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Quần Dài/Quần Âu</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Quần Short</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Áo</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Áo Ba Lỗ</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Đồ lót</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Đồ Ngủ</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Đồ Bộ</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Vớ/Tất</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Trang Phục Truyền Thống</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Đồ Hóa Trang</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Trang Phục Ngành Nghề</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Khác</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Trang Sức Nam</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Kính Mắt Nam</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Thắt Lưng Nam</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>{"Cà Vạt & Nơ Cổ"}</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Phụ Kiện Nam</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                        </div>

                    </div>
                    <div className={classes.category_parent}>
                        <div className={classes.parent_title__wrap}>
                            <NavLink to="/category" className={classes.parent_title}>THỜI TRANG NAM</NavLink>
                        </div>
                        <div className={classes.child_list}>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Áo khoác</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Áo Vest và Blazer</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>{"Áo Hoodie, Áo len & Áo nỉ "}</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Quần Jeans</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Quần Dài/Quần Âu</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Quần Short</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Áo</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Áo Ba Lỗ</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Đồ lót</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Đồ Ngủ</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Đồ Bộ</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Vớ/Tất</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Trang Phục Truyền Thống</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Đồ Hóa Trang</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Trang Phục Ngành Nghề</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Khác</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Trang Sức Nam</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Kính Mắt Nam</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Thắt Lưng Nam</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>{"Cà Vạt & Nơ Cổ"}</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Phụ Kiện Nam</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                        </div>
                        <div className={classes.parent_title__wrap}>
                            <NavLink to="/category" className={classes.parent_title}>NHÀ CỬA VÀ ĐỜI SỐNG</NavLink>
                        </div>
                        <div className={classes.child_list}>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Áo khoác</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Áo Vest và Blazer</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>{"Áo Hoodie, Áo len & Áo nỉ "}</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Quần Jeans</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Quần Dài/Quần Âu</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Quần Short</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Áo</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Áo Ba Lỗ</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Đồ lót</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Đồ Ngủ</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Đồ Bộ</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Vớ/Tất</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Trang Phục Truyền Thống</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Đồ Hóa Trang</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Trang Phục Ngành Nghề</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Khác</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Trang Sức Nam</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Kính Mắt Nam</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Thắt Lưng Nam</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>{"Cà Vạt & Nơ Cổ"}</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Phụ Kiện Nam</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                        </div>
                        <div className={classes.parent_title__wrap}>
                            <NavLink to="/category" className={classes.parent_title}>BALO VÀ TÚI VÍ NAM</NavLink>
                        </div>
                        <div className={classes.child_list}>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Áo khoác</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Áo Vest và Blazer</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>{"Áo Hoodie, Áo len & Áo nỉ "}</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Quần Jeans</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Quần Dài/Quần Âu</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Quần Short</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Áo</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Áo Ba Lỗ</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Đồ lót</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Đồ Ngủ</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Đồ Bộ</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Vớ/Tất</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Trang Phục Truyền Thống</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Đồ Hóa Trang</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Trang Phục Ngành Nghề</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Khác</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Trang Sức Nam</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Kính Mắt Nam</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Thắt Lưng Nam</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>{"Cà Vạt & Nơ Cổ"}</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Phụ Kiện Nam</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                        </div>

                    </div>
                    <div className={classes.category_parent}>
                        <div className={classes.parent_title__wrap}>
                            <NavLink to="/category" className={classes.parent_title}>THỜI TRANG NAM</NavLink>
                        </div>
                        <div className={classes.child_list}>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Áo khoác</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Áo Vest và Blazer</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>{"Áo Hoodie, Áo len & Áo nỉ "}</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Quần Jeans</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Quần Dài/Quần Âu</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Quần Short</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Áo</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Áo Ba Lỗ</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Đồ lót</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Đồ Ngủ</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Đồ Bộ</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Vớ/Tất</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Trang Phục Truyền Thống</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Đồ Hóa Trang</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Trang Phục Ngành Nghề</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Khác</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Trang Sức Nam</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Kính Mắt Nam</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Thắt Lưng Nam</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>{"Cà Vạt & Nơ Cổ"}</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Phụ Kiện Nam</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                        </div>
                        <div className={classes.parent_title__wrap}>
                            <NavLink to="/category" className={classes.parent_title}>NHÀ CỬA VÀ ĐỜI SỐNG</NavLink>
                        </div>
                        <div className={classes.child_list}>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Áo khoác</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Áo Vest và Blazer</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>{"Áo Hoodie, Áo len & Áo nỉ "}</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Quần Jeans</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Quần Dài/Quần Âu</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Quần Short</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Áo</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Áo Ba Lỗ</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Đồ lót</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Đồ Ngủ</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Đồ Bộ</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Vớ/Tất</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Trang Phục Truyền Thống</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Đồ Hóa Trang</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Trang Phục Ngành Nghề</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Khác</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Trang Sức Nam</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Kính Mắt Nam</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Thắt Lưng Nam</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>{"Cà Vạt & Nơ Cổ"}</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Phụ Kiện Nam</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                        </div>
                        <div className={classes.parent_title__wrap}>
                            <NavLink to="/category" className={classes.parent_title}>BALO VÀ TÚI VÍ NAM</NavLink>
                        </div>
                        <div className={classes.child_list}>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Áo khoác</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Áo Vest và Blazer</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>{"Áo Hoodie, Áo len & Áo nỉ "}</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Quần Jeans</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Quần Dài/Quần Âu</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Quần Short</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Áo</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Áo Ba Lỗ</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Đồ lót</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Đồ Ngủ</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Đồ Bộ</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Vớ/Tất</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Trang Phục Truyền Thống</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Đồ Hóa Trang</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Trang Phục Ngành Nghề</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Khác</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Trang Sức Nam</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Kính Mắt Nam</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Thắt Lưng Nam</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>{"Cà Vạt & Nơ Cổ"}</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                            <div className={classes.child_item}>
                                <NavLink to="/category" className={classes.child_item__link}>Phụ Kiện Nam</NavLink>
                            </div>
                            <span>&nbsp;|&nbsp;</span>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default withStyles(styles)(Introduction);
