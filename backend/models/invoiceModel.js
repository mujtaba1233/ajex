const mongoose = require('mongoose');

const invoiceSchema = new mongoose.Schema({
    invoiceNumber: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    priority: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    typeOfExpense: {
        type: String,
        required: true
    },
    expenseType: {
        type: String,
        required: true
    },
    lineOfBusiness: {
        type: String,
        required: true
    },
    departmentName: {
        type: String,
        required: true
    },
    userId: {
        type: mongoose.Types.ObjectId,
        required: [true, 'Please add a password'],
        ref: "User"
    },
    description: {
        type: String,
        required: true
    },
    supplierId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Supplier'
    },
    attachments: [{ name: String, data: String, contentType: String }] // Array of attachments with name and base64 data
}, {
    timestamps: true
});

const Invoice = mongoose.model('Invoice', invoiceSchema);

module.exports = Invoice;
