import React from "react";

const Todo = (props) => {
  return (
    <li className="todo stack-small">
      <div className="c-cb">
        <input type="checkbox" id={props.id} defaultChecked={props.completed}  onChange={() => props.toggleTaskCompleted(props.id)}/>
        <label htmlFor={props.id} className="todo-label">
          {props.name}
        </label>
      </div>
      <div className="btn-group">
        <button type="button" className="btn">
          Edit <span className="visually-hidden">{props.name}</span>
        </button>
        <button className="btn btn__danger">
          Delete <span className="visually-hidden">{props.name}</span>
        </button>
      </div>
    </li>
  );
}

export default Todo;

