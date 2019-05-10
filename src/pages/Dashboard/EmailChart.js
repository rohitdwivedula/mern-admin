import React from 'react';
import ChartistGraph from 'react-chartist';

const EmailStatistic = (props) => {
  var participants = props.par;
  var volunteers = props.vol;
  var users = props.usr;
  participants = Math.floor((participants*100.00)/(participants+volunteers));
  volunteers = 100 - participants;
  let dataPreferences = {
    labels: [participants + '%', volunteers + '%'],
    series: [participants, volunteers]
  };
  let optionsPreferences = {
    donut: false,
    donutWidth: 40,
    startAngle: 0,
    total: 100,
    showLabel: true,
    axisX: {
      showGrid: false,
      offset: 0
    },
    axisY: {
      offset: 0
    }
  };
  let chartType = 'Pie';
  return (
    <div className="card">
      <div className="header">
        <h4 className="title">Total Users: {users}</h4>
        <p className="category">Past experience shows that a participant:volunteer ratio of 70%:30% is desirable.</p>
      </div>
      <div className="content">
        <ChartistGraph data={dataPreferences} options={optionsPreferences} type={chartType} className={'ct-chart ct-perfect-fourth'} />      </div>
      <div className="footer">
        <div className="legend">
          <div className="item">
            <i className="fa fa-circle text-info"></i> Participants
          </div>
          <div className="item">
            <i className="fa fa-circle text-danger"></i> Volunteers
          </div>
        </div>
        <hr />
        <div className="stats">
          <i className="fa fa-clock-o"></i> Synced with DB just now
          </div>
      </div>
    </div>

  );
};

export default EmailStatistic;