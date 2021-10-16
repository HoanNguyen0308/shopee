import React, {useState} from "react";
import theme from "./theme";
import { ThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import ForgetPassword from "./pages/ForgetPassword";
import LoginSMS from "./pages/LoginSMS";
import Profile from "./pages/Profile";
import PurchaseOrderProfile from "./pages/PurchaseOrderProfile";
import StoreVoucherProfile from "./pages/StoreVoucherProfile";
import ShopeeXuProfile from "./pages/ShopeeXuProfile";
import PaymentProfile from "./pages/PaymentProfile";
import AddressProfile from "./pages/AddressProfile";
import ChangePasswordProfile from "./pages/ChangePasswordProfile";
import ProductDetail from "./pages/ProductDetail";
import MyPhone from "./pages/MyPhone";
import OrderUpdate from "./pages/OrderUpdate";
import OrderSale from "./pages/OrderSale";
import WalletUpdate from "./pages/WalletUpdate";
import ActionComment from "./pages/ActionComment";
import ReviewUpdate from "./pages/ReviewUpdate";
import ShopeeUpdate from "./pages/ShopeeUpdate";
import Chat from './components/Chat';
import ShopeeCart from "./pages/ShopeeCart";
import ResourceSearch from "./pages/ResourceSearch";
import ShopeeStore from "./pages/ShopeeStore";
import FlashSale from "./pages/FlashSale";

// Screens
import Navbar from "./components/Cart/Screens/Navbar";
import SideDrawer from "./components/Cart/Screens/SideDrawer";
import Backdrop from "./components/Cart/Screens/Backdrop";
import HomeScreen from "./components/Cart/Screens/HomeScreen";
import CartScreen from "./components/Cart/Screens/CartScreen";
import ProductScreen from "./components/Cart/Screens/ProductScreen";

function App() {
  	const [sideToggle, setSideToggle] = useState(false);

  	return (
		<ThemeProvider theme={theme}>
	  		<Router>
				<div className="App">
					{/* <Navbar click={() => setSideToggle(true)} />
					<SideDrawer show={sideToggle} click={() => setSideToggle(false)} />
					<Backdrop show={sideToggle} click={() => setSideToggle(false)} /> */}
					<Switch>
						<Route exact path="/home" component={HomeScreen} />
						<Route exact path="/product/:id" component={ProductScreen} />
						<Route exact path="/cart" component={CartScreen} />

						<Route path="/" component={Home} exact/>
						<Route path="/register" component={Register} />
						<Route path="/login" component={Login} />
						<Route path="/forget-password" component={ForgetPassword} />
						<Route path="/login-sms" component={LoginSMS} />
						<Route path="/profile" component={Profile} />
						<Route path="/purchase-order-profile" component={PurchaseOrderProfile} />
						<Route path="/store-voucher-profile" component={StoreVoucherProfile} />
						<Route path="/shopee-xu-profile" component={ShopeeXuProfile} />
						<Route path="/payment-profile" component={PaymentProfile} />
						<Route path="/address-profile" component={AddressProfile} />
						<Route path="/change-password-profile" component={ChangePasswordProfile} />
						<Route path="/product-detail" component={ProductDetail} />
						<Route path="/add-phone-profile" component={MyPhone} />
						<Route path="/order-update" component={OrderUpdate} />
						<Route path="/order-sale" component={OrderSale} />
						<Route path="/wallet-update" component={WalletUpdate} />
						<Route path="/action-comment" component={ActionComment} />
						<Route path="/review-update" component={ReviewUpdate} />
						<Route path="/shopee-update" component={ShopeeUpdate} />
						<Route path="/shopee-cart" component={ShopeeCart} />
						<Route path="/resource-search" component={ResourceSearch} />
						<Route path="/shopee-store" component={ShopeeStore} />
						<Route path="/flash-sale" component={FlashSale} />
					</Switch>
					<Chat />
				</div>
	  		</Router>
		</ThemeProvider> 
  	);
}

export default App;
