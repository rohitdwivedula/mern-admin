import React from 'react';
import ChartistGraph from 'react-chartist';
import Chartist from 'chartist';

const SalesChart = (props) => {
  var stats = props.stat;
  var keys = [];
  var values = [];  
  for(var i=0; i < stats.length;i++){
    keys.push(stats[i].date+'');
    values.push(stats[i].hits);
  }
  let dataSales = {
    labels: keys,
    series: [
      values
    ]
  };
  
  let optionsSales = {
    lineSmooth: true,
    low: 0,
    high: 2500,
    showArea: true,
    height: "245px",
    axisX: {
      showGrid: false,
    },
    lineSmooth: Chartist.Interpolation.simple({
      divisor: 5
    }),
    showLine: false,
    showPoint: false
  };
  
  let responsiveSales = [
    ['screen and (max-width: 640px)', {
      axisX: {
        labelInterpolationFnc: function (value) {
          return value[0];
        }
      }
    }]
  ];  
  return(
  <div className="card">
    <div className="header">
      <h4 className="title">Traffic (Pageviews)</h4>
      <p className="category">User traffic on the last 10 days estimated based on request frequency to database. (Mongo)</p>
    </div>
    <div className="content">
      <ChartistGraph data={dataSales} options={optionsSales} responsiveOptions={responsiveSales} type="Line" className="ct-chart" />
    </div>
    <div className="footer">
      <div className="legend">
        <div className="item">
          <i className="fa fa-circle text-info"></i> Web Requests (approx)
        </div>
      </div>
      <hr />
      <div className="stats">`
        <i className="fa fa-history"></i> Updates on 24hr cycles. Approximations. 
          </div>
    </div>
  </div>);
};

export default SalesChart;