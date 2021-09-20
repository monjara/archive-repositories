import { useEffect, useState } from "react";

const App = () => {
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch("/admin")
      .then((res) => res.json())
      .then((data) => setData(data.message))
  }, [])

  return (
    <div className="App">
        <p>{!data ? "Loading..." : data}</p>
    </div>
  );
}

export default App;
