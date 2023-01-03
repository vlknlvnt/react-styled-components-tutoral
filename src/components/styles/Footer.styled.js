import styled from 'styled-components' // İlk adım olarak npm'den kurmuştuk bunu

export const StyledFooter = styled.footer` 
    max-width: 100%;
    padding: 30px 20px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 40px;
    justify-content: space-evenly;

    ul {
        padding-left: 0;
    }

    ul li {
        list-style: none;
    }
    h3 {
        color:  ${ ({ theme }) => theme.colors.purpleText };
    }

    a {
        text-decoration: none;
        color:  ${ ({ theme }) => theme.colors.darkText };
        transition: 0.3s;
        display: block;

        @media (max-width: ${({ theme }) => theme.mobile}) {
            margin: auto;
          }
    }

    a:hover {
        color:  ${ ({ theme }) => theme.colors.pinkText };       
    }

    @media (max-width: ${({ theme }) => theme.mobile}) {
        flex-direction: column;
      }
`

export const FooterLogo = styled.img` 
    height: 100px;
    transition: 0.3s;

    &:hover {
        opacity: 0.8;
    }

`

export const FooterMenu = styled.div` 
    width: auto;
`

export const FooterIconsWrapper = styled.div` 
    display: flex;
    flex-direction: column;
    gap: 20px;
`

export const FooterIconsArea = styled.div` 
    display: flex;
    flex-direction: row;
    gap: 20px;

    img {
        transition: 0.3s;
    }

    img:hover {
        opacity: 0.8;
    }
`

export const FooterIconOne = styled.img` 
    width: 50px;

    @media (max-width: ${({ theme }) => theme.mobile}) {
        width: 20vw;
      }
`

export const FooterIconTwo = styled.img` 
    width: 50px;

    @media (max-width: ${({ theme }) => theme.mobile}) {
        width: 20vw;
      }
`

export const FooterIconThree = styled.img` 
    width: 50px;

    @media (max-width: ${({ theme }) => theme.mobile}) {
        width: 20vw;
      }
`

export const FooterCopyright = styled.div` 
    width: 100%;
    text-align: center;
`