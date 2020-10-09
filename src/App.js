import React from 'react';
import './App.scss';
import HomePage from './pages/homepage/homepage.component';
import BooksPage from './pages/Bookspage/BooksPage.component';
import { Switch, Route} from 'react-router-dom'


const HatsPage =()=>(
  <div>
    <h1> HATS PAGE </h1>
  </div>
)
function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={ HomePage } />
        <Route path='/Books' comoponent={BooksPage}/>
      </Switch>
        
        
    </div>
  );
}

export default App;
