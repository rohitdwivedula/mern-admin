import React from 'react';
import EmailStatistics from './EmailChart';
import SalesChart from './SalesChart';
import UserBehaviorChart from './UserBehaviorChart';
import Tasks from './Tasks';
import axios from 'axios';


export default class Dashboard extends React.Component {
  state = {
    persons: [],
    participants: 25,
    volunteers: 25,
    stats: [{"date":"24","hits":2000},{"date":"25","hits":2500},{"date":"26","hits":3000},{"date":"27","hits":134}],
    tasks: 10,
    todos: [],
    programs: [
      {"name":"Magical World","tasks":0,"announcements":5},
      {"name":"The Cat's Roar","tasks":1,"announcements":2},
      {"name":"Random","tasks":5,"announcements":4},
      {"name":"You Rock","tasks":1,"announcements":2},
      {"name":"Bamboozled","tasks":1,"announcements":2},
      {"name":"Joker","tasks":1,"announcements":2},
      {"name":"End of the world","tasks":1,"announcements":1}
    ]
  };
  /* 
     all values have been provided with a default value to ensure no crashing during loading
     the actual values themselves will be fetched from the database and react will update all
     graphs diagrams and figures 
  */
  componentDidMount() {
    axios.get('/api/dashboard/stats').then(res => {
      const stats = res.data;
      this.setState({stats});
    });
    axios.get(`/api/dashboard/users`).then(res =>  {
        const users = res.data; 
        this.setState({users})
    });
    axios.get('/api/dashboard/participants').then(res => {
      const participants = res.data;
      this.setState({participants})
    });
    axios.get('/api/dashboard/volunteers').then(res =>  {
        const volunteers = res.data;
        this.setState({volunteers})
    });
    axios.get('/api/dashboard/tasks').then(res => {
      const tasks = res.data;
      this.setState({tasks});
    });
    axios.get('/api/dashboard/task-details').then(res => {
      const todos = res.data;
      this.setState({todos});
    });
    axios.get('/api/dashboard/program-stats').then(res => {
      const programs = res.data;
      this.setState({programs});
    });
  }
  // render() {
  //   return (
  //     <ul>
  //       { this.state.persons.map(person => <li>{person.name}</li>)}
  //     </ul>
  //   )
  // }
  render() {
    return(
      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4">
              <EmailStatistics par={this.state.participants} vol={this.state.volunteers} usr={this.state.users}/>
            </div>
            <div className="col-md-8">
              <SalesChart stat={this.state.stats}/>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <UserBehaviorChart data={this.state.programs}/>
            </div>
            <div className="col-md-6">
              <Tasks num_tasks={this.state.tasks} todo={this.state.todos} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}












