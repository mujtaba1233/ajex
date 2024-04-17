const express = require('express');
const router = express.Router();
const Invoice = require('../models/invoiceModel'); // Import the converted Invoice model
const Supplier = require('../models/supplierModel'); // Import the converted Supplier model
const { protect } = require('../middleware/authMiddleware');
const { Op } = require('sequelize');
const User = require('../models/userModel'); // Import the converted User model
const Role = require('../models/roleModel');
const sequelize = require('sequelize');



router.get('/structure', protect, async (req, res) => {
    try {
        const user = await User.findByPk(req.user.id, { include: 'Role' });

        // Get the current year
        const currentYear = new Date().getFullYear();

        let invoices;
        if (user.Role.name === 'Super Admin' || user.Role.name === 'Admin') {
            invoices = await Invoice.findAll({
                where: sequelize.where(sequelize.fn('YEAR', sequelize.col('createdAt')), currentYear),
                attributes: [
                    [sequelize.literal(`SUM(CASE WHEN status = 'Pending' THEN 1 ELSE 0 END)`), 'totalPending'],
                    [sequelize.literal(`SUM(CASE WHEN status = 'Approved' THEN 1 ELSE 0 END)`), 'totalApproved'],
                    [sequelize.literal(`SUM(CASE WHEN status = 'Declined' THEN 1 ELSE 0 END)`), 'totalDeclined']
                ]
            });
        } else {
            invoices = await Invoice.findAll({
                where: {
                    userId: req.user.id,
                    createdAt: {
                        [Op.between]: [new Date(currentYear, 0), new Date(currentYear, 11, 31, 23, 59, 59, 999)]
                    }
                },
                attributes: [
                    [sequelize.literal(`SUM(CASE WHEN status = 'Pending' THEN 1 ELSE 0 END)`), 'totalPending'],
                    [sequelize.literal(`SUM(CASE WHEN status = 'Approved' THEN 1 ELSE 0 END)`), 'totalApproved'],
                    [sequelize.literal(`SUM(CASE WHEN status = 'Declined' THEN 1 ELSE 0 END)`), 'totalDeclined']
                ]
            });
        }

        res.json(invoices);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: err.message });
    }
});

router.get('/paymentActivities', protect, async (req, res) => {
    try {
        const user = await User.findByPk(req.user.id, { include: 'Role' });

        // Get the current year
        const currentYear = new Date().getFullYear();

        let invoices;
        if (user.Role.name === 'Super Admin' || user.Role.name === 'Admin') {
            invoices = await Invoice.findAll({
                where: sequelize.where(sequelize.fn('YEAR', sequelize.col('createdAt')), currentYear),
                attributes: [
                    [sequelize.fn('MONTH', sequelize.col('createdAt')), 'month'],
                    [sequelize.literal(`SUM(CASE WHEN paymentStatus = 'Unpaid' THEN 1 ELSE 0 END)`), 'totalIncome'],
                    [sequelize.literal(`SUM(CASE WHEN paymentStatus = 'Paid' THEN 1 ELSE 0 END)`), 'totalOutcome']
                ],
                group: [sequelize.fn('MONTH', sequelize.col('createdAt'))]
            });
        } else {
            invoices = await Invoice.findAll({
                where: {
                    userId: req.user.id,
                    createdAt: {
                        [Op.between]: [new Date(currentYear, 0), new Date(currentYear, 11, 31, 23, 59, 59, 999)]
                    }
                },
                attributes: [
                    [sequelize.fn('MONTH', sequelize.col('createdAt')), 'month'],
                    [sequelize.literal(`SUM(CASE WHEN paymentStatus = 'Unpaid' THEN 1 ELSE 0 END)`), 'totalIncome'],
                    [sequelize.literal(`SUM(CASE WHEN paymentStatus = 'Paid' THEN 1 ELSE 0 END)`), 'totalOutcome']
                ],
                group: [sequelize.fn('MONTH', sequelize.col('createdAt'))]
            });
        }

        res.json(invoices);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: err.message });
    }
});

