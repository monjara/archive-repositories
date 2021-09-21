import { BrowserRouter, Route } from "react-router-dom";
import { PublicIndex } from "./public/PublicIndex";
import { AdminIndex } from "./admin/AdminIndex";

const App = () => {
  return (
    <BrowserRouter>
      <Route exact path="/" component={PublicIndex}/>
      <Route exact path="/admin" component={AdminIndex}/>
    </BrowserRouter>
  );
}

export default App;
