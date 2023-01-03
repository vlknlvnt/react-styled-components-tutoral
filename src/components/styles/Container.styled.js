import styled from 'styled-components' // İlk adım olarak npm'den kurmuştuk bunu

// styled.div diyerek onun bir div olacağını söylüyoruz
export const Container = styled.div` 
  max-width: 100%;
  padding: 0 20px;
  margin: 0 auto;

  h2 {
    color:  ${ ({ theme }) => theme.colors.whiteText };
  }
`