// import logo from './logo.svg';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
// import Layout from './Layout';
// import MainContent from './MainContent';
// import UserList from './UserList';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProductPage from './pages/ProductPage';
// import { Link } from 'react-router-dom/cjs/react-router-dom';
// import Counter from './Counter';
// import NewCounter from './NewCounter';
// import NewUserInfo from './NewUserInfo';
// import UserInfo from './UserInfo';

function App() {
  return (
    <BrowserRouter>
      <div className='pages'>
        <div className='page-header'>
          <NavLink to="/" exact activeClassName="active">Home</NavLink>
          <NavLink to="/about" activeClassName="active">About Us</NavLink>
          <NavLink to="/product"activeClassName="active">Product</NavLink>
        </div>
        <div className='page-content'>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/about">
              <AboutPage path="/about" />
            </Route>
            <Route path="/product/:id">
              <ProductPage />
            </Route>
            <Route path="/product">
              <ProductPage />
            </Route>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
