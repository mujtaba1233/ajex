import { createSlice } from "@reduxjs/toolkit";

import {
    getTransactionData, getClientInvoices, editClientInvoices, deleteClientInvoices, getPaymentSummary,
    editPaymentSummary, deletePaymentSummary, getUsers, addUsers, editUsers, addOrEditClientInvoices, deleteUsers, getProductList, deleteProductList, getPayments,
    editProductList, addPayment, editPayment, deletePayment
} from "./thunk";

export const initialState = {
    transactionList: [],
    clientInvoicesList: [],
    paymentSummaryList: [],
    usersList: [],
    isSuccess: false,
    productList: [],
    paymentList: [],
    error: {}
};

const InvoiceSlice: any = createSlice({
    name: "Invoice",
    initialState,
    reducers: {
        setIsSuccess: (state, action) => {
            state.isSuccess = action.payload
        }
    },

    extraReducers: (builder: any) => {
        //Invoice Transaction 
        builder.addCase(getTransactionData.fulfilled, (state: any, action: any) => {
            state.transactionList = action.payload;
        });
        builder.addCase(getTransactionData.rejected, (state: any, action: any) => {
            state.error = action.payload.error || null;
        });

        builder.addCase(getClientInvoices.fulfilled, (state: any, action: any) => {
            console.log(action.payload)
            state.clientInvoicesList = action.payload;
        });
        builder.addCase(getClientInvoices.rejected, (state: any, action: any) => {
            state.error = action.payload.error || null;
        });

        // edit
        builder.addCase(editClientInvoices.fulfilled, (state: any, action: any) => {
            state.clientInvoicesList = state.clientInvoicesList.map((invoice: any) =>
                invoice.id === action.payload.id
                    ? { ...invoice, ...action.payload }
                    : invoice
            )
        });

        builder.addCase(editClientInvoices.rejected, (state: any, action: any) => {
            state.error = action.payload.error || null;
        });

        builder.addCase(deleteClientInvoices.fulfilled, (state: any, action: any) => {
            state.clientInvoicesList = (state.clientInvoicesList || []).filter((invoice: any) => invoice.id !== action.payload.id);
        });
        builder.addCase(deleteClientInvoices.rejected, (state: any, action: any) => {
            state.error = action.payload.error || null;
        });

        builder.addCase(getPaymentSummary.fulfilled, (state: any, action: any) => {
            state.paymentSummaryList = action.payload;
        });

        builder.addCase(getPaymentSummary.rejected, (state: any, action: any) => {
            state.error = action.payload.error || null;
        });

        builder.addCase(editPaymentSummary.fulfilled, (state: any, action: any) => {
            state.paymentSummaryList = state.paymentSummaryList.map((paymentsummary: any) =>
                paymentsummary.id === action.payload.id
                    ? { ...paymentsummary, ...action.payload }
                    : paymentsummary
            )
        });

        builder.addCase(editPaymentSummary.rejected, (state: any, action: any) => {
            state.error = action.payload.error || null;
        });

        builder.addCase(deletePaymentSummary.fulfilled, (state: any, action: any) => {
            state.paymentSummaryList = (state.paymentSummaryList || []).filter((paymentSummery: any) => paymentSummery.id !== action.payload.id);
        });
        builder.addCase(deletePaymentSummary.rejected, (state: any, action: any) => {
            state.error = action.payload.error || null;
        });

        builder.addCase(getUsers.fulfilled, (state: any, action: any) => {
            state.usersList = action.payload;
        });

        // add users
        builder.addCase(addUsers.fulfilled, (state: any, action: any) => {
            state.usersList.push(action.payload);
        });
        builder.addCase(addUsers.rejected, (state: any, action: any) => {
            state.error = action.payload.error || null;

        });

        // add
        builder.addCase(addOrEditClientInvoices.fulfilled, (state: any, action: any) => {
            state.isSuccess = true;
        });
        builder.addCase(addOrEditClientInvoices.rejected, (state: any, action: any) => {
            state.isSuccess = false;

        });

        builder.addCase(getUsers.rejected, (state: any, action: any) => {
            state.error = action.payload.error || null;
        });

        builder.addCase(editUsers.fulfilled, (state: any, action: any) => {
            state.usersList = state.usersList.map((user: any) =>
                user.id === action.payload.id
                    ? { ...user, ...action.payload }
                    : user
            )
        });

        builder.addCase(editUsers.rejected, (state: any, action: any) => {
            state.error = action.payload.error || null;
        });

        builder.addCase(deleteUsers.fulfilled, (state: any, action: any) => {
            state.usersList = (state.usersList || []).filter((users: any) => users.id !== action.payload.id);
        });
        builder.addCase(deleteUsers.rejected, (state: any, action: any) => {
            state.error = action.payload.error || null;
        });

        builder.addCase(getProductList.fulfilled, (state: any, action: any) => {
            state.productList = action.payload;
        });

        builder.addCase(getProductList.rejected, (state: any, action: any) => {
            state.error = action.payload.error || null;
        });

        // edit
        builder.addCase(editProductList.fulfilled, (state: any, action: any) => {
            state.productList = state.productList.map((product: any) =>
                product.id === action.payload.id
                    ? { ...product, ...action.payload }
                    : product
            )
        });

        builder.addCase(editProductList.rejected, (state: any, action: any) => {
            state.error = action.payload.error || null;
        });

        builder.addCase(deleteProductList.fulfilled, (state: any, action: any) => {
            state.productList = (state.productList || []).filter((product: any) => product.id !== action.payload.id);
        });
        builder.addCase(deleteProductList.rejected, (state: any, action: any) => {
            state.error = action.payload.error || null;
        });

        builder.addCase(getPayments.fulfilled, (state: any, action: any) => {
            state.paymentList = action.payload;
        });


        builder.addCase(getPayments.rejected, (state: any, action: any) => {
            state.error = action.payload.error || null;
        });

        // add
        builder.addCase(addPayment.fulfilled, (state: any, action: any) => {
            state.paymentList.push(action.payload);
        });
        builder.addCase(addPayment.rejected, (state: any, action: any) => {
            state.error = action.payload.error || null;
        });

        builder.addCase(editPayment.fulfilled, (state: any, action: any) => {
            state.paymentList = state.paymentList.map((payment: any) =>
                payment.id === action.payload.id
                    ? { ...payment, ...action.payload }
                    : payment
            )
        });

        builder.addCase(editPayment.rejected, (state: any, action: any) => {
            state.error = action.payload.error || null;
        });

        builder.addCase(deletePayment.fulfilled, (state: any, action: any) => {
            state.paymentList = (state.paymentList || []).filter((payment: any) => payment.id !== action.payload.id);
        });
        builder.addCase(deletePayment.rejected, (state: any, action: any) => {
            state.error = action.payload.error || null;
        });
    }
})

export const { setIsSuccess } = InvoiceSlice.actions;

export default InvoiceSlice.reducer