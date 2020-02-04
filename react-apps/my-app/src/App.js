import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';
import Landing from './pages/LandingComponent';
import Login from './pages/LoginComponent';
import ForOFor from './pages/ForOFor';
import Coins from './pages/coins/CoinsComponent';
import Coin from './pages/coins/CoinComponent';
// import News from './pages/news/NewsComponent';

class App extends Component {
    state = {
        coinsList: [],
    };

    filterListById = (list, id) => list.find(coin => coin.Id === id);

    componentDidMount() {
        const myRequest = 'https://min-api.cryptocompare.com/data/all/coinlist';

        fetch(myRequest)
            .then(function(response) {
                return response.json();
            })
            .then(response =>
                this.setState({
                    coinsList: Object.keys(response.Data)
                        .slice(0, 24)
                        .map(key => {
                            return response.Data[key];
                        }),
                }),
            )
            .catch(error => console.log(error));
    }

    render() {
        const { coinsList } = this.state;

        return (
            <BrowserRouter>
                <div className="App">
                    <nav className="main-navigation">
                        <ul>
                            <li>
                                <NavLink to="/home" exact activeClassName="active">
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/login" activeClassName="active">
                                    Login
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/" activeClassName="active">
                                    Coins
                                </NavLink>
                            </li>
                            {/*<li>
                            <NavLink to="/news" activeClassName='active'>News</NavLink>
                        </li>*/}
                            {/*<li><a href="">Link 5</a></li>*/}
                            {/*<li><a href="">Link 6</a></li>*/}
                        </ul>
                    </nav>
                    <Switch>
                        <Route path="/home" exact component={Landing} />
                        <Route path="/login" component={Login} />
                        <Route
                            path="/"
                            exact
                            component={props => (
                                <Coins {...props} coinsList={coinsList} />
                            )}
                        />
                        <Route
                            path="/coins/:id"
                            component={props => (
                                <Coin
                                    {...props}
                                    coin={this.filterListById(
                                        coinsList,
                                        props.match.params.id,
                                    )}
                                />
                            )}
                        />
                        {/*<Route

                        <Coin { ...props } coinsList={ coinsList } />

                            path='/coins/:id'
                            component={ props => <Coin { ...props } coin={ this.filterListById(coinsList, props.match.params.id) } /> }
                        />*/}
                        {/*<Route path='/news' component={ News } />*/}
                        <Route component={ForOFor} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
