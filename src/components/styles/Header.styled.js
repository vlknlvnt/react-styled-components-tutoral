import styled from 'styled-components' // İlk adım olarak npm'den kurmuştuk bunu

// styled.xxx derken onun hangi html elementi olacağını söylüyoruz aslında
export const StyledHeader = styled.header` 
    width: 100%;
`

export const Navbar = styled.nav`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-block: 2rem;
`

export const Logo = styled.img`
    height: 100px;
    margin-left: 1rem;
    transition: 0.3s;

    &:hover {
        opacity: 0.8;
    }

    @media (max-width: ${({ theme }) => theme.mobile}) {
        height: 75px;
        margin-left: 0;
      }
`

export const HeaderWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 50px;

    @media (max-width: ${({ theme }) => theme.mobile}) {
        flex-direction: column-reverse;
        padding-inline: 1rem;
        gap: 30px;
      }
`

export const HeaderText = styled.div`
    width: 50%;
    padding-left: 1.5rem;

    @media (max-width: ${({ theme }) => theme.mobile}) {
        width: 100%;
        padding-left: 0;
      }
`

export const HeaderImg = styled.img`
    width: 50%;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;

    @media (max-width: ${({ theme }) => theme.mobile}) {
        width: 100%;
        border-radius: 20px;
      }
`