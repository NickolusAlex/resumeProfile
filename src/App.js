import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './pages/design/style.css';

import Home from './pages/home/home';
// import About from './components/About';
// import Contact from './components/Contact';
// import Error from './components/Error';
import Navigation from './pages/menu/menu';
import Blog from './pages/blog/blog';
import NewBlog from './pages/blog/new_blog';

class App extends Component {
  render() {
    
    return (      
       <BrowserRouter>
        <div>
          <Navigation />
            <Switch>
             <Route path="/" component={Home} exact/>
             <Route path="/blog" component={Blog}/>
             <Route path="/blog/new_blog" component={NewBlog}/>
             {/* <Route path="/about" component={About}/>
             <Route path="/contact" component={Contact}/> 
            <Route component={Error}/>*/}
           </Switch>
        </div> 
      </BrowserRouter>
    );
  }
}

export default App;
