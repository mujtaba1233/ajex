import avatar1 from "../../assets/images/users/avatar-1.jpg";
import avatar2 from "../../assets/images/users/avatar-2.jpg";
import avatar3 from "../../assets/images/users/avatar-3.jpg";
import avatar4 from "../../assets/images/users/avatar-4.jpg";
import avatar5 from "../../assets/images/users/avatar-5.jpg";
import avatar6 from "../../assets/images/users/avatar-6.jpg";
import avatar7 from "../../assets/images/users/avatar-7.jpg";
import avatar8 from "../../assets/images/users/avatar-8.jpg";
import avatar9 from "../../assets/images/users/avatar-9.jpg";


const invoiceWidget = [
    {
        id:1,
        category:"Invoices Sent",
        arrowTypeClass:"up",
        arrrowTypeColor :"success",
        percentage :"+89.24 %",
        categoryCount:"2,258",
        categoryCountText:"Invoices sent",
        catrgoryIcon: "las la-file-alt",
        badgeClass:"bg-primary",
        cardClass:"",
        textClass:"text-muted",
        counterValue:"559.25",
        counterclass:""
    },
    {
        id:2,
        category:"Paid Invoices",
        arrowTypeClass:"down",
        arrrowTypeColor :"danger",
        percentage :"+8.09 %",
        categoryCount:"1,958",
        categoryCountText:"Paid by clients",
        catrgoryIcon: "las la-check-square",
        badgeClass:"bg-danger",
        cardClass:"",
        textClass:"text-muted",
        counterValue:"409.66",
        counterclass:""
    },
    {
        id:3,
        category:"Unpaid Invoices",
        arrowTypeClass:"down",
        arrrowTypeColor :"danger",
        percentage :"+9.01 %",
        categoryCount:"338",
        categoryCountText:"Unpaid by clients",
        catrgoryIcon: "las la-clock",
        cardClass:"bg-primary",
        textClass:"text-white",
        badgeClass:"bg-danger",
        counterValue:"136.98",
        counterclass:"text-white"
        
    },
    {
        id:4,
        category:"Cancelled Invoices",
        arrowTypeClass:"up",
        arrrowTypeColor :"success",
        percentage :"+7.55 %",
        categoryCount:"502",
        categoryCountText:"Cancelled by clients",
        catrgoryIcon: "las la-times-circle",
        cardClass:"",
        textClass:"text-muted",
        badgeClass:"bg-primary",
        counterValue:"84.2",
        counterclass:""
    },
    
]

const clientInvoiceList =[
    {
        id:1,
        invoiceId:"Lec-2152",
        clientName:"Donald Risher",
        clientImage:avatar1,
        email:"morbi.quis@protonmail.org",
        date:"20 Sep, 2022",
        billed:"240.00",
        status:"Paid"        
    },
    {
        id:2,
        invoiceId:"Lec-2153",
        clientName:"Brody Holman",
        clientImage:avatar2,
        email:"metus@protonmail.org",
        date:"12 Arl, 2022",
        billed:"390.00",
        status:"Unpaid"        
    },
    {
        id:3,
        invoiceId:"Lec-2154",
        clientName:"Jolie Hood",
        clientImage:avatar3,
        email:"morbi.quis@protonmail.org",
        date:"28 Mar, 2022",
        billed:"440.00",
        status:"Paid"        
    },
    {
        id:4,
        invoiceId:"Lec-2155",
        clientName:"Buckminster Wong",
        clientImage:avatar4,
        email:"morbi.quis@protonmail.org",
        date:"23 Aug, 2022",
        billed:"520.00",
        status:"Paid"        
    },
    {
        id:5,
        invoiceId:"Lec-2156",
        clientName:"Howard Lyons",
        clientImage:avatar5,
        email:"neque.sed.dictum@icloud.org",
        date:"18 Sep, 2022",
        billed:"480.00",
        status:"Refund"        
    },
    {
        id:6,
        invoiceId:"Lec-2157",
        clientName:"Howard Oneal",
        clientImage:avatar6,
        email:"metus@protonmail.org",
        date:"12 Feb, 2022",
        billed:"550.00",
        status:"Paid"        
    },
    {
        id:7,
        invoiceId:"Lec-2158",
        clientName:"Jena Hall",
        clientImage:avatar7,
        email:"morbi.quis@protonmail.org",
        date:"30 Nov, 2022",
        billed:"170.00",
        status:"Cancel"        
    },
    {
        id:8,
        invoiceId:"Lec-2159",
        clientName:"Paki Edwards",
        clientImage:avatar8,
        email:"dictum.phasellus.in@hotmail.org",
        date:"23 Sep, 2022",
        billed:"720.00",
        status:"Paid",
        color :"success"
    },
    {
        id:9,
        invoiceId:"Lec-2160",
        clientName:"James Diaz",
        clientImage:avatar9,
        email:"nascetur@yahoo.com",
        date:"16 Aug, 2022",
        billed:"820.00",
        status:"Paid",
        color :"success"
    },
    {
        id:10,
        invoiceId:"Lec-2157",
        clientName:"Howard Oneal",
        clientImage:avatar6,
        email:"metus@protonmail.org",
        date:"12 Feb, 2022",
        billed:"550.00",
        status:"Paid",
        color :"success"
    }
]

export {invoiceWidget,clientInvoiceList}