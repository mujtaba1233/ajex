//country images
import USflag from "../../assets/images/flags/us.svg"
import Italyflag from "../../assets/images/flags/italy.svg"
import Spainflag from "../../assets/images/flags/spain.svg"
import Russiaflag from "../../assets/images/flags/russia.svg"
import Arabicflag from "../../assets/images/flags/ae.svg"
import Frenchflag from "../../assets/images/flags/french.svg"

import userImg1 from "../../assets/images/users/avatar-1.jpg";
import userImg2 from "../../assets/images/users/avatar-2.jpg";
import userImg3 from "../../assets/images/users/avatar-3.jpg";
import userImg5 from "../../assets/images/users/avatar-5.jpg";
import userImg6 from "../../assets/images/users/avatar-6.jpg";
import userImg7 from "../../assets/images/users/avatar-7.jpg";


const recentTrasaction =[
    {
        id:1,
        day:"Recent",
        transactionDetails:[
            {
                id:1,
                transactionModeIcon:"lab la-paypal",
                title:"Salary Payment",
                date:"20 Sep, 2022",
                badgeColor:"bg-danger-subtle text-danger",
                transactionPercentage:"- $62.45"
            },
            {
                id:2,
                transactionModeIcon:"lab la-buffer",
                title:"Online Product",
                date:"28 Mar, 2022",
                badgeColor:"bg-success-subtle text-success",
                transactionPercentage:"+ $45.84"
            }
        ]
    },
    {
        id:2,
        day:"Yesterday",
        transactionDetails:[
            {
                id:1,
                transactionModeIcon:"las la-file-image",
                title:"Maintenance",
                date:"18 Sep, 2022",
                badgeColor:"bg-success-subtle text-success",
                transactionPercentage:"+ $25.52"
            },
            {
                id:2,
                transactionModeIcon:"las la-bus",
                title:"Bus Booking",
                date:"30 Nov, 2022",
                badgeColor:"bg-danger-subtle text-danger",
                transactionPercentage:"- $84.45"
            },
            {
                id:3,
                transactionModeIcon:"lab la-telegram-plane",
                title:"Flight Booking",
                date:"12 Feb, 2022",
                badgeColor:"bg-success-subtle text-success",
                transactionPercentage:"+ $53.23"
            },
            {
                id:4,
                transactionModeIcon:"las la-store-alt",
                title:"Office Rent",
                date:"12 Apl, 2022",
                badgeColor:"bg-success-subtle text-success",
                transactionPercentage:"+ $42.63"
            }
        ]
    }
]

const salesRevenue =[
    {
        id:1,
        countryImg: USflag,
        country: "US",
        order:6253,
        earning:"$26,524"
    },
    {
        id:2,
        countryImg: Italyflag,
        country: "Italy",
        order:5563,
        earning:"$32,562"
    },
    {
        id:3,
        countryImg: Spainflag,
        country: "Spain",
        order:3258,
        earning:"$65,214"
    },
    {
        id:4,
        countryImg: Frenchflag,
        country: "French",
        order:6325,
        earning:"$63,254"
    },
    {
        id:5,
        countryImg: Russiaflag,
        country: "Russia",
        order:8652,
        earning:"$53,621"
    },
    {
        id:6,
        countryImg: Arabicflag,
        country: "Arabic",
        order:4256,
        earning:"$86,526"
    }

]

const invoiceList = [
    {
        id:1,
        invoiceID:"Lec-2152",
        clientImg:userImg1,
        clientName:"Donald Risher",
        date :"20 Sep, 2022",
        status :"Paid",
        statusClass : "bg-success-subtle text-success",
    },
    {
        id:2,
        invoiceID:"Lec-2153",
        clientImg:userImg2,
        clientName:"Brody Holman",
        date :"12 Arl, 2022",
        status :"Unpaid",
        statusClass : "bg-warning-subtle text-warning",
    },
    {
        id:3,
        invoiceID:"Lec-2154",
        clientImg:userImg3,
        clientName:"Jolie Hood",
        date :"28 Mar, 2022",
        status :"Paid",
        statusClass : "bg-success-subtle text-success",
    },
    {
        id:4,
        invoiceID:"Lec-2156",
        clientImg:userImg5,
        clientName:"Howard Lyons",
        date :"18 Sep, 2022",
        status :"Refund",
        statusClass : "bg-info-subtle text-info",
    },
    {
        id:5,
        invoiceID:"Lec-2157",
        clientImg:userImg6,
        clientName:"Howard Oneal",
        date :"12 Feb, 2022",
        status :"Paid",
        statusClass : "bg-success-subtle text-success",
    },
    {
        id:6,
        invoiceID:"Lec-2158",
        clientImg:userImg7,
        clientName:"Jena Hall",
        date :"30 Nov, 2022",
        status :"Cancel",
        statusClass : "bg-danger-subtle text-danger",
    },


]

export {recentTrasaction,salesRevenue,invoiceList}