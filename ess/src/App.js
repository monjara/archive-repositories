import {
  BrowserRouter,
  Route,
  Switch,
} from "react-router-dom";
import IndexScreen from "./screens/IndexScreen";
import AdminIndexScreen from "./screens/admin/AdminIndexScreen";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={IndexScreen} />
        <Route path="/admin" component={AdminIndexScreen} />
      </Switch>
    </BrowserRouter>
  );}

export default App;
