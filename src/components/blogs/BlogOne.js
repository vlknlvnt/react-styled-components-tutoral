import styled from 'styled-components' // İlk adım olarak npm'den kurmuştuk bunu

export const BlogOne = styled.div`
    width: 100%;
    height: auto;
    background-color: ${ ({ theme }) => theme.bgColors.lightYellowBg };
    border-radius: 20px;
    padding: 20px 50px;
    margin-block: 30px;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 50px;

    @media (max-width: ${({ theme }) => theme.mobile}) {
        flex-direction: column;
        padding: 30px 20px;
        gap: 30px;
      }
`

export const BlogOneText = styled.div`
    width: 50%;

    h3 {
        font-size: 2rem;
        color: ${ ({ theme }) => theme.colors.purpleText };  
    }

    @media (max-width: ${({ theme }) => theme.mobile}) {
        width: 100%;
      }
`

export const BlogOneImg = styled.img`
    height: 33vh;
    margin-left: auto;
    margin-right: auto;
    border-radius: 20px;

    @media (max-width: ${({ theme }) => theme.mobile}) {
        height: auto;
      }
`


