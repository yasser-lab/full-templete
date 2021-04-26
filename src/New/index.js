import React , { Component} from 'react'
import About from '../About'
import Home from '../Home'
import Footer from '../Footer'
import Portfolio from '../Portfolio'
import Profile from '../Profile'
import SocialMedia from '../SocialMedia'
import Work from '../Work'

class New extends Component{
  render(){
    return(
      <div>
        <Home />
        <Work />
        <Portfolio />
        <Profile />
        <About />
        <SocialMedia />
        <Footer />
      </div>
    )
  }
}
export default New;
