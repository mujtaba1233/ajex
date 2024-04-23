import { useEffect, useState } from "react";
import getChartColorsArray from "../../Common/ChartsDynamicColor";
import Chart from 'react-apexcharts'
import axios from "axios";
import { useProfile } from "../../Hooks/UserHooks";


const PaymentOverviewData = ({ dataColors }: any) => {
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
          { name: 'Paid', data: totalOutcome, color: '#F5F5F5' }
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
      type: 'area',
      toolbar: {
        show: false
      },
    },
    stroke: {
      curve: 'smooth',
      width: ['3.5', '3.5'],
    },
    grid: {
      xaxis: {
        lines: {
          show: true
        }
      },
      yaxis: {
        lines: {
          show: true
        }
      },
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Now', 'Des'],
    },
    legend: {
      show: false,
    },

    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        inverseColors: false,
        opacityFrom: 0.40,
        opacityTo: 0.1,
        stops: [30, 100, 100, 100]
      },
    },
    dataLabels: {
      enabled: false
    },
    tooltip: {
      fixed: {
        enabled: false
      }
      ,
      x: {
        show: false
      }
      ,
      y: {
        title: {
          formatter: function (seriesName: any) {
            return ''
          }
        }
      }
      ,
      marker: {
        show: false
      }
    }
  }

  return (
    <Chart
      dir="ltr"
      className="apex-charts"
      series={series}
      options={options}
      type="area"
      height={341}
    />
  )
}

export { PaymentOverviewData }