import React, { Component }  from 'react'
import {PortfolioSection , PortfolioTitle , PortfolioSpan , PortfolioList , PortfolioItem , PortfolioBox, PortfolioImg, PortfolioOverlay, PortfolioOverlaySpan } from  './style.js'
class Portfolio  extends Component {
    render(){
    return(
      <PortfolioSection>
            <PortfolioTitle><PortfolioSpan>My</PortfolioSpan> Portfolio</PortfolioTitle>
            <PortfolioList>
                <PortfolioItem active >All</PortfolioItem>
                <PortfolioItem>HTML</PortfolioItem>
                <PortfolioItem>Photoshop</PortfolioItem>
                <PortfolioItem>Wordpress</PortfolioItem>
                <PortfolioItem>Mobile</PortfolioItem>
            </PortfolioList>
            
            <div className="box">
                
                <PortfolioBox>
                    <PortfolioImg src="images/Portfolio/portfolio-img1.jpg" alt="" />
                    <PortfolioOverlay>
                        <PortfolioOverlaySpan>
                            Show Image
                        </PortfolioOverlaySpan>
                    </PortfolioOverlay>
                </PortfolioBox>
                
                <PortfolioBox>
                    <PortfolioImg src="images/Portfolio/portfolio-img2.jpg" alt="" />
                    <PortfolioOverlay>
                        <PortfolioOverlaySpan>
                            Show Image
                        </PortfolioOverlaySpan>
                    </PortfolioOverlay>
                </PortfolioBox>
                
                <PortfolioBox>
                    <PortfolioImg src="images/Portfolio/portfolio-img3.jpg" alt="" />
                    <PortfolioOverlay>
                        <PortfolioOverlaySpan>
                            Show Image
                        </PortfolioOverlaySpan>
                    </PortfolioOverlay>
                </PortfolioBox>
                
                <PortfolioBox>
                    <PortfolioImg src="images/Portfolio/portfolio-img4.jpg" alt="" />
                    <PortfolioOverlay>
                        <PortfolioOverlaySpan>
                            Show Image
                        </PortfolioOverlaySpan>
                    </PortfolioOverlay>
                </PortfolioBox>
                
                <PortfolioBox>
                    <PortfolioImg src="images/Portfolio/portfolio-img5.jpg" alt="" />
                    <PortfolioOverlay>
                        <PortfolioOverlaySpan>
                            Show Image
                        </PortfolioOverlaySpan>
                    </PortfolioOverlay>
                </PortfolioBox>
                
                <PortfolioBox>
                    <PortfolioImg src="images/Portfolio/portfolio-img6.jpg" alt="" />
                    <PortfolioOverlay>
                        <PortfolioOverlaySpan>
                            Show Image
                        </PortfolioOverlaySpan>
                    </PortfolioOverlay>
                </PortfolioBox>
                
                <PortfolioBox>
                    <PortfolioImg src="images/Portfolio/portfolio-img7.jpg" alt="" />
                    <PortfolioOverlay>
                        <PortfolioOverlaySpan>
                            Show Image
                        </PortfolioOverlaySpan>
                    </PortfolioOverlay>
                </PortfolioBox>
                
                <PortfolioBox>
                    <PortfolioImg src="images/Portfolio/portfolio-img8.jpg" alt="" />
                    <PortfolioOverlay>
                        <PortfolioOverlaySpan>
                            Show Image
                        </PortfolioOverlaySpan>
                    </PortfolioOverlay>
                </PortfolioBox>
                
            </div>
            
        </PortfolioSection>
    )
}
}
export default Portfolio;
