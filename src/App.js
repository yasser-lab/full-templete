import React , { Component} from 'react'
import {BrowserRouter , Route} from 'react-router-dom'
import Contact from './Contact'
import Navbar from './Navbar'
import New from './New'
import Work from '../src/Work'

class App extends Component{
  render(){
    return(
      <BrowserRouter>
        <Navbar />
        <Route exact path="/" component={New} />
        <Route path="/Contact" component={Contact} />
        <Route path="/Work" component={Work} />


      </BrowserRouter>
    )
  }
}
export default App;
