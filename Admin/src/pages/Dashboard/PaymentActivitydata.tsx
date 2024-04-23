
import { useEffect, useState } from "react";
import getChartColorsArray from "../../Common/ChartsDynamicColor";
import Chart from 'react-apexcharts'
import axios from "axios";
import { useProfile } from "../../Hooks/UserHooks";


const PaymentActivityData = ({ dataColors }: any) => {
    const [invoiceData, setInvoiceData] = useState<any[]>([]);
    const { token } = useProfile();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const config = {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
                const invoices: any = await axios.get(process.env.REACT_APP_API_URL + '/invoices/paymentActivities', config);

                // Extract months and total amounts
                const totalIncome = invoices.map((invoice: any) => invoice.totalIncome);
                const totalOutcome = invoices.map((invoice: any) => invoice.totalOutcome);
                console.log(totalIncome, totalOutcome)
                // Update state with chart data and months
                setInvoiceData([
                    { name: 'Unpaid', data: totalIncome, color: '#c93c2f' },
                    { name: 'Paid', data: totalOutcome,  color: '#F5F5F5' }
                ]);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);


    const series: any = invoiceData
    var options: any = {
        chart: {
            height: 362,
            type: 'bar',
            // stacked: true,
            toolbar: {
                show: false
            },
            zoom: {
                enabled: true
            }
        },

        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '35%',
                endingShape: 'rounded'
            },
        },

        dataLabels: {
            enabled: false
        },

        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        },

        // yaxis: {
        //     min: 0,
        //     max: 100,
        //     tickAmount: 11,
        // },

        grid: {
            xaxis: {
                lines: {
                    show: false
                }
            },
            yaxis: {
                lines: {
                    show: false
                }
            },
        },
        legend: {
            show: false
        },
        fill: {
            opacity: 1
        },
    };

    return (
        <Chart
            dir="ltr"
            className="apex-charts"
            series={series}
            options={options}
            type="bar"
            height={362}
        />
    )
}

export { PaymentActivityData }  