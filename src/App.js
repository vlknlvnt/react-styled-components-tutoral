import { GlobalStyles } from './components/styles/Global' /* burası bizim global css'imiz gibi çalışıyor */
import { ThemeProvider } from 'styled-components' /* burası bizim css variables alanımız gibi çalışıyor */
import { Container } from './components/styles/Container.styled'
import Header from './components/Header.js'
import { BlogBtn } from './components/blogs/BlogBtn'
import { BlogOne, BlogOneText, BlogOneImg }  from './components/blogs/BlogOne.js'
import { BlogTwo, BlogTwoText, BlogTwoImg }  from './components/blogs/BlogTwo.js'
import { BlogThree, BlogThreeText, BlogThreeImg }  from './components/blogs/BlogThree'
import { BlogFour, BlogFourText, BlogFourImg }  from './components/blogs/BlogFour'
import Footer from './components/Footer.js'


/* burası bizim css variables alanımız gibi çalışıyor */
const theme = {
  colors: {
    lightGreenText: '#81D5C4',
    blueText: '#9FC6DF',
    darkGreenText: '#297A58',
    pinkText: '#DE9CC9',
    purpleText: '#3F3295',
    whiteText: '#fff',
    darkText: '#000'
  },

  bgColors: {
    lightGreenBg: '#81D5C4',
    lightYellowBg: '#EFF0D1',
    blueBg: '#9FC6DF',
    darkGreenBg: '#297A58',
    pinkBg: '#DE9CC9',
    purpleBg: '#3F3295'
  },

  mobile: '992px'
  
}

function App() {
  return (

    <ThemeProvider theme={theme}>

      <>

      <GlobalStyles />
      <Header />

      
      <Container>
        <h2>Our Options To Provide</h2>
        <p>lorem ipsum</p>

        <BlogOne>
          <BlogOneText>
            <h3>Hello Blog One</h3>
            <p>Litque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.</p>
            <BlogBtn>See More Details</BlogBtn>
          </BlogOneText>
          <BlogOneImg src="./images/cake-2.jpeg" alt="" />
          
        </BlogOne>

        <BlogTwo>          
          
          <BlogTwoImg src="./images/cake-3.jpeg" alt="" />
          <BlogTwoText>
            <h3>Hello Blog Two</h3>
            <p>Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>
            <BlogBtn>See More Details</BlogBtn>
          </BlogTwoText>
          
        </BlogTwo>

        <BlogThree>
          <BlogThreeText>
            <h3>Hello Blog Three</h3>
            <p>Litque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.</p>
            <BlogBtn>See More Details</BlogBtn>
          </BlogThreeText>
          <BlogThreeImg src="./images/cupcake-1.jpeg" alt="" />
          
        </BlogThree>



        <BlogFour>
          <BlogFourImg src="./images/cupcake-2.jpeg" alt="" />
          <BlogFourText>
            <h3>Hello Blog Four</h3>
            <p>Litque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.</p>
            <BlogBtn>See More Details</BlogBtn>
          </BlogFourText>
          
        </BlogFour>

      </Container>  

      <Footer />    
      
      </>

    </ThemeProvider>


  )
}

export default App
