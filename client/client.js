const fetch = require('isomorphic-fetch');

fetch('http://localhost:3000/api/todos').then((res) => {
  console.log(res);
});
