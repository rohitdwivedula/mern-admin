import React from 'react';
import { Route } from 'react-router-dom';
import RegularTables from './RegularTables';

const Tables = ({match}) => (
  <div className="content">
    <Route path={`${match.url}/regular-tables`} component={RegularTables} />
  </div>
);

export default Tables;