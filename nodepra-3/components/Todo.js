import { useEffect, useState } from "react";

import Link from "next/link";
import Head from 'next/head';
import completed from "../pages/completed";

const pages = {
  index: { title: 'すべてのToDo', fetchQuery: '' },
  active: { title: '未完了のToDo', fetchQuery: '?completed=false' },
  completed: { title: '完了したToDo', fetchQuery: '?completed=true' },
}

const Todo = (props) => {
  const { page } = props;
  const { title } = pages[page];
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const eventSource = new EventSource('/api/todos/events')
    eventSource.addEventListener('message', e => {
      const todos = JSON.parse(e.data);
      setTodos(
        typeof completed === 'undefined'
          ? todos
          : todos.filter(todo => todo.completed === completed)
      )
    });

    eventSource.addEventListener('error', e => {
      console.log('error: ', e);
    })

    return () => eventSource.close();
  }, [page])

  const pageLinks = Object.keys(pages).map((page, index) =>
    <Link
      href={`/${page === 'index' ? '' : page}`}
      key={index}
    >
      <a style={{ marginRight: 10 }}>{pages[page].title}</a>
    </Link>
  );

  return (<>
    <Head>
      <title>{title}</title>
    </Head>
    <h1>{title}</h1>
    <ul>
      {todos.map(todo => <li key={todo.id}>
          <span
            style={todo.completed ? { textDecoration: 'line-through' } : {}}
          >
            {todo.title}
          </span>
      </li>)}
    </ul>
    <div>{pageLinks}</div>
  </>);
}

export default Todo;
