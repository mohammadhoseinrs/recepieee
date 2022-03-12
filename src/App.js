
import Category from "./components/Category";
import Pages from "./pages/Pages";
import {BrowserRouter} from 'react-router-dom'
import Search from "./components/Search";
import styled from 'styled-components'
import {GiKnifeFork} from 'react-icons/gi'
import {Link} from 'react-router-dom'


function App() {
  return (
   <BrowserRouter>
   <Nav>
     <GiKnifeFork/>
     <Logo to={'/'} >deliciouss</Logo>
   </Nav>
   <Search />
   <Category />
   <Pages />
   
   </BrowserRouter>
  );
}


const Logo=styled(Link)`
text-decoration:none;
font-size:1.5rem;
font-weight:400;

`
const Nav=styled.div`
padding:2rem 0rem;
disolay:flex;
justify-content:flex-start;
align-items:center;
  svg{
    font-size:2rem
  }

`

export default App;
