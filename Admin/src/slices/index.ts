import { combineReducers } from "redux";

// Front
import LayoutReducer from "./layouts/reducer";

//Invoice
import InvoiceReducer from "./invoices/reducer";

//authantication
import LoginReducer from "./login/reducer";
import AccountReducer from "./register/reducer";
import ForgetPasswordReducer from './forgetpwd/reducer';
import ProfileReducer from "./profile/reducer";


const rootReducer = combineReducers ({
    Layout: LayoutReducer,
    Invoice : InvoiceReducer,
    Login: LoginReducer,
    Account: AccountReducer,
    ForgetPassword: ForgetPasswordReducer,
    Profile: ProfileReducer,
})


export default rootReducer