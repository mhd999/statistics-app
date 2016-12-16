// @flow

import React, { Component } from 'react';
import StatTable from './StatTable';

class App extends Component {
  constructor() {
    super();
    this.state = {
      stats: [],
     };
    }
  state: {
    stats: stat[]
  };

  componentDidMount() {
    fetch('http://data.ssb.no/api/v0/dataset/list.json?lang=no')
      .then(response => {
        response.json().then(data => {
        if (response.status !== 200) {
            throw new Error('success, no data');
        } else {
            console.log(data.datasets[0]);
            this.setState({ stats: data.datasets });
          }
        });
    }).catch(err => {
      throw new Error('erro calling the api', err);
    })
  }
  render() {
    return (
      <div className="App">
        {this.state.stats.length > 0 && 
          <StatTable 
            statistics={this.state.stats} 
            showPagination={false}
            loading={false} 
            classname="-striped -highlight" 
            pageSize={this.state.stats.length}/>
        }
      </div>
    );
  }
}

export default App;
