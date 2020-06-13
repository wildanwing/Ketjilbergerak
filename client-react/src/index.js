import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import App from './App.jsx';
import './assets/css/App.css';
import './index.css'
import 'bootstrap/dist/css/bootstrap.css';

import Home from './components/Home';
import About from './screens/About';
import Donasi from './screens/Donasi';
import News from './screens/News';
import Login from './screens/Login';
import SignUp from './screens/Register';

import Readnext from './screens/Readnext';
import Readnext1 from './screens/Readnext1';
import Readnext2 from './screens/Readnext2';

import Register from './screens/Register.jsx';
import Activate from './screens/Activate.jsx';
import Verification from './screens/Verification.jsx'
import VerifSuccess from './screens/VerifSuccess'
import Private from './screens/Private.jsx';
import Admin from './screens/Admin.jsx';
import Reset from './screens/Reset'
import ForgetPassword from './screens/ForgetPassword.jsx';
import ForgetSuccess  from './screens/ForgetSuccess'
import ResetPassword from './screens/ResetPassword.jsx';
import PrivateRoute from './Routes/PrivateRoute';
import AdminRoute from './Routes/AdminRoute';
import 'react-toastify/dist/ReactToastify.css';
import UpdateDonasi from './screens/UpdateDonasi.jsx';
import Navbar from './components/NavBar';
import Footer from './components/Footer';
import EditProfil from './screens/EditProfilePage';
import HistoryDOnation from './screens/HistoryDonationPage';
import NewsPage from './screens/NewsPage';  
import UpdateActivity from './screens/UpdateActivityPage';


ReactDOM.render(
  <div> 
  <App />
  <Navbar />
  <BrowserRouter>
    <Switch>
      <Route exact path="/" render={props => <Home {...props} />} />
      <Route exact path='/home' component={Home} />
      <Route exact path='/about' component={About} />
      <Route exact path='/Donasi' component={Donasi} />
      <Route exact path='/news' component={News} />   

      <Route exact path='/readnext' component={Readnext} />
      <Route exact path='/readnext1' component={Readnext1} />
      <Route exact path='/readnext2' component={Readnext2} />
      
      <Route path='/login' exact render={props => <Login {...props} />} />
      <Route path='/register' exact render={props => <Register {...props} />} />
      
      <Route path='/users/password/forget' exact render={props => <ForgetPassword {...props} />} />
      <Route path='/users/password/forgetsuccess' exact render={props => <ForgetSuccess {...props} />} />
      <Route path='/users/Verification' exact render={props => <Verification {...props} />} />
      <Route path='/users/VerifSuccess' exact render={props => <VerifSuccess {...props} />} />
      <Route path='/users/password/reset/:token' exact render={props => <ResetPassword {...props} />} />
      <Route path='/users/activate/:token' exact render={props => <Activate {...props} />} /> 
      <Route path='/users/Donasi' exact render={props => <NewsPage {...props} />} />
      <Route path='/users/NewsPage' exact render={props => <NewsPage {...props} />} />
      <Route path='/ProgramDonasi/UpdateDonasi' exact render={props => <UpdateDonasi {...props} />} /> 
      <Route path='/ProgramDonasi/UpdateActivity' exact render={props => <UpdateActivity {...props} />} />
      <Route path='/Profile/HistoryDonation' exact render={props => <HistoryDOnation {...props} />} />
      <Route path='/Profile/EditProfile' exact render={props => <EditProfil {...props} />} />   
      <Route path='/Profile/Reset' exact render={props => <Reset {...props} />} />
      <PrivateRoute path="/private" exact component={Private} />
       <AdminRoute path="/admin" exact component={Admin} />
      <Redirect to='/' />
    </Switch>
  </BrowserRouter>
  <Footer />
  </div>,
  document.getElementById('root')
);
