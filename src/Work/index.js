import React, { Component } from 'react'
import axios from 'axios'

import { WorkSection, WorkPart, WorkTitle, Span, Icon, PartTitle, Line, PartDesc } from './style.js'

class  Work extends Component  { 
  

        state ={
            works :  []
        }
        
        componentDidMount () {
            axios.get('js/data.json') .then  ( res => {console.log(res.data)}
            )
        }
        render(){
        return (
            <WorkSection>
                <div className="container">
                    <WorkTitle><Span>My</Span> Work</WorkTitle>
                    <WorkPart first="1">
                        <Icon className="icon fa fa-chain fa-2x"></Icon>
                        <PartTitle className="part-title">React Js</PartTitle>
                        <Line className="line" />
                        <PartDesc className="part-desc">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus quos omnis voluptas ea ipsam! Voluptas.
                        </PartDesc>
                    </WorkPart>
    
                    <WorkPart>
                        <Icon className="icon fa fa-bolt fa-2x"></Icon>
                        <PartTitle className="part-title">JavaScript</PartTitle>
                        <Line className="line" />
                        <PartDesc className="part-desc">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus quos omnis voluptas ea ipsam! Voluptas.
                        </PartDesc>
                    </WorkPart>
    
                    <WorkPart>
                        <Icon className="icon fa fa-tachometer fa-2x"></Icon>
                        <PartTitle className="part-title">Redux</PartTitle>
                        <Line className="line" />
                        <PartDesc className="part-desc">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus quos omnis voluptas ea ipsam! Voluptas.
                        </PartDesc>
                    </WorkPart>
    
                </div>
            </WorkSection>
        )   
    }
    
}
export default Work;
