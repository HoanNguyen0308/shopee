import roles from "roles";

import Register from "../pages/Register";
import Login from "../pages/Login";
import Home from "../pages/Home";
import ForgetPassword from "../pages/ForgetPassword";

const route = () => {
    return [
        {
            component: Home,
            path: "/",
            permission: [roles.admin, roles.user],
        },
        {
            component: Register,
            path: "/register",
            permission: [roles.admin, roles.user],
        },
        {
            component: Login,
            path: "/login",
            permission: [roles.admin, roles.user],
        },
        {
            component: ForgetPassword,
            path: "/forget-password",
            permission: [roles.admin, roles.user],
        }
    ]
}

export default route;