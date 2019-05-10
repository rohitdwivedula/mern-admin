import React from 'react';
import Chart from 'react-chartist';

const UserBehaviorChart = (props) => {
  var program_data = props.data;
  var label_names = [];
  var series_of_vals = [[], []];
  var program_names = []; 
  for(var i=0;i<program_data.length && i <= 10;i++){
    label_names.push('P' + (i+1));
    series_of_vals[0].push(program_data[i].announcements);
    series_of_vals[1].push(program_data[i].tasks);
    program_names.push(program_data[i].name);
  }
  let data = {
    labels: label_names,
    series: series_of_vals
  };
  
  let options = {
    seriesBarDistance: 10,
    axisX: {
      showGrid: false
    },
    height: "245px"
  };
  
  let responsiveOptions = [
    ['screen and (max-width: 640px)', {
      seriesBarDistance: 1,
      axisX: {
        labelInterpolationFnc: function (value) {
          return value[0];
        }
      }
    }]
  ];
  i = 0;
  return (
    <div className="card ">
      <div className="header">
        <h4 className="title">Event Overviews</h4>
        <p className="category">An overview to see how individual programs are doing</p>
      </div>
      <div className="content">
        <Chart data={data} options={options} responsiveOptions={responsiveOptions} type="Bar" className="ct-chart" />
  
      </div>
      <div className="footer">
        <div className="legend">
          <div className="item">
            <i className="fa fa-circle text-info"></i> Announcements
          </div>
          <div className="item">
            <i className="fa fa-circle text-danger"></i> Tasks
          </div>
        </div>
        <hr />
        <div>
          Legend:
              <ol>
                {program_names.map(name => (
                  <li>{name}</li>
                ))}
              </ol>
        </div>
        <hr />
        <div className="stats">
          <i className="fa fa-check"></i> Official live statistics
            </div>
      </div>
    </div>
  );
}

export default UserBehaviorChart;