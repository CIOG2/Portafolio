import type { NextPage } from 'next'
import Header from '@Components/Header';
import Main from '@Components/Main';
import Footer from '@Components/Footer';

const Home: NextPage = () => {
  return (
    <div id = 'APP'>
          <Header/>
          <Main/>
          <Footer/>
    </div>
  )
}

export default Home
