const transactionList = [
    {
        id:1,
        invoiceID: "#BR2150",
        Date: "20 Sep, 2022",
        Description: "Maintenance",
        status: "Credit",
        color:"success",
        Amount: "$1200.00",
        Attachment: false
    },
    {
        id:2,
        invoiceID: "#BR2151",
        Date: "12 Arl, 2022",
        Description: "Flight Booking",
        status: "Credit",
        color:"success",
        Amount: "$3600.00",
        Attachment: false
    },
    {
        id:3,
        invoiceID: "#BR2152",
        Date: "28 Mar, 2022",
        Description: "Office Rent",
        status: "Debit",
        color:"danger",
        Amount: "$800.00",
        Attachment: false
    },
    {
        id:4,
        invoiceID: "#BR2153",
        Date: "23 Aug, 2022",
        Description: "Salary Payment",
        status: "Credit",
        color:"success",
        Amount: "$1600.00",
        Attachment: true
    },
    {
        id:5,
        invoiceID: "#BR2154",
        Date: "18 Sep, 2022",
        Description: "Salary Payment",
        status: "Debit",
        color:"danger",
        Amount: "$3200.00",
        Attachment: false
    },
    {
        id:6,
        invoiceID: "#BR2155",
        Date: "12 Feb, 2022",
        Description: "Maintenance",
        status: "Credit",
        color:"success",
        Amount: "$900.00",
        Attachment: true
    },
    {
        id:7,
        invoiceID: "#BR2156",
        Date: "30 Nov, 2022",
        Description: "Online Product",
        status: "Credit",
        color:"success",
        Amount: "$200.00",
        Attachment: true
    },
    {
        id:8,
        invoiceID: "#BR2157",
        Date: "23 Sep, 2022",
        Description: "Office Rent",
        status: "Debit",
        color:"danger",
        Amount: "$1200.00",
        Attachment: false
    },
    {
        id:9,
        invoiceID: "#BR2158",
        Date: "16 Aug, 2022",
        Description: "Online Product",
        status: "Credit",
        color:"success",
        Amount: "$1800.00",
        Attachment: false
    },
    {
        id:10,
        invoiceID: "#BR2153",
        Date: "23 Aug, 2022",
        Description: "Salary Payment",
        status: "Credit",
        color:"success",
        Amount: "$1600.00",
        Attachment: true
    },
]

const taxesList =
    [
        {
            id:1,   
            taxName: "Sales Tax",
            country: "United States",
            description: "(any)",
            taxRate: "10%",
            status:"Enabled",
            color:"success",
            checkbox: true
        },
        {
            id:2,
            taxName: "Value Added Tax(VAT)",
            country: "Australia",
            description: "(any)",
            taxRate: "20%",
            status:"Enabled",
            color:"success",
            checkbox: true
        },
        {
            id:3,
            taxName: "Goods & Service Tax(GST)",
            country: "New Zealand",
            description: "(any)",
            taxRate: "15%",
            status:"Enabled",
            color:"success",
            checkbox: true
        },
        {
            id:4,
            taxName: "Excise",
            country: "Italy",
            description: "(any)",
            taxRate: "10%",
            status:"Enabled",
            color:"success",
            checkbox: true
        }
    ]

const salesReport =[
    {
        id:1,
        invoiceId: "Lec-2152",
        date: "20 Sep, 2022",
        category:"Fashion",
        price:"$240.00",
        discount :"10%",
        amount:"$190.00"
    },
    {
        id:2,
        invoiceId: "Lec-2153",
        date: "12 Arl, 2022",
        category:"Accessories",
        price:"$390.00",
        discount :"15%",
        amount:"$280.00"
    },
    {
        id:3,
        invoiceId: "Lec-2154",
        date: "28 Mar, 2022",
        category:"Furniture",
        price:"$440.00",
        discount :"25%",
        amount:"$350.00"
    },
    {
        id:4,
        invoiceId: "Lec-2155",
        date: "23 Aug, 2022",
        category:"Accessories",
        price:"$520.00",
        discount :"20%",
        amount:"$460.00"
    },
    {
        id:5,
        invoiceId: "Lec-2156",
        date: "18 Sep, 2022",
        category:"Fashion",
        price:"$480.00",
        discount :"15%",
        amount:"$390.00"
    },
    {
        id:6,
        invoiceId: "Lec-2157",
        date: "12 Feb, 2022",
        category:"Furniture",
        price:"$550.00",
        discount :"30%",
        amount:"$360.00"
    },
    {
        id:7,
        invoiceId: "Lec-2158",
        date: "30 Nov, 2022",
        category:"Fashion",
        price:"$170.00",
        discount :"20%",
        amount:"$90.00"
    },
    {
        id:8,
        invoiceId: "Lec-2159",
        date: "23 Sep, 2022",
        category:"Accessories",
        price:"$720.00",
        discount :"10%",
        amount:"$620.00"
    },
    {
        id:9,
        invoiceId: "Lec-2160",
        date: "16 Aug, 2022",
        category:"Fashion",
        price:"$820.00",
        discount :"15%",
        amount:"$630.00"
    },
    {
        id:10,
        invoiceId: "Lec-2161",
        date: "15 Dec, 2022",
        category:"Fashion",
        price:"$750.00",
        discount :"10%",
        amount:"$690.00"
    }
]

const expensesReport = [
    {
        id:1,
        expenses:"Office Maintenance",
        company:"Heidenreich-Kautzer",
        expenseDate:"20 Sep, 2022",
        amount:"$240.00",
        status:"Approved",
        color:"success"
    },
    {
        id:2,
        expenses:"Bus Booking",
        company:"Dare-Stark",
        expenseDate:"12 Apl, 2022",
        amount:"$390.00",
        status:"approved",
        color:"success"
    },
    {
        id:3,
        expenses:"Salary Payment",
        company:"Ortiz-Cronin",
        expenseDate:"28 Mar, 2022",
        amount:"$440.00",
        status:"Pending",
        color:"danger"
    },
    {
        id:4,
        expenses:"Office Rent",
        company:"Jast, Hane and Bogan",
        expenseDate:"23 Aug, 2022",
        amount:"$520.00",
        status:"Pending",
        color:"danger"
    },
    {
        id:5,
        expenses:"Computer Repairs",
        company:"Schroeder Group",
        expenseDate:"15 Dec, 2022",
        amount:"$480.00",
        status:"Approved",
        color:"success"
    },
    {
        id:6,
        expenses:"Software Update",
        company:"Carroll-Stroman",
        expenseDate:"18 Sep, 2022",
        amount:"$550.00",
        status:"Approved",
        color:"success"
    },
    {
        id:7,
        expenses:"Social Marketing",
        company:"Christiansen-Gerlach",
        expenseDate:"12 Feb, 2022",
        amount:"$170.00",
        status:"Pending",
        color:"danger"
    },
    {
        id:8,
        expenses:"Salary Payment",
        company:"Yost and Sons",
        expenseDate:"23 Sep, 2022",
        amount:"$720.00",
        status:"Pending",
        color:"danger"
    },
    {
        id:9,
        expenses:"Office Rent",
        company:"Mertz, Hand and Marks",
        expenseDate:"16 Aug, 2022",
        amount:"$820.00",
        status:"Approved",
        color:"success"
    },
    {
        id:10,
        expenses:"Office Maintenance",
        company:"Bode and Sons",
        expenseDate:"15 Dec, 2022",
        amount:"$640.00",
        status:"Approved",
        color:"success"
    },
    
]

export {transactionList,taxesList,salesReport,expensesReport}