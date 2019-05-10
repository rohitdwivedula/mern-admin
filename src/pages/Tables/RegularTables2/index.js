import React from 'react';
import PlainBackgroundTable from './PlainBackgroundTable';

export default class RegularTables extends React.Component {
  state = {
    participants: [],
    volunteers: []
  };

  componentDidMount() {
    axios.get(`/api/dashboard/all-volunteers`).then(res =>  {
        const volunteers = res.data; 
        this.setState({volunteers})
    });
  }

  render () {
    (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <PlainBackgroundTable data={volunteers} />
          </div>
        </div>
      </div>
    );    
  }
} 