import React from 'react';


//Import images
import smallImage1 from '../../../../assets/images/small/img-1.jpg';
import smallImage2 from '../../../../assets/images/small/img-2.jpg';
import smallImage3 from '../../../../assets/images/small/img-3.jpg';
import smallImage4 from '../../../../assets/images/small/img-4.jpg';
// import getChartColorsArray from 'Common/ChartsDynamicColor';
import ReactApexChart from 'react-apexcharts';

const ImagePieChart = () => {
    // var chartPieImageColors = getChartColorsArray(dataColors);
    const series = [44, 33, 54, 45]
    const options:any = {
        chart: {
            width: 380,
            type: 'pie',
        },
        colors: ['#93C3EE', '#E5C6A0', '#669DB5', '#94A74A'],
        fill: {
            type: 'image',
            opacity: 0.85,

            image: {
                src: [smallImage1, smallImage2, smallImage3, smallImage4],
                width: 25,
                imagedHeight: 25
            },

        },
        stroke: {
            width: 4
        },
        dataLabels: {
            enabled: true,
            style: {
                colors: ['#111']
            },
            background: {
                enabled: true,
                foreColor: '#fff',
                borderWidth: 0
            }
        },
        legend: {
            position: 'bottom'
        }
    }

    return (
        <>
        
       <ReactApexChart
                dir='ltr'
            className="apex-charts"
            series={series}
            options={options}
            type="pie"
            height="300px"
        />
        
        </>

    )
}

export default ImagePieChart;