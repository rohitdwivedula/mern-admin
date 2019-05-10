import React from 'react';

const StripedTable = (props) => {
  var participants = props.data;
  return (
    <div className="card">
      <div className="header">
        <h4 className="title">Active Participant</h4>
        <p className="category">People who have made atleast one action on the site</p>
      </div>
      <div className="content table-responsive table-full-width">
        <table className="table table-hover table-striped">
          <thead>
            <tr>
              <th>Email</th>
              <th>Name</th>
              <th>Subscriptions</th>
            </tr>
          </thead>
          <tbody>
            {participants.map(item => (
              <tr>
                <td>{item.email}</td>
                <td>{item.name}</td>
                <td>Active</td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>
    </div>
  );
}
export default StripedTable;