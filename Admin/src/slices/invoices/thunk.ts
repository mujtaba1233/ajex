import { createAsyncThunk } from "@reduxjs/toolkit";
import 'react-toastify/dist/ReactToastify.css';
import { toast } from "react-toastify";

import {
    getTransactionData as getTransactionDataApi,
    getClientInvoices as getClientInvoicesApi,
    editClientInvoices as editClientInvoicesApi,
    deleteClientInvoices as deleteClientInvoicesApi,
    getPaymentSummary as getPaymentSummaryApi,
    editPaymentSummary as editPaymentSummaryApi,
    deletePaymentSummary as deletePaymentSummaryApi,
    getUsers as getUsersApi,
    addUsers as addUsersApi,
    editUsers as editUsersApi,
    deleteUsers as deleteUsersApi,
    getProductList as getProductListApi,
    editProductList as editProductListApi,
    deleteProductList as deleteProductListApi,
    getPayments as getPaymentsApi,
    addPayments as addPaymentsApi,
    editPayment as editPaymentApi,
    deletePayment as deletePaymentApi,
    addOrEditClientInvoicesApi
  } from "../../helpers/fakebackend_helper"


export const getTransactionData = createAsyncThunk("invoice/getTransactionData", async () => {
    try {
      const response = getTransactionDataApi();
        return response;
    } catch (error) {
        return error;
    }
});

export const getClientInvoices = createAsyncThunk("invoice/getInvoices", async () => {
  try {
    const response = getClientInvoicesApi();
      return response;
  } catch (error) {
      return error;
  }
});

export const editClientInvoices = createAsyncThunk("invoice/editClientInvoices", async (invoice: any) => {
  try {
      const response = editClientInvoicesApi(invoice);
      const data = await response;
      toast.success("Invoices edited Successfully", { autoClose: 2000 });
      return data;
  } catch (error) {
      toast.error("Invoices edited Failed", { autoClose: 2000 });
      return error;
  }
});

export const addOrEditClientInvoices = createAsyncThunk("invoice/addOrEditClientInvoices", async (invoice: any) => {
  try {
      const response = addOrEditClientInvoicesApi(invoice);
      const data = await response;
      toast.success("Invoices edited Successfully", { autoClose: 2000 });
      return data;
  } catch (error) {
      toast.error("Invoices edited Failed", { autoClose: 2000 });
      return error;
  }
});

export const deleteClientInvoices = createAsyncThunk("invoice/deleteClientInvoices", async (id: any) => {
  try {
      const response = deleteClientInvoicesApi(id);
      toast.success("Invoice Deleted Successfully", { autoClose: 2000 });
      return { id, ...response };
  } catch (error) {
      toast.error("Invoice Deleted Failed", { autoClose: 2000 });
      return error;
  }
});


export const getPaymentSummary = createAsyncThunk("invoice/getPaymentSummary", async () => {
  try {
    const response = getPaymentSummaryApi();
      return response;
  } catch (error) {
      return error;
  }
});

export const editPaymentSummary = createAsyncThunk("invoice/editPaymentSummary", async (paymentsummary: any) => {
  try {
      const response = editPaymentSummaryApi(paymentsummary);
      const data = await response;
      toast.success("Payment summary edited Successfully", { autoClose: 2000 });
      return data;
  } catch (error) {
      toast.error("Payment summary edited Updated Failed", { autoClose: 2000 });
      return error;
  }
});

export const deletePaymentSummary = createAsyncThunk("invoice/deletePaymentSummary", async (id: any) => {
  try {
      const response = deletePaymentSummaryApi(id);
      toast.success("Payment Summary Report Deleted Successfully", { autoClose: 2000 });
      return { id, ...response };
  } catch (error) {
      toast.error("Payment Summary Report Deleted Failed", { autoClose: 2000 });
      return error;
  }
});

export const getUsers = createAsyncThunk("invoice/getUsers", async () => {
  try {
    const response = getUsersApi();
      return response;
  } catch (error) {
      return error;
  }
});

export const addUsers = createAsyncThunk("invoice/addUsers", async (user: any) => {
  try {
      const response = addUsersApi(user);
      const data = await response;
      toast.success("Invoices Added Successfully", { autoClose: 2000 });
      return data;
  } catch (error) {
      toast.error("Invoices Added Failed", { autoClose: 2000 });
      return error;
  }
});

export const editUsers = createAsyncThunk("invoice/editUsers", async (user: any) => {
  try {
      const response = editUsersApi(user);
      const data = await response;
      toast.success("User edited Successfully", { autoClose: 2000 });
      return data;
  } catch (error) {
      toast.error("User edited Failed", { autoClose: 2000 });
      return error;
  }
});

export const deleteUsers = createAsyncThunk("invoice/deleteUsers", async (id: any) => {
  try {
      const response = deleteUsersApi(id);
      toast.success("User deleted Successfully", { autoClose: 2000 });
      return { id, ...response };
  } catch (error) {
      toast.error("User deleted Failed", { autoClose: 2000 });
      return error;
  }
});

export const getProductList = createAsyncThunk("invoice/getProductList", async () => {
  try {
    const response = getProductListApi();
      return response;
  } catch (error) {
      return error;
  }
});

export const editProductList = createAsyncThunk("invoice/editProductList", async (product: any) => {
  try {
      const response = editProductListApi(product);
      const data = await response;
      toast.success("Product edited Successfully", { autoClose: 2000 });
      return data;
  } catch (error) {
      toast.error("Product edited Failed", { autoClose: 2000 });
      return error;
  }
});

export const deleteProductList = createAsyncThunk("invoice/deleteProductList", async (id: any) => {
  try {
      const response = deleteProductListApi(id);
      toast.success("Product deleted Successfully", { autoClose: 1000 });
      return { id, ...response };
  } catch (error) {
      toast.error("Product deleted Failed", { autoClose: 1000 });
      return error;
  }
});

export const getPayments = createAsyncThunk("invoice/getPayments", async () => {
  try {
    const response = getPaymentsApi();
      return response;
  } catch (error) {
      return error;
  }
});

export const addPayment = createAsyncThunk("invoice/addPayment", async (user: any) => {
  try {
      const response = addPaymentsApi(user);
      const data = await response;
      toast.success("Payment added Successfully", { autoClose: 2000 });
      return data;
  } catch (error) {
      toast.error("Payment added Failed", { autoClose: 2000 });
      return error;
  }
});

export const editPayment = createAsyncThunk("invoice/editPayment", async (payment: any) => {
  try {
      const response = editPaymentApi(payment);
      const data = await response;
      toast.success("Payment edited Successfully", { autoClose: 2000 });
      return data;
  } catch (error) {
      toast.error("Payment edited Failed", { autoClose: 2000 });
      return error;
  }
});

export const deletePayment = createAsyncThunk("invoice/deletePayment", async (id: any) => {
  try {
      const response = deletePaymentApi(id);
      toast.success("Payment deleted Successfully", { autoClose: 1000 });
      return { id, ...response };
  } catch (error) {
      toast.error("Payment deleted Failed", { autoClose: 1000 });
      return error;
  }
});