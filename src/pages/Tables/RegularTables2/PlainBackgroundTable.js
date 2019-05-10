import React from 'react';

const PlainBackgroundTable = ({data}) => (
  <div className="card card-plain">
    <div className="header">
      <h4 className="title">Inactive Participants</h4>
      <p className="category">People who have just created account and nothing else</p>
    </div>
    <div className="content table-responsive table-full-width">
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Email</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
        {data.map(item => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default PlainBackgroundTable;