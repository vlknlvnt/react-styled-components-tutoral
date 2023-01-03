import React from 'react'
import { StyledFooter, FooterLogo, FooterMenu, FooterIconsWrapper, FooterIconOne, FooterIconTwo, FooterIconThree, FooterIconsArea, FooterCopyright } from './styles/Footer.styled'


const Footer = () => {
  return (
    <StyledFooter>

      <a href="#"><FooterLogo src="./images/logo.svg" alt="" /></a>
      <FooterMenu>
        <h3>Footer Menu</h3>
        <ul>
          <li><a href="#"><p>Menu Item 1</p></a></li>
          <li><a href="#"><p>Menu Item 2</p></a></li>
          <li><a href="#"><p>Menu Item 3</p></a></li>
          <li><a href="#"><p>Menu Item 4</p></a></li>
        </ul>    
      </FooterMenu>
      <FooterIconsWrapper>
        <h3>In Social Media</h3>  
        <FooterIconsArea>
          <a href="#"><FooterIconOne src="./icons/facebook.svg" alt="" /></a>
          <a href="#"><FooterIconTwo src="./icons/instagram.svg" alt="" /></a>
          <a href="#"><FooterIconThree src="./icons/youtube.svg" alt="" />  </a>        
        </FooterIconsArea>
        
      </FooterIconsWrapper>
      
      <FooterCopyright><p>Copyright © 2023 Designed by Perfist</p></FooterCopyright>
    </StyledFooter>
  )
}

export default Footer