// Route for getting all invoices
router.get('/', protect, async (req, res) => {
    try {
        const user = await User.findByPk(req.user.id, { include: 'Role' });

        // Extract limit and skip parameters from query string, default to 10 and 0 respectively
        const { limit } = req.query;

        let invoices;
        if (user.Role.name === 'Super Admin' || user.Role.name === 'Admin') {
            // Set limit to a large number if it's undefined
            const queryLimit = (limit && limit !== 'undefined') ? parseInt(limit) : Number.MAX_SAFE_INTEGER;
            
            invoices = await Invoice.findAll({ 
                include: 'User', 
                attributes: { exclude: ['attachments'] },
                limit: queryLimit, // Use queryLimit
                // offset: parseInt(skip) // Convert skip to integer
            });
        } else {
            // Set limit to a large number if it's undefined
            const queryLimit = (limit && limit !== 'undefined') ? parseInt(limit) : Number.MAX_SAFE_INTEGER;

            invoices = await Invoice.findAll({ 
                include: 'User', 
                where: { userId: req.user.id }, 
                attributes: { exclude: ['attachments'] },
                limit: queryLimit, // Use queryLimit
                // offset: parseInt(skip) // Convert skip to integer
            });
        }

        res.json(invoices);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: err.message });
    }
});

// Route for deleting a specific invoice by ID
router.delete('/', protect, async (req, res) => {
    try {
        const { id } = req.headers; // Get the invoice ID from the headers
        if (!id) {
            return res.status(400).json({ message: "Invoice ID not provided in headers" });
        }

        const invoice = await Invoice.findByPk(id);
        if (!invoice) {
            return res.status(404).json({ message: "Invoice not found" });
        }
        const role = await Role.findByPk(req.user.roleId);
        // Check if the user is Admin or Super Admin, or if the user is the owner of the invoice
        if (!(role.dataValues.name === 'Admin' || role.dataValues.name === 'Super Admin' || invoice.userId === req.user.id)) {
            return res.status(403).json({ message: "Unauthorized access" });
        }

        // Delete the invoice
        await invoice.destroy();

        res.status(200).json({ message: "Invoice deleted successfully" });
    } catch (error) {
        console.log(error);
        console.error("Error deleting invoice:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

// Route for getting a specific invoice by ID
router.get('/:id', protect, async (req, res) => {
    try {
        const invoice = await Invoice.findByPk(req.params.id, { include: 'Supplier' });
        if (!invoice) {
            return res.status(404).json({ message: "Invoice not found" });
        }
        res.json(invoice);
    } catch (error) {
        console.error("Error fetching invoice:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

// Route for creating or updating an invoice
router.post('/addOrEditClientInvoices', protect, async (req, res) => {
    const { invoiceDetail, supplierInformation, additionalInformation } = req.body;
    try {
        let supplierId;

        // Check if the supplier with the given VAT number exists
        let supplier = await Supplier.findOne({ where: { supplierVatNumber: supplierInformation.supplierVatNumber } });

        if (supplier) {
            // If the supplier exists, update its information
            await supplier.update(supplierInformation);
            supplierId = supplier.id;
        } else {
            // If the supplier does not exist, create a new one
            supplier = await Supplier.create(supplierInformation);
            supplierId = supplier.id;
        }

        // If the ID is present, update the existing invoice; otherwise, create a new one
        let invoice;
        if (invoiceDetail.id) {
            invoice = await Invoice.findByPk(invoiceDetail.id);
            if (!invoice) throw new Error('Invoice not found');
            await invoice.update({ ...additionalInformation, ...invoiceDetail, supplierId });
        } else {
            let totalCount = await Invoice.count({where: {userId: req.user.id}});
            console.log(totalCount, "Total COunt")
            invoice = await Invoice.create({
                ...additionalInformation, ...invoiceDetail, userId: req.user.id,paymentStatus:'Unpaid', supplierId, invoiceNumber: `INV-${Date.now()}`, serialNumber: `BP-${additionalInformation.businessUnit}-${new Date().getMonth() + 1}-${new Date().getFullYear()}-00${ ++totalCount }`
            });
        }

        // Save attachments if provided
        if (additionalInformation.attachments && additionalInformation.attachments.length > 0) {
            await invoice.update({ attachments: additionalInformation.attachments });
        }

        res.status(200).json({ message: "Invoice saved successfully", invoice });
    } catch (err) {
        console.error("Error saving invoice:", err);
        res.status(400).json({ message: "Error saving invoice", error: err.message });
    }
});

module.exports = router;
