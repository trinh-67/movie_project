import logo from './logo.svg';
import React, { useLayoutEffect } from 'react';
import { BrowserRouter, Route, Router, Switch, withRouter } from 'react-router-dom'
import { HomeTemplate } from './templates/HomeTemplate';
import {AdminTemplate} from './templates/AdminTemplate';


//Import history
import {createBrowserHistory} from 'history'
import Loading from './Components/Loading/Loading';
import Home from './pages/Home/Home';
import Checkout from './pages/Checkout/Checkout';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Details from './pages/Details/Details';
import Profile from './pages/Profile/Profile';
import Admin from './pages/Admin/Admin';
//Đối tượng giúp chuyển hướng trang bất kì file nào
export const history = createBrowserHistory();

//scrolltotop
const ScrollToTop = withRouter(({ children, location: { pathname}}) => {
  useLayoutEffect(() => {
    window.scrollTo(0,0);
  }, [pathname])
  return children || null;
})


function App() {
  return (
    <Router history={history}>
      <div className="App">
      <Loading />
      <ScrollToTop>
        <Switch>
          <HomeTemplate exact path="/home" Component={Home} />

          <AdminTemplate exact path="/checkout/:id" component={Checkout} />
          <HomeTemplate exact path="/details/:id" Component={Details} />

          <AdminTemplate exact path="/login" Component={Login} />
          <AdminTemplate exact path="/register" Component={Register}/>

          <HomeTemplate exact path="/profile" Component={Profile} />
          <Route exact path="/admin" component={Admin} />

          <HomeTemplate exact path="/" Component={Home} />
        </Switch>
      </ScrollToTop>
    </div>
    </Router>
  );
}

export default App;
