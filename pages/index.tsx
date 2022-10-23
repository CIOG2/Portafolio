import type { NextPage } from 'next'
import Header from '../Components/Header';
import Main from '../Components/Main';

const Home: NextPage = () => {
  return (
    <div id = 'APP'>
          <Header/>
          <Main/>
    </div>
  )
}

export default Home
