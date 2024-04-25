import React from 'react';
import jsPDF from 'jspdf';

interface Attachment {
  data: string;
  name: string;
}

interface Supplier {
  id: number;
  createdAt: string;
  updatedAt: string;
  supplierName: string;
  supplierVatNumber: string;
  supplierBankDetails: string;
  supplierNationalAddress: string;
}

interface MyData {
  id: number;
  invoiceNumber: string;
  amount: number;
  priority: string;
  status: string;
  typeOfExpense: string;
  expenseType: string;
  lineOfBusiness: string;
  departmentName: string;
  serialNumber: string; // Add serialNumber field
  businessUnit: string;
  currency: string;
  userId: number;
  description: string;
  createdAt: string;
  updatedAt: string;
  Supplier: Supplier;
  attachments: Attachment[];
}

const DownloadPDF: React.FC<{ data: MyData }> = ({ data }) => {
  const handleDownload = () => {
    const doc = new jsPDF();

    doc.setFontSize(16);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(72, 133, 237); // Blue color

    // Title
    doc.text('Expense Report', 105, 15, { align: 'center' });

    doc.setFontSize(12);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(0, 0, 0);

    // Arrange fields horizontally with two fields per line
    const fields = [
      `Invoice Number: ${data.invoiceNumber}`,
      `Amount: ${data.amount}`,
      `Priority: ${data.priority}`,
      `Status: ${data.status}`,
      `Type of Expense: ${data.typeOfExpense}`,
      `Expense Type: ${data.expenseType}`,
      `Line of Business: ${data.lineOfBusiness}`,
      `Business Unit: ${data.businessUnit}`,
      `Currency: ${data.currency}`,
      `Department Name: ${data.departmentName}`,
      `Serial Number: ${data.serialNumber}`,
      `Description: ${data.description}`,
      `Supplier Name: ${data.Supplier.supplierName}`,
      `Supplier VAT Number: ${data.Supplier.supplierVatNumber}`,
      `Supplier Bank Details: ${data.Supplier.supplierBankDetails}`,
      `Supplier National Address: ${data.Supplier.supplierNationalAddress}`,
    ];

    const startX = 10;
    const startY = 30;
    const lineHeight = 10;
    let currentY = startY;

    for (let i = 0; i < fields.length; i += 2) {
      doc.text(fields[i], startX, currentY);
      if (fields[i + 1]) {
        doc.text(fields[i + 1], startX + 100, currentY);
      }
      currentY += lineHeight;
    }

    // Add Ajex text
    doc.setFontSize(14);
    doc.setTextColor(128, 0, 128); // Purple color
    const ajexTextWidth = doc.getTextWidth('Ajex');
    const xPosition = doc.internal.pageSize.width - 20 - ajexTextWidth; // Align to the right
    doc.text('Ajex', xPosition, 20);

    doc.save(`${data.invoiceNumber}.pdf`);
  };

  return (
    <button type='button' className='btn btn-primary' onClick={handleDownload}>
      <i className="ri-download-2-line align-bottom me-1"></i> Download PDF
    </button>
  );
};

export default DownloadPDF;
