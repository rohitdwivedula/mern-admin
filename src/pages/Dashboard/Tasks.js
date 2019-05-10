import React, { Component } from 'react';
import cx from 'classnames';

const Tasks = (props) => {
  var tasks = props.num_tasks;
  var task_details = props.todo;
  return (
    <div className="card">
      <div className="header">
        <h4 className="title">Pending Tasks: {tasks}</h4>
        <p className="category">Pending tasks that need to be done. Some tasks displayed here.</p>
      </div>
      <div className="content">
        <form>
        {task_details.map(todo => (
          <div className={cx("todo-item")}>
            <div className="todo-item-wrapper">
              <div className="todo-content"><b>{todo.task}</b> <small>on program {todo.program} assigned to volunteer {todo.name}.</small></div>
            </div>
          </div>
        ))}
        </form>


      </div>
      <div className="footer">
        <hr />
        <div className="stats">
          <i className="fa fa-history"></i> Updated 3 minutes ago
            </div>
      </div>
    </div>
  );
}

export default Tasks;