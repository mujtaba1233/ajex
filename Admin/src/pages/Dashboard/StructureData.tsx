import { useEffect, useState } from "react";
import getChartColorsArray from "../../Common/ChartsDynamicColor";
import Chart from 'react-apexcharts'
import axios from "axios";
import { useProfile } from "../../Hooks/UserHooks";


const StructureData = ({ dataColors }: any) => {
    const [invoiceData, setInvoiceData] = useState<any[]>([]);
    const { token } = useProfile();

    useEffect(() => {
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
        const fetchData = async () => {
            try {
                const invoices: any = await axios.get(process.env.REACT_APP_API_URL + '/invoices/structure', config);
                const approvedInvoices = Number(invoices[0].totalApproved) || 0;
                const pendingInvoices = Number(invoices[0].totalPending) || 0;
                const declinedInvoices = Number(invoices[0].totalDeclined) || 0;
                setInvoiceData([pendingInvoices, declinedInvoices, approvedInvoices]);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    var chartPieBasicColors = getChartColorsArray(dataColors);
    const series: any = invoiceData
    var options: any = {
        chart: {
            height: 300,
            type: 'donut',
        },
        labels: ["Pending", "Declined", "Approved"],
        colors: chartPieBasicColors,
        plotOptions: {
            pie: {
                startAngle: 25,
                donut: {
                    size: '78%',
                }
            }
        },

        legend: {
            show: false,
        },

        dataLabels: {
            style: {
                fontSize: '11px',
                fontFamily: 'DM Sans,sans-serif',
                colors: undefined
            },

            background: {
                enabled: true,
                foreColor: '#fff',
                padding: 4,
                borderRadius: 2,
                borderWidth: 1,
                borderColor: '#fff',
                opacity: 1,
            },
        },
        responsive: [{
            breakpoint: 600,
            options: {
                chart: {
                    height: 240
                },
                legend: {
                    show: false
                },
            }
        }]
    }

    return (
        <Chart
            dir="ltr"
            className="apex-charts"
            series={series}
            options={options}
            type="donut"
            height={300}
        />
    )
}

export { StructureData }