import styled from 'styled-components' // İlk adım olarak npm'den kurmuştuk bunu

export const Button = styled.button` 
  border-radius: 50px;
  cursor: pointer;
  font-size: 1.3rem;
  padding: 20px 40px;
  background-color: ${ ({ theme }) => theme.bgColors.blueBg };
  color:  ${ ({ theme }) => theme.colors.whiteText };
  transition: 0.3s;

  &:hover {
    background-color: ${ ({ theme }) => theme.bgColors.darkGreenBg };
    color:  ${ ({ theme }) => theme.bgColors.darkText };
    transform: scale(0.95);
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    font-size: 0.8rem;
    padding: 10px 20px;  }
`


