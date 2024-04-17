import { APIClient } from "./api_helper";

import * as url from "./url_helper"

const api = new APIClient();
// Gets the logged in user data from local session

// Gets the logged in user data from local session
export const getLoggedInUser = () => {
  const user = sessionStorage.getItem("user");
  if (user) return JSON.parse(user);
  return null;
};

// is user is logged in
export const isUserAuthenticated = () => {
  return getLoggedInUser() !== null;
};

// Register Method
export const postFakeRegister = (data: any) => api.create(url.POST_FAKE_REGISTER, data);

// Login Method
export const postFakeLogin = (data: any) => api.create(url.POST_FAKE_LOGIN, data);

// postForgetPwd
export const postFakeForgetPwd = (data: any) => api.create(url.POST_FAKE_PASSWORD_FORGET, data);

// Edit profile
export const postJwtProfile = (data: any) => api.create(url.POST_EDIT_JWT_PROFILE, data);

export const postFakeProfile = (data: any) => api.update(url.POST_EDIT_PROFILE + '/' + data.idx, data);

// Register Method
export const postJwtRegister = (url: any, data: any) => {
  return api.create(url, data)
    .catch((err: any) => {
      var message;
      if (err.response && err.response.status) {
        switch (err.response.status) {
          case 404:
            message = "Sorry! the page you are looking for could not be found";
            break;
          case 500:
            message = "Sorry! something went wrong, please contact our support team";
            break;
          case 401:
            message = "Invalid credentials";
            break;
          default:
            message = err[1];
            break;
        }
      }
      throw message;
    });
};


// Login Method
export const postJwtLogin = (data: any) => api.create(url.POST_FAKE_JWT_LOGIN, data);

// postForgetPwd
export const postJwtForgetPwd = (data: any) => api.create(url.POST_FAKE_JWT_PASSWORD_FORGET, data);

// postSocialLogin
export const postSocialLogin = (data: any) => api.create(url.SOCIAL_LOGIN, data);

export const getTransactionData = () => api.get(url.GET_TRANSACTIONS, null);


export const getClientInvoices = (data: any) => api.get(url.GET_CLIENT_INVOICES, data);
export const addOrEditClientInvoicesApi = (data: any) => api.create(url.ADD_EDIT_CLIENT_INVOICES, data);
export const editClientInvoices = (data: any) => api.put(url.ADD_EDIT_CLIENT_INVOICES, data);
export const deleteClientInvoices = (id: any) => api.delete(url.DELETE_CLIENT_INVOICES, { headers: { id } });

export const getPaymentSummary = () => api.get(url.GET_PAYMENT_SUMMARY, null);
export const editPaymentSummary = (data: any) => api.update(url.EDIT_PAYMENT_SUMMARY, data);
export const deletePaymentSummary = (id: any) => api.delete(url.DELETE_PAYMENT_SUMMARY, { headers: { id } });

export const getUsers = () => api.get(url.GET_USERS, null);
export const addUsers = (data: any) => api.create(url.ADD_USERS, data);
export const editUsers = (data: any) => api.update(url.EDIT_USERS, data);
export const deleteUsers = (id: any) => api.delete(url.DELETE_USERS, { headers: { id } });

export const getProductList = () => api.get(url.GET_PRODUCT_LIST, null);
export const editProductList = (data: any) => api.update(url.EDIT_PRODUCT_LIST, data);
export const deleteProductList = (id: any) => api.delete(url.DELETE_PRODUCT_LIST, { headers: { id } });

export const getPayments = () => api.get(url.GET_PAYMENTS, null);
export const addPayments = (data: any) => api.create(url.ADD_PAYMENTS, data);
export const editPayment = (data: any) => api.update(url.EDIT_PAYMENTS, data);
export const deletePayment = (id: any) => api.delete(url.DELETE_PAYMENTS, { headers: { id } });

