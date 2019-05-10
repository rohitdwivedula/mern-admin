import React from 'react';
import StripedTable from './StripedTable';
import axios from 'axios';

export default class RegularTables extends React.Component {
  state = {
    participants: [],
    volunteers: []
  };

  componentDidMount() {
    axios.get('/api/dashboard/all-participants').then(res => {
      const participants = res.data;
      this.setState({participants});
    });
  }

  render () {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <StripedTable data={this.state.participants} />
          </div>
        </div>
      </div>
    );    
  }
} 