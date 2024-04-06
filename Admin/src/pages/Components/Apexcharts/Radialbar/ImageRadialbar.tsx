import React from 'react';


// Import Images
import comingSoon from "../../../../assets/images/comingsoon.png";
import Img4 from "../../../../assets/images/small/img-4.jpg";
import ReactApexChart from 'react-apexcharts';


const ImageRadialbar = ({ dataColors }:any) => {
    const series = [67];
    var options:any = {
        chart: {
            height: 315,
            type: 'radialBar',
        },
        plotOptions: {
            radialBar: {
                hollow: {
                    margin: 15,
                    size: '65%',
                    image: comingSoon,
                    imageWidth: 56,
                    imageHeight: 56,
                    imageClipped: false
                },
                dataLabels: {
                    name: {
                        show: false,
                        color: '#fff'
                    },
                    value: {
                        show: true,
                        color: '#333',
                        offsetY: 65,
                        fontSize: '22px'
                    }
                }
            }
        },
        fill: {
            type: 'image',
            image: {
                src: [Img4],
            }
        },
        stroke: {
            lineCap: 'round'
        },
        labels: ['Volatility'],
    };
    return (
        <>
      
       <ReactApexChart
                dir='ltr'
            className="apex-charts"
            series={series}
            options={options}
            type="radialBar"
            height="315px"
        />
      
        </>
    );
};
export default ImageRadialbar;