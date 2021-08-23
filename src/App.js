import React, { useState } from "react";
import Todo from "./components/Todo";
import FilterButton from "./components/FilterButton";
import Form from "./components/Form";

const App = (props) => {
  const [tasks, setTasks] = useState(props.tasks);

  const taskList = props.tasks.map(task => (
    <Todo
      id={task.id}
      name={task.name}
      completed={task.completed}
      key={task.id}
    />
  ));

  const filterButtonList = props.filterButtons.map(filterButton => (
    <FilterButton
      taskOption={filterButton.taskOption}
      ariaPressed={filterButton.ariaPressed}
    />
  ));

  const addTask = (name) => {
    const newTask = { id: "id", name: name, completed: false };
    setTasks([...tasks, newTask]);
  }

  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <Form addTask={addTask} />
      <div className="filters btn-group stack-exception">
        {filterButtonList}
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
