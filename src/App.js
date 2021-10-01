import './App.css';

//componets
import NotFound from './components/NotFound'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import Header from './components/Header'

//Routes
import PrivateRoute from "./Routes/PrivateRoute";
import PublicRoute from "./Routes/PublicRoute";

//packages
import { Switch } from "react-router-dom";

//contextes
import ThemeContext from "./Contextes/ThemeContext";

function App() {
  return (
    // <ThemeContext>
    <Switch>

      <PrivateRoute exact path="/dashboard" component={Dashboard} />

      <PublicRoute exact restricted={false} path="/" component={Login} />

      <PublicRoute exact restricted={false} path="/404" component={NotFound} />

      <PublicRoute restricted={false} path="" component={NotFound} />


    </Switch>
    // </ThemeContext>
  );
}

export default App;
