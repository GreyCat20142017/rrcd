import React, { Component } from 'react';
import {Route, Switch, withRouter} from 'react-router-dom';

import Toolbar from './components/Toolbar';
import Content from './components/Content';
import Sidenav from './components/Sidenav';
import PrivateRoute from './components/PrivateRoute';

import Home from './pages/Home';
import About from './pages/About';
import Books from './pages/Books';
import Book from './pages/Book';
import Login from './pages/Login';
import Logout from './pages/Logout';
import NotFound from './pages/NotFound';

import CounterContainer from './pages/CounterContainer';
import TabsContainer from './pages/TabsContainer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {user: null};
  }

  login = (user) => {
    this.setState({user: user}, () => this.props.history.push('/books'));
  }

  logout = () => {
    this.setState({user: null}, () => this.props.history.push('/'));
  }

  render() {
    const {topics, books} = this.props;
        return (

          <div className="app">
              <Toolbar user={this.state.user}/>

              <Content>
                <Route path='/books' render={() => <Sidenav topics={topics}/>} />
                <Switch>
                  <Route exact path='/' component={Home} />
                  <Route path='/about' component={About} />
                  <Route path='/counter' render={(props) => <CounterContainer step={2}/>} />
                  <Route path='/tabs' render={(props) => <TabsContainer/>} />

                  <Route path='/login' render={(props) => <Login onLogin={this.login} {...props}/>} />
                  <Route path='/logout' render={(props) => <Logout onLogout={this.logout} {...props}/>} />


                  <PrivateRoute exact path='/books/:topic?' component={Books} data={books} user={this.state.user} />
                  <PrivateRoute path='/books/:topic/:book' component={Book} data={books} user={this.state.user} />

                  <Route component={NotFound} />
                </Switch>
              </Content>
          </div>

      );
  }
}

export default withRouter(App);

