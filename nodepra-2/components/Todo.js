import { useEffect, useState } from "react";

import Link from "next/link";
import Head from 'next/head';
import 'isomorphic-fetch';

const pages = {
  index: { title: 'すべてのToDo', fetchQuery: '' },
  active: { title: '未完了のToDo', fetchQuery: '?completed=false' },
  completed: { title: '完了したToDo', fetchQuery: '?completed=true' },
}

const Todo = (props) => {
  const { page } = props;
  const { title, fetchQuery } = pages[page];
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch(`/api/todos/${fetchQuery}`)
      .then(async res => {
        res.ok
          ? setTodos(await res.json())
          : alert(res.text())
      });
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
