import React from 'react';
import Movies from './components/movies';
import Navbar from './components/navbar';
import Customers from './components/customers';
import Rentals from './components/rentals'
import NotFound from './components/notFound';
import MoviesForm from './components/moviesForm';
import LogForm from "./components/loginForm";
import Register from './components/Register';
// import Slidebar from './components/sidebar2';
import { Route, Switch, Redirect} from 'react-router-dom'
import './App.css';

function App() {
  return (
   <React.Fragment>
  <Navbar/>
  <main className="container">
    <Switch>
      <Route path="/Loging" component={LogForm} />
      <Route path="/movies/:id" component={MoviesForm} />
      <Route path="/movies" component={Movies}></Route>
      <Route path="/customers" component={Customers}></Route>
      <Route path="/rentals" component={Rentals}></Route>
      <Route path="/Not-found" component={NotFound}></Route>   
      <Route path="/register" component={Register} />
      <Redirect from="/" exact to="/movies" /> 
      <Redirect  to="Not-found" />
    </Switch>
  </main>
   </React.Fragment>
   
  );
}

export default App;
