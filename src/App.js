import React, { Suspense, lazy, Fragment } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Loading from './components/Loading';


import {
  Switch,
  Route
} from 'react-router-dom';

console.log(Loading)


const Home = lazy(() => import('./pages/Home'));
const History = lazy(() => import('./pages/History'));
const About = lazy(() => import('./pages/About'));
const Login = lazy(() => import('./pages/Login'));
const Register = lazy(() => import('./pages/Register'));



function App() {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<Loading />}>
          <Switch>
            <Route path="/" exact component={Home} />
            <Fragment>
              <div className='pad'>
                <Route path="/history" component={History} />
                <Route path="/about" component={About} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
              </div>
            </Fragment>
          </Switch>
        </Suspense>
      </main>
      <Footer />
    </>
  );
}

export default App;
