const express = require('express');
const router = express.Router();
const Invoice = require('../models/invoiceModel'); // Import the Invoice model
const Supplier = require('../models/supplierModel');
const { default: mongoose } = require('mongoose');
const { protect } = require('../middleware/authMiddleware');
const User = require('../models/userModel');

// Route for getting all invoices
router.get('/', protect, async (req, res) => {

    console.log("Hi mon")
    try {
        const user = await User.findById(req.user._id).populate('role');
    
        let invoices;
        if (user.role.name === 'Super Admin' || user.role.name === 'Admin') {
            invoices = await Invoice.find().populate('userId').select('-attachments');
        } else {
            invoices = await Invoice.find({ user: req.user._id }).select('-attachments');
        }
    
        res.json(invoices);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
    
});

router.get('/:id', protect, async (req, res) => {
    try {
        const invoice = await Invoice.findById(req.params.id).populate('supplierId');
        if (!invoice) {
            return res.status(404).json({ message: "Invoice not found" });
        }
        res.json(invoice);
    } catch (error) {
        console.error("Error fetching invoice:", error);
        if (error instanceof mongoose.Error.CastError) {
            return res.status(400).json({ message: "Invalid invoice ID" });
        }
        res.status(500).json({ message: "Internal Server Error" });
    }
});

// Route for creating a new invoice
router.post('/addOrEditClientInvoices', protect,  async (req, res) => {
    const { invoiceDetail, supplierInformation, additionalInformation } = req.body;
    try {
        let supplierId;

        // Check if the supplier with the given VAT number exists
        const supplier = await Supplier.findOne({ supplierVatNumber: supplierInformation.supplierVatNumber });
        const user = req.user;
        if (supplier) {
            // If the supplier exists, update its information
            supplier.set({ ...supplierInformation });
            await supplier.save();
            supplierId = supplier._id;
        } else {
            // If the supplier does not exist, create a new one
            const newSupplier = new Supplier({ ...supplierInformation });
            await newSupplier.save();
            supplierId = newSupplier._id;
        }

        // If the ID is present, update the existing invoice; otherwise, create a new one
        const invoice = invoiceDetail.id ?
            await Invoice.findOneAndUpdate(
                { _id: invoiceDetail.id },
                { $set: {...additionalInformation, ...invoiceDetail, supplierId } },
                { new: true }
            ) :
            new Invoice({ ...additionalInformation, ...invoiceDetail, userId:user._id, supplierId, invoiceNumber: `INV-${Date.now()}` });

        // Save attachments if provided
        if (additionalInformation.attachments && additionalInformation.attachments.length > 0) {
            invoice.attachments = additionalInformation.attachments;
        }

        await invoice.save();
        res.status(200).json({ message: "Invoice saved successfully", invoice });
    } catch (err) {
        console.error("Error saving invoice:", err);
        res.status(400).json({ message: "Error saving invoice", error: err.message });
    }
});


module.exports = router;
