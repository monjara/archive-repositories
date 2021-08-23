import React from "react";
import Todo from "./components/Todo";

const App = (props) => {

  const taskList = props.tasks.map(task => (
    <Todo
      id={task.id}
      name={task.name}
      completed={task.completed}
      key={task.id}
    />
  ));

  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <form>
        <h2 className="label-wrapper">
          <label htmlFor="new-todo-input" className="label__lg">What needs to be done?</label>
        </h2>
        <input
          type="text"
          id="new-todo-input"
          className="input input__lg"
          name="text"
          autoComplete="off"
        />
        <button
          type="submit"
          className="btn btn__primary btn__lg"
        >Add
        </button>
      </form>
      <div className="filters btn-group stack-exception">
        <button
          type="button"
          aria-pressed="false"
          className="btn toggle-btn"
        >
          <span className="visually-hidden">Show </span>
          <span>All</span>
          <span className="visually-hidden"> tasks</span>
        </button>
        <button
          type="button"
          aria-pressed="false"
          className="btn toggle-btn"
        >
          <span className="visually-hidden">Show </span>
          <span>Active</span>
          <span className="visually-hidden"> tasks</span>
        </button>
        <button
          type="button"
          aria-pressed="false"
          className="btn toggle-btn"
        >
          <span className="visually-hidden">Show </span>
          <span>Complete</span>
          <span className="visually-hidden"> tasks</span>
        </button>
      </div>
      <h2 id="list-heading">
        3 tasks remaining
      </h2>
      <ul
        className="todo-list stack-large stack-exception"
        role="list"
        aria-labelledby="list-heading"
      >
        {taskList}
      </ul>
    </div>
  );
}

export default App;
