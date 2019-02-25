import React, { Component, Fragment } from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import App from '../App';
import Login from '../pages/login/index';
import Home from '../pages/home/index';
import Admin from '../pages/admin/index';
import Buttons from '../pages/ui/buttons/index';
import Modals from '../pages/ui/modals/index';
import Loadings from '../pages/ui/loadings/index';
import Notice from '../pages/ui/notice/index';
import Messages from '../pages/ui/messages/index';
import Tabs from '../pages/ui/tabs/index';
import Gallery from '../pages/ui/gallery/index';
import Carousel from '../pages/ui/carousel/index';
import NoMatch from '../pages/nomatch/index';

export default class Routes extends Component {
  render() {
    return (
      <HashRouter>
        <App>
          <Switch>
            <Route path="/login" component={Login}/>
            <Route path='/' render={() =>
              <Admin>
                <Switch>
                  <Route path='/home' component={Home}/>
                  <Route path='/ui/buttons' component={Buttons}/>
                  <Route path='/ui/modals' component={Modals}/>
                  <Route path='/ui/loadings' component={Loadings}/>
                  <Route path='/ui/notice' component={Notice}/>
                  <Route path='/ui/messages' component={Messages}/>
                  <Route path='/ui/tabs' component={Tabs}/>
                  <Route path='/ui/carousel' component={Carousel}/>
                  <Route component={NoMatch}/>
                  <Redirect to="/home"/>
                </Switch>
              </Admin>
            }/>
            <Route to='/order/detail' component={Login}/>
          </Switch>
        </App>
      </HashRouter>
    )
  }
}
