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

    doc.setFontSize(12);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(0, 0, 0);

    doc.text(`ID: ${data.id}`, 10, 20);
    doc.text(`Invoice Number: ${data.invoiceNumber}`, 10, 30);
    doc.text(`Amount: ${data.amount}`, 10, 40);
    doc.text(`Priority: ${data.priority}`, 10, 50);
    doc.text(`Status: ${data.status}`, 10, 60);
    doc.text(`Type of Expense: ${data.typeOfExpense}`, 10, 70);
    doc.text(`Expense Type: ${data.expenseType}`, 10, 80);
    doc.text(`Line of Business: ${data.lineOfBusiness}`, 10, 90);
    doc.text(`Department Name: ${data.departmentName}`, 10, 100);
    doc.text(`User ID: ${data.userId}`, 10, 110);
    doc.text(`Description: ${data.description}`, 10, 120);
    doc.text(`Created At: ${data.createdAt}`, 10, 130);
    doc.text(`Updated At: ${data.updatedAt}`, 10, 140);
    doc.text(`Supplier ID: ${data.Supplier.id}`, 10, 150);
    doc.text(`Supplier Name: ${data.Supplier.supplierName}`, 10, 160);
    doc.text(`Supplier VAT Number: ${data.Supplier.supplierVatNumber}`, 10, 170);
    doc.text(`Supplier Bank Details: ${data.Supplier.supplierBankDetails}`, 10, 180);
    doc.text(`Supplier National Address: ${data.Supplier.supplierNationalAddress}`, 10, 190);

    // Display images
    let yPosition = 200;
    data.attachments.forEach((attachment, index) => {
      const img = new Image();
      img.src = `data:image/png;base64,${attachment.data}`;
      img.onload = () => {
        doc.addImage(img, 'PNG', 10, yPosition, 50, 50);
        yPosition += 60; // Adjust vertical position for the next image
        if (index === data.attachments.length - 1) {
          doc.save('download.pdf');
        }
      };
    });
  };

  return <button type='button' className='btn btn-primary' onClick={handleDownload}> <i className="ri-download-2-line align-bottom me-1"></i> Download PDF</button>;
};

export default DownloadPDF;
