import styled from 'styled-components' // İlk adım olarak npm'den kurmuştuk bunu

export const BlogBtn = styled.button` 
  border-radius: 50px;
  cursor: pointer;
  font-size: 1.3rem;
  padding: 20px 40px;
  margin-block: 20px;
  background-color: ${ ({ theme }) => theme.bgColors.purpleBg };
  color:  ${ ({ theme }) => theme.colors.whiteText };
  transition: 0.3s;

  &:hover {
    background-color: ${ ({ theme }) => theme.bgColors.pinkBg };
    transform: scale(0.95);
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    font-size: 0.8rem;
    padding: 10px 20px;
  }
`



