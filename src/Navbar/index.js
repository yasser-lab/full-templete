import React  from 'react'
import { Link } from 'react-router-dom'
import './style.js'
import { Logotext , Logo , UlList , ListItem , Anchor , NavbarSection, Yasser } from './style.js'

const Navbar = () =>{
    return(
        <NavbarSection>
            
        <div className="container">
        
            <Logo>
            <Logotext >Personal Profile</Logotext>
            </Logo>
        
            <UlList>
            <ListItem>
                <Yasser>
                <Link  to="/">Home             </Link>  
                </Yasser>        
            </ListItem>
            <ListItem>  <Anchor>Work                  </Anchor>           </ListItem>
            <ListItem>  <Anchor>Portfolio             </Anchor>           </ListItem>
            <ListItem>  <Anchor>Resume                </Anchor>           </ListItem>
            <ListItem>  <Anchor>About                 </Anchor>           </ListItem>
            <ListItem> 
            <Yasser>
                <Link to="/Contact">Contact   </Link> 
                </Yasser>
            </ListItem>
        </UlList>
        
        </div>
        
      </NavbarSection>   // <div>
      //   <Link to="/"> Home </Link>
      //   <Link to="/contact"> Contact </Link>
      // </div>
    )
}
export default Navbar;
