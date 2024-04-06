

const URL = process.env.REACT_APP_API_URL
//REGISTER
export const POST_FAKE_REGISTER = "/auth/signup";

//LOGIN
export const POST_FAKE_LOGIN = "/auth/signin";
export const POST_FAKE_JWT_LOGIN =URL+ "/users/login";
export const POST_FAKE_PASSWORD_FORGET = "/auth/forgot-password";
export const POST_FAKE_JWT_PASSWORD_FORGET = "/jwt-forget-pwd";
export const SOCIAL_LOGIN = "/social-login";

//PROFILE
export const POST_EDIT_JWT_PROFILE = "/post-jwt-profile";
export const POST_EDIT_PROFILE = "/user";

//sellers
export const GET_TRANSACTIONS = "/get-transactions";

//Invoices
export const GET_CLIENT_INVOICES = URL + "/invoices/";
export const DELETE_CLIENT_INVOICES = "/delete-client-invoices";
export const EDIT_CLIENT_INVOICES = "/edit-client-invoices";
export const ADD_EDIT_CLIENT_INVOICES = URL +  "/invoices/addOrEditClientInvoices";

//Report

export const GET_PAYMENT_SUMMARY = "/get-payment-summary";
export const EDIT_PAYMENT_SUMMARY = "/edit-payment-summary";
export const DELETE_PAYMENT_SUMMARY = "/delete-payment-summary";

//Users
export const GET_USERS = URL + "/users";
export const ADD_USERS = URL +"/users";
export const EDIT_USERS = URL + "/users";
export const DELETE_USERS = URL + "/users";

//Product list
export const GET_PRODUCT_LIST = "/get-productlist";
export const EDIT_PRODUCT_LIST = "/edit-productlist";
export const DELETE_PRODUCT_LIST = "/delete-productlist";

//Payments
export const GET_PAYMENTS = "/get-payments";
export const ADD_PAYMENTS = "/add-payments";
export const EDIT_PAYMENTS = "/edit-payments";
export const DELETE_PAYMENTS = "/delete-payments";







