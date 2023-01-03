import React from 'react'
import { StyledHeader, Navbar, Logo, HeaderWrapper, HeaderText, HeaderImg } from './styles/Header.styled'
import { Container } from './styles/Container.styled'
import { Button } from './styles/Button.styled'

const Header = () => {
  return (
    <StyledHeader>
        <Container>
            <Navbar>
                <a href="#"><Logo src="./images/logo.svg" alt="" /></a>
                <Button>Try it free</Button>
            </Navbar>  
            
        </Container>
        <HeaderWrapper>
            <HeaderText>
                <h1>Lorem ipsum</h1>
                <p>Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.</p>
            </HeaderText>
            <HeaderImg src="./images/cake-1.jpeg" alt=""/>
        </HeaderWrapper>
    </StyledHeader>
  )
}

export default Header