import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

const Home = () => {
  //console.log('render');
  return <h1> Stron startowa</h1>;
};
const News = () => <h1> Aktualności</h1>;
const Contact = () => <h1> Kontakt do nas</h1>;

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <header>
            <nav>
              <ul>
                {/* <li>
                  <a href='/'>Satrt</a>
                </li>
                <li>
                  <a href='/news'>Aktualnosci</a>
                </li>
                <li>
                  <a href='/contact'>Kontakt</a>
                </li> */}
                <li>
                  <Link to='/'>Start</Link>
                </li>
                <li>
                  <Link to='/news'>Aktualnosci</Link>
                </li>
                <li>
                  <Link to='/contact'>Kontakt</Link>
                </li>
              </ul>
            </nav>
          </header>
          <section>
            <Route path='/' exact component={Home} />
            <Route path='/news' component={News} />
            <Route path='/contact' component={Contact} />
          </section>
        </div>
      </Router>
    );
  }
}

export default App;
